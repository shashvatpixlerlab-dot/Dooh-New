import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AdvertiserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(advertiserId: string) {
    const advertiser = await this.prisma.advertiser.findUnique({
      where: { id: advertiserId },
      select: { id: true, email: true, name: true, phone: true },
    });
    if (!advertiser) {
      throw new NotFoundException("Advertiser profile not found");
    }
    return advertiser;
  }

  listBookings(advertiserId: string) {
    return this.prisma.booking.findMany({
      where: { advertiserId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        status: true,
        slotIndex: true,
        dateStart: true,
        dateEnd: true,
        priceTotal: true,
        device: { select: { name: true, locationLabel: true } },
        creative: {
          select: {
            moderationStatus: true,
            imageUrl: true,
            rejectionReason: true,
          },
        },
      },
    });
  }

  async getBooking(advertiserId: string, bookingId: string) {
    const booking = await this.prisma.booking.findFirst({
      where: { id: bookingId, advertiserId },
      include: {
        device: { select: { name: true, locationLabel: true } },
        creative: true,
        payment: { select: { status: true } },
      },
    });
    if (!booking) {
      throw new NotFoundException("Booking not found");
    }
    return booking;
  }
}
