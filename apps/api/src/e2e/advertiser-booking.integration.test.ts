import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { BookingService } from "../booking/booking.service";
import { AdvertiserService } from "../advertiser/advertiser.service";
import {
  DeviceOrientation,
  RevenueModel,
  UserRole,
} from "@dooh/db";
import { parseDateOnly } from "../common/dates";
import * as bcrypt from "bcryptjs";

function randSuffix() {
  return Math.random().toString(16).slice(2);
}

const HAS_DB = Boolean(process.env.DATABASE_URL);

describe("Advertiser booking identity (integration-style)", () => {
  const testOrSkip = HAS_DB ? it : it.skip;

  testOrSkip("authenticated advertiser booking appears in dashboard list", async () => {
    const prisma = new PrismaService();
    const config = new ConfigService({
      ...process.env,
      JWT_ADVERTISER_SECRET:
        process.env.JWT_ADVERTISER_SECRET ?? "test-advertiser-secret",
    });
    const bookingService = new BookingService(prisma, config);
    const advertiserService = new AdvertiserService(prisma);
    const jwt = new JwtService();

    await prisma.$connect();

    const suffix = randSuffix();
    const passwordHash = await bcrypt.hash("test-password", 12);
    const user = await prisma.user.create({
      data: {
        email: `adv-user-${suffix}@test.local`,
        name: "Auth Advertiser",
        phone: "+911111111199",
        role: UserRole.ADVERTISER,
        passwordHash,
      },
    });
    const advertiser = await prisma.advertiser.create({
      data: {
        email: `adv-user-${suffix}@test.local`,
        name: "Auth Advertiser",
        phone: "+911111111199",
        userId: user.id,
      },
    });

    const venue = await prisma.venue.create({
      data: {
        name: `Venue-${suffix}`,
        contactEmail: `venue-${suffix}@test.local`,
        contactPhone: "+911111111111",
        revenueModel: RevenueModel.percentage,
        revenueValue: 0.3,
        defaultImageUrl: "https://cdn.example.com/venues/default.jpg",
      },
    });
    const device = await prisma.device.create({
      data: {
        venueId: venue.id,
        name: "Device-Auth",
        locationLabel: "Test",
        resolution: "1920x1080",
        orientation: DeviceOrientation.landscape,
        defaultImageUrl: venue.defaultImageUrl,
        slotDayPrice: 100,
        credentialHash: "hash",
        lastSeenAt: new Date(),
      },
    });

    const booking = await bookingService.createHold({
      advertiserId: advertiser.id,
      deviceId: device.id,
      dateStart: parseDateOnly("2026-07-01"),
      dateEnd: parseDateOnly("2026-07-02"),
    });

    const token = jwt.sign(
      {
        sub: user.id,
        email: user.email,
        type: "advertiser",
        role: "ADVERTISER",
        advertiserId: advertiser.id,
      },
      { secret: config.get("JWT_ADVERTISER_SECRET"), expiresIn: "1h" }
    );
    assert.ok(token);

    const listed = await advertiserService.listBookings(advertiser.id);
    assert.ok(listed.some((b) => b.id === booking.id));
    assert.equal(listed.find((b) => b.id === booking.id)?.slotIndex, booking.slotIndex);

    const detail = await advertiserService.getBooking(advertiser.id, booking.id);
    assert.equal(detail.advertiserId, advertiser.id);

    await assert.rejects(
      () => advertiserService.getBooking(advertiser.id, "00000000-0000-4000-8000-000000000001"),
      /not found/i
    );

    await prisma.$disconnect();
  });

  testOrSkip("guest advertiser links to user on signup path", async () => {
    const prisma = new PrismaService();
    await prisma.$connect();

    const suffix = randSuffix();
    const email = `guest-${suffix}@test.local`;
    const guest = await prisma.advertiser.create({
      data: {
        email,
        name: "Guest Buyer",
        phone: "+911111111188",
      },
    });

    const passwordHash = await bcrypt.hash("test-password", 12);
    const user = await prisma.user.create({
      data: {
        email,
        name: "Guest Buyer",
        phone: "+911111111188",
        role: UserRole.ADVERTISER,
        passwordHash,
      },
    });
    const linked = await prisma.advertiser.update({
      where: { id: guest.id },
      data: { userId: user.id },
    });

    assert.equal(linked.id, guest.id);
    assert.equal(linked.userId, user.id);

    await prisma.$disconnect();
  });
});
