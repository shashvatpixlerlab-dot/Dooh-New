import { Module } from "@nestjs/common";
import { BookingModule } from "../booking/booking.module";
import { CronController } from "./cron.controller";

@Module({
  imports: [BookingModule],
  controllers: [CronController],
})
export class InternalModule {}
