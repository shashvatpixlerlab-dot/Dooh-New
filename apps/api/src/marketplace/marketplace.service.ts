import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  ACTIVE_HOLD_STATUSES,
  DEVICE_LIVENESS_MINUTES,
  MAX_BOOKING_DAYS,
  SLOT_INDEX_MAX,
  SLOT_INDEX_MIN,
} from "@dooh/shared";
import { PrismaService } from "../prisma/prisma.service";
import { daysBetweenInclusive, parseDateOnly } from "../common/dates";
import { BadRequestException } from "@nestjs/common";

@Injectable()
export class MarketplaceService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService
  ) {}

  private livenessCutoff(): Date {
    const minutes = Number(
      this.config.get("DEVICE_LIVENESS_MINUTES") ?? DEVICE_LIVENESS_MINUTES
    );
    return new Date(Date.now() - minutes * 60 * 1000);
  }

  async listDevices() {
    const cutoff = this.livenessCutoff();
    const devices = await this.prisma.device.findMany({
      where: {
        status: "ACTIVE",
        approvalStatus: "APPROVED",
        OR: [
          { lastSeenAt: { gte: cutoff } },
          ...(process.env.NODE_ENV !== "production"
            ? [{ lastSeenAt: null }]
            : []),
        ],
      },
      include: { venue: true },
      orderBy: { name: "asc" },
    });
    
    return devices.map((d) => ({
      id: d.id,
      name: d.name,
      locationLabel: d.locationLabel,
      venueName: d.venue.name,
      slotDayPrice: Number(d.slotDayPrice),
      resolution: d.resolution,
      orientation: d.orientation,
      defaultImageUrl: d.defaultImageUrl,
      isOnline: d.lastSeenAt ? d.lastSeenAt >= cutoff : false,
      lastSeenAt: d.lastSeenAt,
    }));
  }

  async getDevice(deviceId: string) {
    const cutoff = this.livenessCutoff();
    const d = await this.prisma.device.findFirst({
      where: { id: deviceId, status: "ACTIVE", approvalStatus: "APPROVED" },
      include: { venue: true },
    });
    if (!d) return null;

    return {
      id: d.id,
      name: d.name,
      locationLabel: d.locationLabel,
      venueName: d.venue.name,
      slotDayPrice: Number(d.slotDayPrice),
      resolution: d.resolution,
      orientation: d.orientation,
      defaultImageUrl: d.defaultImageUrl,
      isOnline: d.lastSeenAt ? d.lastSeenAt >= cutoff : false,
      lastSeenAt: d.lastSeenAt,
    };
  }

  async getAvailability(deviceId: string, dateStart: string, dateEnd: string) {
    const start = parseDateOnly(dateStart);
    const end = parseDateOnly(dateEnd);
    if (end < start) {
      throw new BadRequestException("date_end must be >= date_start");
    }
    const dayCount = daysBetweenInclusive(start, end);
    if (dayCount > MAX_BOOKING_DAYS) {
      throw new BadRequestException(
        `Date range cannot exceed ${MAX_BOOKING_DAYS} days`
      );
    }

    const now = new Date();
    const cutoff = this.livenessCutoff();

    const device = await this.prisma.device.findUnique({
      where: { id: deviceId },
      select: { lastSeenAt: true },
    });
    if (!device?.lastSeenAt || device.lastSeenAt < cutoff) {
      throw new BadRequestException("Device is offline (no recent heartbeat)");
    }

    const slots: { slotIndex: number; available: boolean }[] = [];

    for (let slot = SLOT_INDEX_MIN; slot <= SLOT_INDEX_MAX; slot++) {
      const occupied = await this.prisma.slotOccupancy.count({
        where: {
          deviceId,
          slotIndex: slot,
          playDate: { gte: start, lte: end },
        },
      });

      const held = await this.prisma.booking.count({
        where: {
          deviceId,
          slotIndex: slot,
          status: { in: ACTIVE_HOLD_STATUSES },
          holdExpiresAt: { gt: now },
          dateStart: { lte: end },
          dateEnd: { gte: start },
        },
      });

      slots.push({
        slotIndex: slot,
        available: occupied === 0 && held === 0,
      });
    }

    const anyAvailable = slots.some((s) => s.available);
    return { deviceId, dateStart, dateEnd, slots, bookable: anyAvailable };
  }
}
