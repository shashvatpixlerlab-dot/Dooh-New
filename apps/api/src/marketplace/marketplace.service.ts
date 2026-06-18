import { Injectable, BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { BookingStatus, ModerationStatus } from "@dooh/db";
import {
  ACTIVE_HOLD_STATUSES,
  DEVICE_LIVENESS_MINUTES,
  MAX_BOOKING_DAYS,
  SLOT_INDEX_MAX,
  SLOT_INDEX_MIN,
} from "@dooh/shared";
import { PrismaService } from "../prisma/prisma.service";
import {
  daysBetweenInclusive,
  parseDateOnly,
  todayInTz,
} from "../common/dates";

type DeviceRow = {
  id: string;
  name: string;
  locationLabel: string;
  slotDayPrice: unknown;
  resolution: string;
  orientation: string;
  defaultImageUrl: string;
  lastSeenAt: Date | null;
  currentlyShowingSlot: number | null;
  venue: { name: string };
};

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

  private isDeviceOnline(lastSeenAt: Date | null, cutoff: Date): boolean {
    return Boolean(lastSeenAt && lastSeenAt >= cutoff);
  }

  private async approvedCampaignSlotsByDevice(
    deviceIds: string[]
  ): Promise<Map<string, Set<number>>> {
    if (deviceIds.length === 0) return new Map();

    const playDate = parseDateOnly(todayInTz());
    const occupancies = await this.prisma.slotOccupancy.findMany({
      where: {
        deviceId: { in: deviceIds },
        playDate,
        booking: {
          status: BookingStatus.APPROVED,
          creative: { moderationStatus: ModerationStatus.APPROVED },
        },
      },
      select: { deviceId: true, slotIndex: true },
    });

    const map = new Map<string, Set<number>>();
    for (const occ of occupancies) {
      const slots = map.get(occ.deviceId) ?? new Set<number>();
      slots.add(occ.slotIndex);
      map.set(occ.deviceId, slots);
    }
    return map;
  }

  private mapDevice(
    d: DeviceRow,
    cutoff: Date,
    approvedSlots: Set<number> | undefined
  ) {
    const isOnline = this.isDeviceOnline(d.lastSeenAt, cutoff);
    const showingSlot = d.currentlyShowingSlot;
    const isLive = Boolean(
      isOnline &&
        showingSlot != null &&
        approvedSlots?.has(showingSlot)
    );

    return {
      id: d.id,
      name: d.name,
      locationLabel: d.locationLabel,
      venueName: d.venue.name,
      slotDayPrice: Number(d.slotDayPrice),
      resolution: d.resolution,
      orientation: d.orientation,
      defaultImageUrl: d.defaultImageUrl,
      isOnline,
      isLive,
      currentlyShowingSlot: showingSlot,
      lastSeenAt: d.lastSeenAt,
    };
  }

  async listDevices() {
    const cutoff = this.livenessCutoff();
    const devices = await this.prisma.device.findMany({
      where: {
        status: "ACTIVE",
        approvalStatus: "APPROVED",
        lastSeenAt: { gte: cutoff },
      },
      include: { venue: true },
      orderBy: { name: "asc" },
    });

    const approvedSlots = await this.approvedCampaignSlotsByDevice(
      devices.map((d) => d.id)
    );

    return devices.map((d) =>
      this.mapDevice(d, cutoff, approvedSlots.get(d.id))
    );
  }

  async getDevice(deviceId: string) {
    const cutoff = this.livenessCutoff();
    const d = await this.prisma.device.findFirst({
      where: {
        id: deviceId,
        status: "ACTIVE",
        approvalStatus: "APPROVED",
      },
      include: { venue: true },
    });
    if (!d) return null;

    const approvedSlots = await this.approvedCampaignSlotsByDevice([d.id]);
    return this.mapDevice(d, cutoff, approvedSlots.get(d.id));
  }

  async getStats() {
    const cutoff = this.livenessCutoff();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const onlineDevices = await this.prisma.device.findMany({
      where: {
        status: "ACTIVE",
        approvalStatus: "APPROVED",
        lastSeenAt: { gte: cutoff },
      },
      select: { id: true, currentlyShowingSlot: true },
    });

    const approvedSlots = await this.approvedCampaignSlotsByDevice(
      onlineDevices.map((d) => d.id)
    );

    const screensLive = onlineDevices.filter(
      (d) =>
        d.currentlyShowingSlot != null &&
        approvedSlots.get(d.id)?.has(d.currentlyShowingSlot)
    ).length;

    const [liveCampaigns, revenueAgg, activeVenues] = await Promise.all([
      this.prisma.booking.count({
        where: {
          status: "APPROVED",
          dateEnd: { gte: today },
        },
      }),
      this.prisma.booking.aggregate({
        where: { status: { in: ["APPROVED", "COMPLETED"] } },
        _sum: { priceTotal: true },
      }),
      this.prisma.venue.count({ where: { status: "ACTIVE" } }),
    ]);

    return {
      screensOnline: onlineDevices.length,
      screensLive,
      liveCampaigns,
      revenueGenerated: Number(revenueAgg._sum.priceTotal ?? 0),
      activeVenues,
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
