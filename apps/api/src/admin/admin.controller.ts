import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { BookingStatus, DeviceApprovalStatus, RevenueModel } from "@dooh/db";
import { AdminService } from "./admin.service";
import { AdminAuthGuard } from "../auth/admin-auth.guard";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { RejectBookingDto } from "./dto/reject-booking.dto";
import { RejectScreenDto } from "./dto/reject-screen.dto";

@Controller("admin")
export class AdminController {
  constructor(private admin: AdminService) {}

  @UseGuards(AdminAuthGuard)
  @Get("venues")
  listVenues() {
    return this.admin.listVenues();
  }

  @UseGuards(AdminAuthGuard)
  @Post("venues")
  createVenue(@Body() dto: CreateVenueDto) {
    return this.admin.createVenue({
      ...dto,
      revenueModel: dto.revenueModel as RevenueModel,
    });
  }

  @UseGuards(AdminAuthGuard)
  @Patch("venues/:id")
  updateVenue(@Param("id") id: string, @Body() dto: UpdateVenueDto) {
    const { revenueModel, ...rest } = dto;
    return this.admin.updateVenue(id, {
      ...rest,
      ...(revenueModel ? { revenueModel: revenueModel as RevenueModel } : {}),
    });
  }

  @UseGuards(AdminAuthGuard)
  @Get("devices")
  listDevices() {
    return this.admin.listDevices();
  }

  @UseGuards(AdminAuthGuard)
  @Post("devices")
  createDevice(@Body() dto: CreateDeviceDto) {
    return this.admin.createDevice(dto);
  }

  @UseGuards(AdminAuthGuard)
  @Patch("devices/:id")
  updateDevice(@Param("id") id: string, @Body() dto: UpdateDeviceDto) {
    return this.admin.updateDevice(id, dto);
  }

  @UseGuards(AdminAuthGuard)
  @Get("screens")
  listScreens(@Query("approvalStatus") approvalStatus?: DeviceApprovalStatus) {
    return this.admin.listScreens(approvalStatus);
  }

  @UseGuards(AdminAuthGuard)
  @Post("screens/:id/approve")
  approveScreen(@Param("id") id: string) {
    return this.admin.approveScreen(id);
  }

  @UseGuards(AdminAuthGuard)
  @Post("screens/:id/reject")
  rejectScreen(@Param("id") id: string, @Body() dto: RejectScreenDto) {
    return this.admin.rejectScreen(id, dto.rejectionReason);
  }

  @UseGuards(AdminAuthGuard)
  @Get("bookings")
  listBookings(@Query("status") status?: BookingStatus) {
    return this.admin.listBookings(status);
  }

  @UseGuards(AdminAuthGuard)
  @Post("bookings/:id/approve")
  approve(@Param("id") id: string, @Body() body: { adminEmail: string }) {
    return this.admin.approveBooking(id, body.adminEmail);
  }

  @UseGuards(AdminAuthGuard)
  @Post("bookings/:id/reject")
  reject(@Param("id") id: string, @Body() dto: RejectBookingDto) {
    return this.admin.rejectBooking(id, dto.adminEmail, dto.rejectionReason);
  }

  @UseGuards(AdminAuthGuard)
  @Post("bookings/:id/refund")
  refund(@Param("id") id: string, @Body() body: { adminEmail: string }) {
    return this.admin.markRefunded(id, body.adminEmail);
  }

  @UseGuards(AdminAuthGuard)
  @Post("bookings/:id/cancel")
  cancel(@Param("id") id: string, @Body() body: { adminEmail: string }) {
    return this.admin.cancelBooking(id, body.adminEmail);
  }

  @UseGuards(AdminAuthGuard)
  @Get("screen-health")
  screenHealth() {
    return this.admin.screenHealth();
  }

  @UseGuards(AdminAuthGuard)
  @Post("upload/presign")
  presign(@Body() body: { prefix: "venues" | "devices"; filename: string }) {
    return this.admin.presignUpload(body.prefix, body.filename);
  }
}
