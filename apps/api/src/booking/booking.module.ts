import { Module, forwardRef } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";
import { PaymentsModule } from "../payments/payments.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [forwardRef(() => PaymentsModule), AuthModule],
  providers: [BookingService],
  controllers: [BookingController],
  exports: [BookingService],
})
export class BookingModule {}
