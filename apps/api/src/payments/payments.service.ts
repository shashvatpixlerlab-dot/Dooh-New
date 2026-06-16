import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Razorpay from "razorpay";
import { BookingService } from "../booking/booking.service";
import { NotificationsService } from "../notifications/notifications.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PaymentsService {
  private razorpay: Razorpay | null = null;

  constructor(
    private config: ConfigService,
    private bookingService: BookingService,
    private notifications: NotificationsService,
    private prisma: PrismaService
  ) {
    const keyId = this.config.get<string>("RAZORPAY_KEY_ID");
    const keySecret = this.config.get<string>("RAZORPAY_KEY_SECRET");
    if (keyId && keySecret) {
      this.razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
    }
  }

  async createOrder(bookingId: string, amountInr: number) {
    const amountPaise = Math.round(amountInr * 100);

    if (!this.razorpay) {
      const mockId = `order_mock_${bookingId.slice(0, 8)}`;
      await this.prisma.payment.upsert({
        where: { bookingId },
        update: { razorpayOrderId: mockId, amount: amountInr },
        create: {
          bookingId,
          razorpayOrderId: mockId,
          amount: amountInr,
          status: "CREATED",
        },
      });
      return { id: mockId, amount: amountPaise, currency: "INR" };
    }

    const order = await this.razorpay.orders.create({
      amount: amountPaise,
      currency: "INR",
      notes: { booking_id: bookingId },
    });

    await this.prisma.payment.upsert({
      where: { bookingId },
      update: { razorpayOrderId: order.id, amount: amountInr },
      create: {
        bookingId,
        razorpayOrderId: order.id,
        amount: amountInr,
        status: "CREATED",
      },
    });

    return order;
  }

  verifyWebhookSignature(body: string, signature: string): boolean {
    const secret = this.config.get<string>("RAZORPAY_WEBHOOK_SECRET");
    if (!secret) return process.env.NODE_ENV !== "production";
    const crypto = require("crypto") as typeof import("crypto");
    const expected = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");
    return expected === signature;
  }

  async handleWebhook(payload: {
    event: string;
    payload: {
      payment?: { entity: { id: string; order_id: string; amount: number; status: string; notes?: Record<string, string> } };
    };
  }) {
    if (payload.event !== "payment.captured") return { handled: false };

    const payment = payload.payload.payment?.entity;
    if (!payment) return { handled: false };

    const bookingId =
      payment.notes?.booking_id ??
      (await this.prisma.payment.findFirst({
        where: { razorpayOrderId: payment.order_id },
      }))?.bookingId;

    if (!bookingId) return { handled: false, error: "booking_not_found" };

    const result = await this.bookingService.confirmPayment(
      bookingId,
      payment.id,
      payment.amount / 100
    );

    if (!result.alreadyProcessed && !result.expired) {
      const booking = await this.prisma.booking.findUnique({
        where: { id: bookingId },
        include: { advertiser: true, device: true },
      });
      if (booking) {
        await this.notifications.notifyNewBooking(booking);
      }
    }

    return { handled: true, ...result };
  }

  async simulateCapture(bookingId: string) {
    const payment = await this.prisma.payment.findUnique({
      where: { bookingId },
    });
    const paymentId = `pay_mock_${bookingId.slice(0, 8)}`;
    const amount = Number(payment?.amount ?? 0);
    return this.bookingService.confirmPayment(bookingId, paymentId, amount);
  }
}
