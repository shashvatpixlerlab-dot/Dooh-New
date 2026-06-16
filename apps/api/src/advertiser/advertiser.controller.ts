import { Controller, Get, Param, Req, UseGuards } from "@nestjs/common";
import { AdvertiserAuthGuard } from "../auth/advertiser-auth.guard";
import { AdvertiserService } from "./advertiser.service";

@Controller("advertiser")
@UseGuards(AdvertiserAuthGuard)
export class AdvertiserController {
  constructor(private advertiser: AdvertiserService) {}

  @Get("bookings")
  listBookings(@Req() req: { advertiser: { advertiserId: string } }) {
    return this.advertiser.listBookings(req.advertiser.advertiserId);
  }

  @Get("bookings/:id")
  getBooking(
    @Param("id") id: string,
    @Req() req: { advertiser: { advertiserId: string } }
  ) {
    return this.advertiser.getBooking(req.advertiser.advertiserId, id);
  }

  @Get("me")
  getProfile(@Req() req: { advertiser: { advertiserId: string } }) {
    return this.advertiser.getProfile(req.advertiser.advertiserId);
  }
}
