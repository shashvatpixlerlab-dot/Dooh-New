import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  BookingStatus,
  DeviceApprovalStatus,
  DeviceOrientation,
  DeviceStatus,
  ModerationStatus,
  RevenueModel,
  VenueStatus,
} from "@dooh/db";
import { PrismaService } from "../prisma/prisma.service";
import { BookingService } from "../booking/booking.service";
import { DeviceService } from "../device/device.service";
import { BunnyService } from "../creatives/bunny.service";
import { DEVICE_LIVENESS_MINUTES } from "@dooh/shared";
import { parseDateOnly, todayInTz } from "../common/dates";

@Injectable()
export class AdminService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private bookingService: BookingService,
    private deviceService: DeviceService,
    private bunny: BunnyService
  ) {}

  async listVenues() {
    return this.prisma.venue.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        contactEmail: true,
        contactPhone: true,
        revenueModel: true,
        revenueValue: true,
        defaultImageUrl: true,
        status: true,
      },
    });
  }

  async listDevices() {
    return this.prisma.device.findMany({
      orderBy: [{ name: "asc" }],
      select: {
        id: true,
        venueId: true,
        name: true,
        locationLabel: true,
        resolution: true,
        orientation: true,
        defaultImageUrl: true,
        slotDayPrice: true,
        status: true,
        approvalStatus: true,
        venue: { select: { id: true, name: true } },
      },
    });
  }

  async updateVenue(
    id: string,
    data: {
      name?: string;
      contactEmail?: string;
      contactPhone?: string;
      revenueModel?: RevenueModel;
      revenueValue?: number;
      defaultImageUrl?: string;
      status?: VenueStatus;
    }
  ) {
    const venue = await this.prisma.venue.findUnique({ where: { id } });
    if (!venue) throw new NotFoundException("Venue not found");
    return this.prisma.venue.update({ where: { id }, data });
  }

  async updateDevice(
    id: string,
    data: {
      name?: string;
      locationLabel?: string;
      resolution?: string;
      orientation?: DeviceOrientation;
      defaultImageUrl?: string;
      slotDayPrice?: number;
      status?: DeviceStatus;
    }
  ) {
    const device = await this.prisma.device.findUnique({ where: { id } });
    if (!device) throw new NotFoundException("Device not found");
    return this.prisma.device.update({ where: { id }, data });
  }

  async createVenue(data: {
    name: string;
    contactEmail: string;
    contactPhone: string;
    revenueModel: RevenueModel;
    revenueValue: number;
    defaultImageUrl: string;
  }) {
    return this.prisma.venue.create({ data });
  }

  async createDevice(data: {
    venueId: string;
    name: string;
    locationLabel: string;
    resolution: string;
    orientation?: DeviceOrientation;
    defaultImageUrl?: string;
    slotDayPrice: number;
  }) {
    const venue = await this.prisma.venue.findUnique({
      where: { id: data.venueId },
    });
    if (!venue) throw new NotFoundException("Venue not found");

    const { credential, hash } = await this.deviceService.generateCredential();

    const device = await this.prisma.device.create({
      data: {
        venueId: data.venueId,
        name: data.name,
        locationLabel: data.locationLabel,
        resolution: data.resolution,
        orientation: data.orientation ?? DeviceOrientation.landscape,
        defaultImageUrl: data.defaultImageUrl ?? venue.defaultImageUrl,
        slotDayPrice: data.slotDayPrice,
        credentialHash: hash,
        approvalStatus: DeviceApprovalStatus.APPROVED,
      },
    });

    return { device, credential };
  }

  async listScreens(approvalStatus?: DeviceApprovalStatus) {
    return this.prisma.device.findMany({
      where: approvalStatus ? { approvalStatus } : undefined,
      include: {
        venue: { select: { name: true, contactEmail: true } },
        images: { orderBy: { sortOrder: "asc" }, take: 1 },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async approveScreen(deviceId: string) {
    const device = await this.prisma.device.findUnique({
      where: { id: deviceId },
    });
    if (!device) throw new NotFoundException("Screen not found");
    if (device.approvalStatus === DeviceApprovalStatus.APPROVED) {
      throw new BadRequestException("Screen is already approved");
    }

    return this.prisma.device.update({
      where: { id: deviceId },
      data: {
        approvalStatus: DeviceApprovalStatus.APPROVED,
        status: DeviceStatus.ACTIVE,
        rejectionReason: null,
      },
    });
  }

  async rejectScreen(deviceId: string, rejectionReason: string) {
    const device = await this.prisma.device.findUnique({
      where: { id: deviceId },
    });
    if (!device) throw new NotFoundException("Screen not found");
    if (device.approvalStatus === DeviceApprovalStatus.REJECTED) {
      throw new BadRequestException("Screen is already rejected");
    }

    return this.prisma.device.update({
      where: { id: deviceId },
      data: {
        approvalStatus: DeviceApprovalStatus.REJECTED,
        status: DeviceStatus.INACTIVE,
        rejectionReason,
      },
    });
  }

  async listBookings(status?: BookingStatus) {
    return this.prisma.booking.findMany({
      where: status ? { status } : undefined,
      include: {
        advertiser: true,
        device: { include: { venue: true } },
        creative: true,
        payment: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async approveBooking(bookingId: string, adminEmail: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
      include: { creative: true },
    });
    if (!booking) throw new NotFoundException("Booking not found");

    await this.prisma.creative.update({
      where: { bookingId },
      data: { moderationStatus: ModerationStatus.APPROVED },
    });

    return this.bookingService.transition(
      bookingId,
      BookingStatus.APPROVED,
      adminEmail
    );
  }

  async rejectBooking(
    bookingId: string,
    adminEmail: string,
    rejectionReason: string
  ) {
    await this.prisma.creative.update({
      where: { bookingId },
      data: {
        moderationStatus: ModerationStatus.REJECTED,
        rejectionReason,
      },
    });

    await this.bookingService.transition(
      bookingId,
      BookingStatus.REJECTED,
      adminEmail,
      { rejectionReason }
    );
    await this.bookingService.releaseOccupancy(bookingId);
    return { ok: true, message: "Rejected. Process refund manually in Razorpay." };
  }

  async markRefunded(bookingId: string, adminEmail: string) {
    await this.bookingService.transition(
      bookingId,
      BookingStatus.REFUNDED,
      adminEmail
    );
    await this.bookingService.releaseOccupancy(bookingId);
    return { ok: true };
  }

  async cancelBooking(bookingId: string, adminEmail: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: bookingId },
    });
    if (!booking) throw new NotFoundException();

    await this.bookingService.transition(
      bookingId,
      BookingStatus.CANCELLED,
      adminEmail
    );

    const today = parseDateOnly(todayInTz());
    await this.bookingService.releaseFutureOccupancy(bookingId, today);
    return { ok: true };
  }

  async screenHealth() {
    const cutoff = new Date(
      Date.now() -
        Number(this.config.get("DEVICE_LIVENESS_MINUTES") ?? DEVICE_LIVENESS_MINUTES) *
        60 *
        1000
    );
    const devices = await this.prisma.device.findMany({
      include: { venue: true },
      orderBy: { name: "asc" },
    });

    return devices.map((d) => ({
      id: d.id,
      name: d.name,
      venue: d.venue.name,
      isOnline: d.lastSeenAt ? d.lastSeenAt >= cutoff : false,
      lastSeenAt: d.lastSeenAt,
      currentlyShowingSlot: d.currentlyShowingSlot,
      status: d.status,
    }));
  }

  presignUpload(prefix: "venues" | "devices", filename: string) {
    const path = this.bunny.getUploadPath(prefix, filename);
    return this.bunny.getPresignedUpload(path);
  }
}
