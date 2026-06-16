import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { BookingService } from "./booking.service";

@Injectable()
export class HoldExpiryService {
  private readonly logger = new Logger(HoldExpiryService.name);

  constructor(private bookingService: BookingService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async expireHolds() {
    const count = await this.bookingService.expireStaleHolds();
    if (count > 0) {
      this.logger.log(`Expired ${count} stale hold(s)`);
    }
  }

  @Cron(CronExpression.EVERY_HOUR)
  async completeBookings() {
    const count = await this.bookingService.completePastBookings();
    if (count > 0) {
      this.logger.log(`Completed ${count} booking(s)`);
    }
  }
}
