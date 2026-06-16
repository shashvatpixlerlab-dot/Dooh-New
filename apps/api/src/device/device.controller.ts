import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { Device } from "@dooh/db";
import { DeviceService } from "./device.service";
import { DeviceAuthGuard } from "../auth/device-auth.guard";
import { DeviceLoginDto } from "./dto/device-login.dto";
import { DeviceHeartbeatDto } from "./dto/device-heartbeat.dto";

@Controller("device")
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post("login")
  login(@Body() dto: DeviceLoginDto) {
    return this.deviceService.login(dto.credential);
  }

  @Get("schedule")
  @UseGuards(DeviceAuthGuard)
  schedule(
    @Req() req: { device: Device },
    @Query("date") date?: string
  ) {
    return this.deviceService.getSchedule(req.device, date);
  }

  @Post("heartbeat")
  @UseGuards(DeviceAuthGuard)
  heartbeat(
    @Req() req: { device: Device },
    @Body() dto: DeviceHeartbeatDto
  ) {
    if (dto.device_id !== req.device.id) {
      return { ok: false, error: "device_id mismatch" };
    }
    return this.deviceService.heartbeat(
      req.device,
      dto.currently_showing_slot,
      dto.currently_showing_image,
      dto.app_version
    );
  }
}
