import { Module } from "@nestjs/common";
import { OwnerController } from "./owner.controller";
import { OwnerService } from "./owner.service";
import { AuthModule } from "../auth/auth.module";
import { DeviceModule } from "../device/device.module";
import { CreativesModule } from "../creatives/creatives.module";

@Module({
  imports: [AuthModule, DeviceModule, CreativesModule],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
