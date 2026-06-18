import {
  DeviceOrientation,
  PrismaClient,
  RevenueModel,
  UserRole,
} from "../src/generated/client";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";
import { ensureSupabaseAuthUser } from "./scripts/supabase-seed";

const prisma = new PrismaClient();

function generateCredential(prefix: string): string {
  const suffix = randomBytes(2).toString("hex").toUpperCase();
  return `${prefix}-${suffix}`;
}

const VENUES = [
  {
    id: "00000000-0000-4000-8000-000000000010",
    name: "Pilot Café Connaught",
    contactEmail: "connaught@example.com",
    contactPhone: "+919999990001",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000020",
        name: "Main Screen",
        locationLabel: "Connaught Place, Delhi",
        slotDayPrice: 500,
        online: true,
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000011",
    name: "FitZone Gym",
    contactEmail: "fitzone@example.com",
    contactPhone: "+919999990002",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000021",
        name: "Lobby Display",
        locationLabel: "Koramangala 5th Block, Bengaluru",
        slotDayPrice: 750,
        online: true,
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000012",
    name: "Bean & Brew",
    contactEmail: "beanbrew@example.com",
    contactPhone: "+919999990003",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000022",
        name: "Counter Screen",
        locationLabel: "Bandra West, Mumbai",
        slotDayPrice: 600,
        online: false,
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000013",
    name: "Cloud Kitchen Hub",
    contactEmail: "cloudkitchen@example.com",
    contactPhone: "+919999990004",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000023",
        name: "Entrance TV",
        locationLabel: "HITEC City, Hyderabad",
        slotDayPrice: 450,
        online: true,
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000014",
    name: "Third Wave Coffee",
    contactEmail: "thirdwave@example.com",
    contactPhone: "+919999990005",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000024",
        name: "Street Window Display",
        locationLabel: "100 Feet Road, Indiranagar, Bengaluru",
        slotDayPrice: 650,
        online: true,
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000015",
    name: "Phoenix Marketcity",
    contactEmail: "phoenix@example.com",
    contactPhone: "+919999990006",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1555529669-e93e7b0e1f0f?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000025",
        name: "Atrium Billboard",
        locationLabel: "Koregaon Park, Pune",
        slotDayPrice: 850,
        online: true,
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000016",
    name: "Chai Point",
    contactEmail: "chaipoint@example.com",
    contactPhone: "+919999990007",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000026",
        name: "Patio Screen",
        locationLabel: "SG Highway, Ahmedabad",
        slotDayPrice: 420,
        online: true,
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000017",
    name: "Shoreline Shack",
    contactEmail: "shoreline@example.com",
    contactPhone: "+919999990008",
    defaultImageUrl:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
    devices: [
      {
        id: "00000000-0000-4000-8000-000000000027",
        name: "Terrace Screen",
        locationLabel: "Calangute Beach, Goa",
        slotDayPrice: 950,
        online: true,
      },
    ],
  },
] as const;

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@yopmail.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "Test@1233";
  const adminSupabaseId = await ensureSupabaseAuthUser({
    email: adminEmail,
    password: adminPassword,
    appMetadata: { role: UserRole.ADMIN },
  });

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: "Admin",
      role: UserRole.ADMIN,
      ...(adminSupabaseId ? { supabaseUserId: adminSupabaseId, passwordHash: null } : {}),
    },
    create: {
      email: adminEmail,
      name: "Admin",
      phone: "+910000000000",
      role: UserRole.ADMIN,
      supabaseUserId: adminSupabaseId,
    },
  });

  const ownerEmail = process.env.OWNER_EMAIL ?? "owner@yopmail.com";
  const ownerPassword = process.env.OWNER_PASSWORD ?? "Test@1233";
  const ownerSupabaseId = await ensureSupabaseAuthUser({
    email: ownerEmail,
    password: ownerPassword,
    appMetadata: { role: UserRole.SCREEN_OWNER },
  });

  const owner = await prisma.user.upsert({
    where: { email: ownerEmail },
    update: {
      name: "Demo Screen Owner",
      role: UserRole.SCREEN_OWNER,
      ...(ownerSupabaseId ? { supabaseUserId: ownerSupabaseId, passwordHash: null } : {}),
    },
    create: {
      email: ownerEmail,
      name: "Demo Screen Owner",
      phone: "+919999990099",
      role: UserRole.SCREEN_OWNER,
      supabaseUserId: ownerSupabaseId,
    },
  });

  const ownerVenue = await prisma.venue.upsert({
    where: { id: "00000000-0000-4000-8000-000000000099" },
    update: { ownerId: owner.id },
    create: {
      id: "00000000-0000-4000-8000-000000000099",
      name: "Demo Owner Venue",
      contactEmail: ownerEmail,
      contactPhone: "+919999990099",
      revenueModel: RevenueModel.percentage,
      revenueValue: 0.3,
      defaultImageUrl:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
      ownerId: owner.id,
    },
  });

  if (ownerSupabaseId) {
    await ensureSupabaseAuthUser({
      email: ownerEmail,
      password: ownerPassword,
      appMetadata: { role: UserRole.SCREEN_OWNER, venueId: ownerVenue.id },
    });
  }

  const credentials: string[] = [];
  const stale = new Date(Date.now() - 60 * 60 * 1000);

  for (const venue of VENUES) {
    await prisma.venue.upsert({
      where: { id: venue.id },
      update: {
        name: venue.name,
        defaultImageUrl: venue.defaultImageUrl,
      },
      create: {
        id: venue.id,
        name: venue.name,
        contactEmail: venue.contactEmail,
        contactPhone: venue.contactPhone,
        revenueModel: RevenueModel.percentage,
        revenueValue: 0.3,
        defaultImageUrl: venue.defaultImageUrl,
      },
    });

    for (const d of venue.devices) {
      const credential = generateCredential("DOOH");
      const credentialHash = await bcrypt.hash(credential, 12);
      const lastSeenAt = d.online ? new Date() : stale;

      const existing = await prisma.device.findUnique({ where: { id: d.id } });

      await prisma.device.upsert({
        where: { id: d.id },
        update: {
          name: d.name,
          locationLabel: d.locationLabel,
          slotDayPrice: d.slotDayPrice,
          defaultImageUrl: venue.defaultImageUrl,
          lastSeenAt,
        },
        create: {
          id: d.id,
          venueId: venue.id,
          name: d.name,
          locationLabel: d.locationLabel,
          resolution: "1920x1080",
          orientation: DeviceOrientation.landscape,
          defaultImageUrl: venue.defaultImageUrl,
          slotDayPrice: d.slotDayPrice,
          credentialHash,
          lastSeenAt,
        },
      });

      if (!existing) {
        credentials.push(`${d.name} (${venue.name}): ${credential}`);
      }
    }
  }

  const advertiserEmail = process.env.ADVERTISER_EMAIL ?? "advertiser@yopmail.com";
  const advertiserPassword = process.env.ADVERTISER_PASSWORD ?? "Test@1233";
  const advertiserSupabaseId = await ensureSupabaseAuthUser({
    email: advertiserEmail,
    password: advertiserPassword,
    appMetadata: { role: UserRole.ADVERTISER },
  });

  const advertiserUser = await prisma.user.upsert({
    where: { email: advertiserEmail },
    update: {
      name: "Demo Advertiser",
      role: UserRole.ADVERTISER,
      ...(advertiserSupabaseId
        ? { supabaseUserId: advertiserSupabaseId, passwordHash: null }
        : {}),
    },
    create: {
      email: advertiserEmail,
      name: "Demo Advertiser",
      phone: "+919999990088",
      role: UserRole.ADVERTISER,
      supabaseUserId: advertiserSupabaseId,
    },
  });

  const advertiser = await prisma.advertiser.upsert({
    where: { email: advertiserEmail },
    update: {
      userId: advertiserUser.id,
      name: "Demo Advertiser",
      phone: "+919999990088",
    },
    create: {
      email: advertiserEmail,
      name: "Demo Advertiser",
      phone: "+919999990088",
      userId: advertiserUser.id,
    },
  });

  if (advertiserSupabaseId) {
    await ensureSupabaseAuthUser({
      email: advertiserEmail,
      password: advertiserPassword,
      appMetadata: {
        role: UserRole.ADVERTISER,
        advertiserId: advertiser.id,
      },
    });
  }

  const deviceCount = await prisma.device.count();
  const onlineCount = await prisma.device.count({
    where: { lastSeenAt: { gte: new Date(Date.now() - 10 * 60 * 1000) } },
  });

  console.log("Seed complete.");
  console.log(`Admin: ${adminEmail} / ${adminPassword}`);
  console.log(`Screen Owner: ${ownerEmail} / ${ownerPassword}`);
  console.log(`Advertiser: ${advertiserEmail} / ${advertiserPassword}`);
  console.log(`Devices: ${deviceCount} total, ${onlineCount} online`);
  if (credentials.length > 0) {
    console.log("New device credentials:");
    credentials.forEach((c) => console.log(`  ${c}`));
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
