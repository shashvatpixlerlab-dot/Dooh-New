import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { AuthModule } from "../auth/auth.module";
import { BookingModule } from "../booking/booking.module";
import { DeviceModule } from "../device/device.module";
import { CreativesModule } from "../creatives/creatives.module";

@Module({
  imports: [AuthModule, BookingModule, DeviceModule, CreativesModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
