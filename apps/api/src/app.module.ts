import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { resolve } from "path";
import { ScheduleModule } from "@nestjs/schedule";
import { PrismaModule } from "./prisma/prisma.module";
import { DeviceModule } from "./device/device.module";
import { BookingModule } from "./booking/booking.module";
import { PaymentsModule } from "./payments/payments.module";
import { CreativesModule } from "./creatives/creatives.module";
import { AdminModule } from "./admin/admin.module";
import { MarketplaceModule } from "./marketplace/marketplace.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { AuthModule } from "./auth/auth.module";
import { OwnerModule } from "./owner/owner.module";
import { AdvertiserModule } from "./advertiser/advertiser.module";
import { HoldExpiryService } from "./booking/hold-expiry.service";
import { InternalModule } from "./internal/internal.module";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        resolve(process.cwd(), "../../.env"),
        resolve(process.cwd(), ".env"),
      ],
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AuthModule,
    DeviceModule,
    BookingModule,
    PaymentsModule,
    CreativesModule,
    AdminModule,
    OwnerModule,
    AdvertiserModule,
    MarketplaceModule,
    NotificationsModule,
    InternalModule,
    HealthModule,
  ],
  providers: [HoldExpiryService],
})
export class AppModule {}
