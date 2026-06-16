import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { BookingStatus } from "@dooh/db";
import { BookingService } from "./booking.service";
import { CreateHoldDto } from "./dto/create-hold.dto";
import { PrismaService } from "../prisma/prisma.service";
import { parseDateOnly } from "../common/dates";
import { PaymentsService } from "../payments/payments.service";
import { OptionalAdvertiserAuthGuard } from "../auth/optional-advertiser-auth.guard";

type AdvertiserRequest = {
  advertiser?: {
    userId: string;
    email: string;
    advertiserId: string;
  };
};

@Controller("bookings")
export class BookingController {
  constructor(
    private bookingService: BookingService,
    private prisma: PrismaService,
    private paymentsService: PaymentsService
  ) {}

  @Post("hold")
  @UseGuards(OptionalAdvertiserAuthGuard)
  async createHold(
    @Body() dto: CreateHoldDto,
    @Req() req: AdvertiserRequest
  ) {
    const advertiser = req.advertiser
      ? await this.resolveAuthenticatedAdvertiser(req.advertiser, dto)
      : await this.resolveGuestAdvertiser(dto);

    const booking = await this.bookingService.createHold({
      advertiserId: advertiser.id,
      deviceId: dto.deviceId,
      dateStart: parseDateOnly(dto.dateStart),
      dateEnd: parseDateOnly(dto.dateEnd),
    });

    await this.bookingService.transition(
      booking.id,
      BookingStatus.AWAITING_PAYMENT,
      "advertiser"
    );

    const order = await this.paymentsService.createOrder(
      booking.id,
      Number(booking.priceTotal)
    );

    return {
      bookingId: booking.id,
      slotIndex: booking.slotIndex,
      priceTotal: Number(booking.priceTotal),
      holdExpiresAt: booking.holdExpiresAt,
      razorpayOrderId: order.id,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    };
  }

  private async resolveAuthenticatedAdvertiser(
    auth: NonNullable<AdvertiserRequest["advertiser"]>,
    dto: CreateHoldDto
  ) {
    const advertiser = await this.prisma.advertiser.findUnique({
      where: { id: auth.advertiserId },
    });
    if (!advertiser || advertiser.userId !== auth.userId) {
      throw new NotFoundException("Advertiser profile not found");
    }

    const updates: { name?: string; phone?: string } = {};
    if (dto.advertiserName?.trim()) updates.name = dto.advertiserName.trim();
    if (dto.advertiserPhone?.trim()) updates.phone = dto.advertiserPhone.trim();

    if (Object.keys(updates).length === 0) {
      return advertiser;
    }

    return this.prisma.advertiser.update({
      where: { id: advertiser.id },
      data: updates,
    });
  }

  private async resolveGuestAdvertiser(dto: CreateHoldDto) {
    if (!dto.advertiserEmail || !dto.advertiserName || !dto.advertiserPhone) {
      throw new BadRequestException(
        "Name, email, and phone are required for guest checkout"
      );
    }

    return this.prisma.advertiser.upsert({
      where: { email: dto.advertiserEmail },
      update: {
        name: dto.advertiserName,
        phone: dto.advertiserPhone,
      },
      create: {
        email: dto.advertiserEmail,
        name: dto.advertiserName,
        phone: dto.advertiserPhone,
      },
    });
  }

  @Get(":id")
  async getBooking(@Param("id") id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        creative: true,
        payment: true,
        device: { include: { venue: true } },
        advertiser: true,
        events: { orderBy: { createdAt: "asc" } },
      },
    });
    if (!booking) throw new NotFoundException("Booking not found");
    return booking;
  }
}
