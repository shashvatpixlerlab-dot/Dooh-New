import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  BookingStatus,
  Prisma,
  RevenueModel,
} from "@dooh/db";
import {
  ACTIVE_HOLD_STATUSES,
  canTransition,
  DEVICE_LIVENESS_MINUTES,
  MAX_BOOKING_DAYS,
  SLOT_INDEX_MAX,
  SLOT_INDEX_MIN,
} from "@dooh/shared";
import { PrismaService } from "../prisma/prisma.service";
import {
  daysBetweenInclusive,
  eachPlayDate,
  parseDateOnly,
  todayInTz,
} from "../common/dates";

@Injectable()
export class BookingService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService
  ) {}

  private holdTtlMs(): number {
    const minutes = Number(
      this.config.get("HOLD_TTL_MINUTES") ?? 15
    );
    return minutes * 60 * 1000;
  }

  async logEvent(
    tx: Prisma.TransactionClient,
    bookingId: string,
    fromStatus: BookingStatus | null,
    toStatus: BookingStatus,
    actor: string,
    metadata?: Record<string, unknown>
  ) {
    await tx.bookingEvent.create({
      data: {
        bookingId,
        fromStatus: fromStatus ?? undefined,
        toStatus,
        actor,
        metadata: metadata as Prisma.InputJsonValue,
      },
    });
  }

  async findAvailableSlot(
    tx: Prisma.TransactionClient,
    deviceId: string,
    dateStart: Date,
    dateEnd: Date
  ): Promise<number> {
    await tx.$executeRaw`SELECT id FROM devices WHERE id = ${deviceId}::uuid FOR UPDATE`;

    for (let slot = SLOT_INDEX_MIN; slot <= SLOT_INDEX_MAX; slot++) {
      const available = await this.isSlotAvailable(
        tx,
        deviceId,
        slot,
        dateStart,
        dateEnd
      );
      if (available) return slot;
    }
    throw new ConflictException("No slots available for selected dates");
  }

  async isSlotAvailable(
    tx: Prisma.TransactionClient,
    deviceId: string,
    slotIndex: number,
    dateStart: Date,
    dateEnd: Date
  ): Promise<boolean> {
    const days = eachPlayDate(dateStart, dateEnd);

    const occupied = await tx.slotOccupancy.count({
      where: {
        deviceId,
        slotIndex,
        playDate: { in: days },
      },
    });
    if (occupied > 0) return false;

    const now = new Date();
    const activeHolds = await tx.booking.count({
      where: {
        deviceId,
        slotIndex,
        status: { in: ACTIVE_HOLD_STATUSES },
        holdExpiresAt: { gt: now },
        OR: [
          {
            dateStart: { lte: dateEnd },
            dateEnd: { gte: dateStart },
          },
        ],
      },
    });
    return activeHolds === 0;
  }

  async createHold(input: {
    advertiserId: string;
    deviceId: string;
    dateStart: Date;
    dateEnd: Date;
  }) {
    if (input.dateEnd < input.dateStart) {
      throw new BadRequestException("date_end must be >= date_start");
    }
    if (daysBetweenInclusive(input.dateStart, input.dateEnd) > MAX_BOOKING_DAYS) {
      throw new BadRequestException(
        `Date range cannot exceed ${MAX_BOOKING_DAYS} days`
      );
    }

    const device = await this.prisma.device.findUnique({
      where: { id: input.deviceId },
      include: { venue: true },
    });
    if (!device || device.status !== "ACTIVE") {
      throw new NotFoundException("Device not found");
    }

    const livenessMinutes = Number(
      this.config.get("DEVICE_LIVENESS_MINUTES") ?? DEVICE_LIVENESS_MINUTES
    );
    const cutoff = new Date(Date.now() - livenessMinutes * 60 * 1000);
    if (device.lastSeenAt && device.lastSeenAt < cutoff) {
      throw new BadRequestException("Device is offline");
    }

    const dayCount = daysBetweenInclusive(input.dateStart, input.dateEnd);
    const priceTotal = Number(device.slotDayPrice) * dayCount;
    const holdExpiresAt = new Date(Date.now() + this.holdTtlMs());

    return this.prisma.$transaction(async (tx) => {
      const slotIndex = await this.findAvailableSlot(
        tx,
        input.deviceId,
        input.dateStart,
        input.dateEnd
      );

      const booking = await tx.booking.create({
        data: {
          advertiserId: input.advertiserId,
          deviceId: input.deviceId,
          slotIndex,
          dateStart: input.dateStart,
          dateEnd: input.dateEnd,
          priceTotal,
          venueSplitAmount: 0,
          status: BookingStatus.HELD,
          holdExpiresAt,
        },
      });

      await this.logEvent(
        tx,
        booking.id,
        BookingStatus.DRAFT,
        BookingStatus.HELD,
        "system",
        { slotIndex }
      );

      return booking;
    });
  }

  async transition(
    bookingId: string,
    toStatus: BookingStatus,
    actor: string,
    metadata?: Record<string, unknown>
  ) {
    return this.prisma.$transaction(async (tx) => {
      const booking = await tx.booking.findUnique({
        where: { id: bookingId },
        include: { device: { include: { venue: true } } },
      });
      if (!booking) throw new NotFoundException("Booking not found");

      if (!canTransition(booking.status, toStatus)) {
        throw new BadRequestException(
          `Cannot transition ${booking.status} -> ${toStatus}`
        );
      }

      const updated = await tx.booking.update({
        where: { id: bookingId },
        data: { status: toStatus },
      });

      await this.logEvent(
        tx,
        bookingId,
        booking.status,
        toStatus,
        actor,
        metadata
      );

      return { booking: updated, previous: booking };
    });
  }

  async confirmPayment(bookingId: string, razorpayPaymentId: string, amount: number) {
    return this.prisma.$transaction(async (tx) => {
      const existing = await tx.payment.findUnique({
        where: { razorpayPaymentId },
      });
      if (existing) {
        return { alreadyProcessed: true, bookingId: existing.bookingId };
      }

      const booking = await tx.booking.findUnique({
        where: { id: bookingId },
        include: { device: { include: { venue: true } } },
      });
      if (!booking) throw new NotFoundException("Booking not found");

      if (
        booking.status === BookingStatus.PENDING_APPROVAL ||
        booking.status === BookingStatus.APPROVED
      ) {
        return { alreadyProcessed: true, bookingId };
      }

      if (booking.status !== BookingStatus.AWAITING_PAYMENT) {
        if (booking.status === BookingStatus.EXPIRED) {
          return { alreadyProcessed: true, bookingId, expired: true };
        }
        throw new BadRequestException(`Booking status is ${booking.status}`);
      }

      if (booking.holdExpiresAt && booking.holdExpiresAt < new Date()) {
        await this.logEvent(
          tx,
          bookingId,
          booking.status,
          BookingStatus.EXPIRED,
          "system",
          { reason: "hold_expired_at_payment" }
        );
        await tx.booking.update({
          where: { id: bookingId },
          data: { status: BookingStatus.EXPIRED },
        });
        return { alreadyProcessed: true, bookingId, expired: true };
      }

      const venue = booking.device.venue;
      let venueSplit = 0;
      if (venue.revenueModel === RevenueModel.percentage) {
        venueSplit = Number(booking.priceTotal) * Number(venue.revenueValue);
      }

      const days = eachPlayDate(booking.dateStart, booking.dateEnd);
      for (const playDate of days) {
        try {
          await tx.slotOccupancy.create({
            data: {
              deviceId: booking.deviceId,
              bookingId: booking.id,
              slotIndex: booking.slotIndex,
              playDate,
            },
          });
        } catch (e) {
          if (
            e instanceof Prisma.PrismaClientKnownRequestError &&
            e.code === "P2002"
          ) {
            throw new ConflictException("Slot no longer available");
          }
          throw e;
        }
      }

      await tx.payment.upsert({
        where: { bookingId },
        update: {
          razorpayPaymentId,
          amount,
          status: "CAPTURED",
        },
        create: {
          bookingId,
          razorpayPaymentId,
          amount,
          status: "CAPTURED",
        },
      });

      await tx.booking.update({
        where: { id: bookingId },
        data: {
          status: BookingStatus.PENDING_APPROVAL,
          venueSplitAmount: venueSplit,
        },
      });

      await this.logEvent(
        tx,
        bookingId,
        BookingStatus.AWAITING_PAYMENT,
        BookingStatus.PENDING_APPROVAL,
        "razorpay",
        { razorpayPaymentId }
      );

      return { alreadyProcessed: false, bookingId };
    });
  }

  async releaseOccupancy(bookingId: string) {
    await this.prisma.slotOccupancy.deleteMany({ where: { bookingId } });
  }

  async releaseFutureOccupancy(bookingId: string, fromDate: Date) {
    await this.prisma.slotOccupancy.deleteMany({
      where: { bookingId, playDate: { gte: fromDate } },
    });
  }

  async expireStaleHolds() {
    const now = new Date();
    const stale = await this.prisma.booking.findMany({
      where: {
        status: { in: ACTIVE_HOLD_STATUSES },
        holdExpiresAt: { lt: now },
      },
    });

    for (const booking of stale) {
      await this.transition(booking.id, BookingStatus.EXPIRED, "cron", {
        reason: "hold_expired",
      });
    }
    return stale.length;
  }

  async completePastBookings() {
    const today = parseDateOnly(todayInTz());
    const approved = await this.prisma.booking.findMany({
      where: {
        status: BookingStatus.APPROVED,
        dateEnd: { lt: today },
      },
    });
    for (const b of approved) {
      await this.transition(b.id, BookingStatus.COMPLETED, "cron");
    }
    return approved.length;
  }
}
