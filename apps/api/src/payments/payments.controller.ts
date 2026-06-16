import {
  BadRequestException,
  Body,
  Controller,
  Headers,
  Post,
  Req,
} from "@nestjs/common";
import { Request } from "express";
import { PaymentsService } from "./payments.service";

@Controller("payments")
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post("webhook")
  async webhook(
    @Req() req: Request & { rawBody?: Buffer },
    @Headers("x-razorpay-signature") signature: string,
    @Body() body: unknown
  ) {
    const raw =
      req.rawBody?.toString("utf8") ?? JSON.stringify(body);
    if (
      process.env.RAZORPAY_WEBHOOK_SECRET &&
      !this.paymentsService.verifyWebhookSignature(raw, signature)
    ) {
      throw new BadRequestException("Invalid signature");
    }
    return this.paymentsService.handleWebhook(
      body as Parameters<PaymentsService["handleWebhook"]>[0]
    );
  }

  @Post("simulate-capture")
  async simulateCapture(@Body() body: { bookingId: string }) {
    if (process.env.NODE_ENV === "production") {
      throw new BadRequestException("Not available in production");
    }
    return this.paymentsService.simulateCapture(body.bookingId);
  }
}
