import {
  Controller,
  ForbiddenException,
  Get,
  Headers,
  Post,
} from "@nestjs/common";
import { BookingService } from "../booking/booking.service";

@Controller("internal/cron")
export class CronController {
  constructor(private readonly bookingService: BookingService) {}

  private verifyCronSecret(authorization: string | undefined): void {
    const secret = process.env.CRON_SECRET;
    if (!secret) {
      throw new ForbiddenException("CRON_SECRET not configured");
    }
    const expected = `Bearer ${secret}`;
    if (authorization !== expected) {
      throw new ForbiddenException("Invalid cron authorization");
    }
  }

  @Get("expire-holds")
  @Post("expire-holds")
  async expireHolds(@Headers("authorization") authorization: string) {
    this.verifyCronSecret(authorization);
    const expired = await this.bookingService.expireStaleHolds();
    return { expired };
  }

  @Get("complete-bookings")
  @Post("complete-bookings")
  async completeBookings(@Headers("authorization") authorization: string) {
    this.verifyCronSecret(authorization);
    const completed = await this.bookingService.completePastBookings();
    return { completed };
  }
}
