import { Controller, Get, Param, Query } from "@nestjs/common";
import { MarketplaceService } from "./marketplace.service";

@Controller("marketplace")
export class MarketplaceController {
  constructor(private marketplace: MarketplaceService) {}
  
  @Get("devices")
  listDevices() {
    return this.marketplace.listDevices();
  }

  @Get("devices/:id")
  getDevice(@Param("id") id: string) {
    return this.marketplace.getDevice(id);
  }

  @Get("devices/:id/availability")
  availability(
    @Param("id") id: string,
    @Query("dateStart") dateStart: string,
    @Query("dateEnd") dateEnd: string
  ) {
    return this.marketplace.getAvailability(id, dateStart, dateEnd);
  }
}
