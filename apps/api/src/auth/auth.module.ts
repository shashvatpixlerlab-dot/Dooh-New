import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { DeviceAuthGuard } from "./device-auth.guard";
import { AdminAuthGuard } from "./admin-auth.guard";
import { OwnerAuthGuard } from "./owner-auth.guard";
import { AdvertiserAuthGuard } from "./advertiser-auth.guard";
import { OptionalAdvertiserAuthGuard } from "./optional-advertiser-auth.guard";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { SupabaseService } from "./supabase.service";
import { SupabaseUserLoader } from "./supabase-user.loader";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_DEVICE_SECRET"),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    SupabaseService,
    SupabaseUserLoader,
    DeviceAuthGuard,
    AdminAuthGuard,
    OwnerAuthGuard,
    AdvertiserAuthGuard,
    OptionalAdvertiserAuthGuard,
    AuthService,
  ],
  exports: [
    JwtModule,
    SupabaseService,
    SupabaseUserLoader,
    DeviceAuthGuard,
    AdminAuthGuard,
    OwnerAuthGuard,
    AdvertiserAuthGuard,
    OptionalAdvertiserAuthGuard,
    AuthService,
  ],
})
export class AuthModule {}
