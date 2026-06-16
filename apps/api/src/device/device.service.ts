import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcryptjs";
import { randomBytes } from "crypto";
import {
  BookingStatus,
  Device,
  ModerationStatus,
} from "@dooh/db";
import {
  HEARTBEAT_SECONDS,
  LOOP_SECONDS,
  SLOT_COUNT,
} from "@dooh/shared";
import { PrismaService } from "../prisma/prisma.service";
import { parseDateOnly, todayInTz } from "../common/dates";

@Injectable()
export class DeviceService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async login(credential: string) {
    const devices = await this.prisma.device.findMany({
      where: { status: "ACTIVE" },
    });

    let matched: Device | null = null;
    for (const device of devices) {
      if (await bcrypt.compare(credential, device.credentialHash)) {
        matched = device;
        break;
      }
    }
    if (!matched) {
      throw new UnauthorizedException("Invalid credential");
    }

    const device_token = this.jwt.sign(
      { sub: matched.id, type: "device" },
      {
        secret: this.config.get<string>("JWT_DEVICE_SECRET"),
        expiresIn: "365d",
      }
    );

    const tokenHash = await bcrypt.hash(device_token, 12);
    await this.prisma.device.update({
      where: { id: matched.id },
      data: { deviceTokenHash: tokenHash },
    });

    return {
      device_token,
      device_id: matched.id,
      config: {
        loop_seconds: LOOP_SECONDS,
        slot_count: SLOT_COUNT,
        heartbeat_seconds: HEARTBEAT_SECONDS,
      },
    };
  }

  async getSchedule(device: Device, dateStr?: string) {
    const date = dateStr ?? todayInTz();
    const playDate = parseDateOnly(date);

    const occupancies = await this.prisma.slotOccupancy.findMany({
      where: { deviceId: device.id, playDate },
      include: {
        booking: {
          include: { creative: true },
        },
      },
    });

    const bookedBySlot = new Map<
      number,
      { imageUrl: string; bookingId: string }
    >();

    for (const occ of occupancies) {
      const booking = occ.booking;
      if (
        booking.status === BookingStatus.APPROVED &&
        booking.creative?.moderationStatus === ModerationStatus.APPROVED
      ) {
        bookedBySlot.set(occ.slotIndex, {
          imageUrl: booking.creative.imageUrl,
          bookingId: booking.id,
        });
      }
    }

    const positions = Array.from({ length: SLOT_COUNT }, (_, i) => {
      const slotIndex = i + 1;
      const booked = bookedBySlot.get(slotIndex);
      if (booked) {
        return {
          slot_index: slotIndex,
          type: "booked" as const,
          image_url: booked.imageUrl,
          booking_id: booked.bookingId,
        };
      }
      return {
        slot_index: slotIndex,
        type: "default" as const,
        image_url: device.defaultImageUrl,
      };
    });

    return {
      date,
      default_image_url: device.defaultImageUrl,
      positions,
    };
  }

  async heartbeat(
    device: Device,
    slot: number,
    image: string,
    appVersion: string
  ) {
    await this.prisma.device.update({
      where: { id: device.id },
      data: {
        lastSeenAt: new Date(),
        currentlyShowingSlot: slot,
      },
    });
    return { ok: true, device_id: device.id, image, app_version: appVersion };
  }

  async generateCredential(): Promise<{ credential: string; hash: string }> {
    const suffix = randomBytes(3).toString("hex").toUpperCase();
    const credential = `DOOH-${suffix}`;
    const hash = await bcrypt.hash(credential, 12);
    return { credential, hash };
  }
}
