import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdvertiserController } from "./advertiser.controller";
import { AdvertiserService } from "./advertiser.service";

@Module({
  imports: [AuthModule],
  controllers: [AdvertiserController],
  providers: [AdvertiserService],
})
export class AdvertiserModule {}
