import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import { BookingService } from "../booking/booking.service";
import { MarketplaceService } from "../marketplace/marketplace.service";
import {
  BookingStatus,
  DeviceOrientation,
  RevenueModel,
} from "@dooh/db";
import { parseDateOnly } from "../common/dates";
import { BadRequestException } from "@nestjs/common";

function randSuffix() {
  return Math.random().toString(16).slice(2);
}

const HAS_DB = Boolean(process.env.DATABASE_URL);

describe("DOOH V1 week-6 hardening (integration-style)", () => {
  const testOrSkip = HAS_DB ? it : it.skip;

  testOrSkip("concurrent holds do not assign same slot", async () => {
    const prisma = new PrismaService();
    const config = new ConfigService(process.env);
    const bookingService = new BookingService(prisma, config);

    await prisma.$connect();

    const venue = await prisma.venue.create({
      data: {
        name: `Venue-${randSuffix()}`,
        contactEmail: `venue-${randSuffix()}@test.local`,
        contactPhone: "+911111111111",
        revenueModel: RevenueModel.percentage,
        revenueValue: 0.3,
        defaultImageUrl: "https://cdn.example.com/venues/default.jpg",
      },
    });
    const device = await prisma.device.create({
      data: {
        venueId: venue.id,
        name: "Device-1",
        locationLabel: "Test Location",
        resolution: "1920x1080",
        orientation: DeviceOrientation.landscape,
        defaultImageUrl: venue.defaultImageUrl,
        slotDayPrice: 100,
        credentialHash: "hash",
      },
    });

    const adv1 = await prisma.advertiser.create({
      data: {
        email: `adv1-${randSuffix()}@test.local`,
        name: "Adv 1",
        phone: "+911111111112",
      },
    });
    const adv2 = await prisma.advertiser.create({
      data: {
        email: `adv2-${randSuffix()}@test.local`,
        name: "Adv 2",
        phone: "+911111111113",
      },
    });

    const dateStart = parseDateOnly("2026-06-15");
    const dateEnd = parseDateOnly("2026-06-17"); // 3 days

    const [h1, h2] = await Promise.all([
      bookingService.createHold({
        advertiserId: adv1.id,
        deviceId: device.id,
        dateStart,
        dateEnd,
      }),
      bookingService.createHold({
        advertiserId: adv2.id,
        deviceId: device.id,
        dateStart,
        dateEnd,
      }),
    ]);

    assert.equal(h1.status, BookingStatus.HELD);
    assert.equal(h2.status, BookingStatus.HELD);
    assert.notEqual(h1.slotIndex, h2.slotIndex);

    await prisma.slotOccupancy.deleteMany({
      where: { bookingId: { in: [h1.id, h2.id] } },
    });
    await prisma.payment.deleteMany({
      where: { bookingId: { in: [h1.id, h2.id] } },
    });
    await prisma.creative.deleteMany({
      where: { bookingId: { in: [h1.id, h2.id] } },
    });
    await prisma.bookingEvent.deleteMany({ where: { bookingId: { in: [h1.id, h2.id] } } });
    await prisma.booking.deleteMany({ where: { id: { in: [h1.id, h2.id] } } });
    await prisma.device.deleteMany({ where: { id: device.id } });
    await prisma.advertiser.deleteMany({ where: { id: { in: [adv1.id, adv2.id] } } });
    await prisma.venue.deleteMany({ where: { id: venue.id } });

    await prisma.$disconnect();
  });

  testOrSkip("webhook replay does not duplicate payment rows or occupancy", async () => {
    const prisma = new PrismaService();
    const config = new ConfigService(process.env);
    const bookingService = new BookingService(prisma, config);

    await prisma.$connect();

    const venue = await prisma.venue.create({
      data: {
        name: `Venue-${randSuffix()}`,
        contactEmail: `venue-${randSuffix()}@test.local`,
        contactPhone: "+911111111111",
        revenueModel: RevenueModel.percentage,
        revenueValue: 0.3,
        defaultImageUrl: "https://cdn.example.com/venues/default.jpg",
      },
    });
    const device = await prisma.device.create({
      data: {
        venueId: venue.id,
        name: "Device-1",
        locationLabel: "Test Location",
        resolution: "1920x1080",
        orientation: DeviceOrientation.landscape,
        defaultImageUrl: venue.defaultImageUrl,
        slotDayPrice: 100,
        credentialHash: "hash",
      },
    });

    const advertiser = await prisma.advertiser.create({
      data: {
        email: `adv-${randSuffix()}@test.local`,
        name: "Adv",
        phone: "+911111111112",
      },
    });

    const dateStart = parseDateOnly("2026-06-15");
    const dateEnd = parseDateOnly("2026-06-16"); // 2 days

    const hold = await bookingService.createHold({
      advertiserId: advertiser.id,
      deviceId: device.id,
      dateStart,
      dateEnd,
    });

    await bookingService.transition(
      hold.id,
      BookingStatus.AWAITING_PAYMENT,
      "test"
    );

    await bookingService.confirmPayment(hold.id, "pay_test_123", 200);
    await bookingService.confirmPayment(hold.id, "pay_test_123", 200);

    const payments = await prisma.payment.findMany({
      where: { bookingId: hold.id },
    });
    assert.equal(payments.length, 1);

    const occ = await prisma.slotOccupancy.findMany({
      where: { bookingId: hold.id },
    });
    assert.equal(occ.length, 2);

    const updated = await prisma.booking.findUnique({
      where: { id: hold.id },
    });
    assert.equal(updated?.status, BookingStatus.PENDING_APPROVAL);

    await prisma.slotOccupancy.deleteMany({ where: { bookingId: hold.id } });
    await prisma.payment.deleteMany({ where: { bookingId: hold.id } });
    await prisma.creative.deleteMany({ where: { bookingId: hold.id } });
    await prisma.bookingEvent.deleteMany({ where: { bookingId: hold.id } });
    await prisma.booking.deleteMany({ where: { id: hold.id } });
    await prisma.device.deleteMany({ where: { id: device.id } });
    await prisma.advertiser.deleteMany({ where: { id: advertiser.id } });
    await prisma.venue.deleteMany({ where: { id: venue.id } });

    await prisma.$disconnect();
  });

  testOrSkip("stale holds expire via cron logic", async () => {
    const prisma = new PrismaService();
    const config = new ConfigService(process.env);
    const bookingService = new BookingService(prisma, config);

    await prisma.$connect();

    const venue = await prisma.venue.create({
      data: {
        name: `Venue-${randSuffix()}`,
        contactEmail: `venue-${randSuffix()}@test.local`,
        contactPhone: "+911111111111",
        revenueModel: RevenueModel.percentage,
        revenueValue: 0.3,
        defaultImageUrl: "https://cdn.example.com/venues/default.jpg",
      },
    });
    const device = await prisma.device.create({
      data: {
        venueId: venue.id,
        name: "Device-1",
        locationLabel: "Test Location",
        resolution: "1920x1080",
        orientation: DeviceOrientation.landscape,
        defaultImageUrl: venue.defaultImageUrl,
        slotDayPrice: 100,
        credentialHash: "hash",
      },
    });

    const advertiser = await prisma.advertiser.create({
      data: {
        email: `adv-${randSuffix()}@test.local`,
        name: "Adv",
        phone: "+911111111112",
      },
    });

    const dateStart = parseDateOnly("2026-06-15");
    const dateEnd = parseDateOnly("2026-06-15");

    const hold = await bookingService.createHold({
      advertiserId: advertiser.id,
      deviceId: device.id,
      dateStart,
      dateEnd,
    });

    await prisma.booking.update({
      where: { id: hold.id },
      data: {
        holdExpiresAt: new Date(Date.now() - 60_000),
        status: BookingStatus.HELD,
      },
    });

    await bookingService.expireStaleHolds();

    const updated = await prisma.booking.findUnique({
      where: { id: hold.id },
    });
    assert.equal(updated?.status, BookingStatus.EXPIRED);

    await prisma.slotOccupancy.deleteMany({ where: { bookingId: hold.id } });
    await prisma.payment.deleteMany({ where: { bookingId: hold.id } });
    await prisma.creative.deleteMany({ where: { bookingId: hold.id } });
    await prisma.bookingEvent.deleteMany({ where: { bookingId: hold.id } });
    await prisma.booking.deleteMany({ where: { id: hold.id } });
    await prisma.device.deleteMany({ where: { id: device.id } });
    await prisma.advertiser.deleteMany({ where: { id: advertiser.id } });
    await prisma.venue.deleteMany({ where: { id: venue.id } });

    await prisma.$disconnect();
  });

  testOrSkip("dark device gating: getAvailability rejects stale heartbeat", async () => {
    const prisma = new PrismaService();
    const config = new ConfigService(process.env);
    const marketplaceService = new MarketplaceService(prisma, config);

    await prisma.$connect();

    const venue = await prisma.venue.create({
      data: {
        name: `Venue-${randSuffix()}`,
        contactEmail: `venue-${randSuffix()}@test.local`,
        contactPhone: "+911111111111",
        revenueModel: RevenueModel.percentage,
        revenueValue: 0.3,
        defaultImageUrl: "https://cdn.example.com/venues/default.jpg",
      },
    });
    const device = await prisma.device.create({
      data: {
        venueId: venue.id,
        name: "Device-Offline",
        locationLabel: "Test Location",
        resolution: "1920x1080",
        orientation: DeviceOrientation.landscape,
        defaultImageUrl: venue.defaultImageUrl,
        slotDayPrice: 100,
        credentialHash: "hash",
        lastSeenAt: new Date(Date.now() - 11 * 60_000), // stale (>10 min liveness)
      },
    });

    try {
      await marketplaceService.getAvailability(
        device.id,
        "2026-06-15",
        "2026-06-16"
      );
      assert.fail("Expected getAvailability to throw");
    } catch (e) {
      assert.ok(e instanceof BadRequestException);
    }

    await prisma.device.deleteMany({ where: { id: device.id } });
    await prisma.venue.deleteMany({ where: { id: venue.id } });

    await prisma.$disconnect();
  });
});

