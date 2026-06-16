import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { BookingStatus, DeviceApprovalStatus, DeviceStatus } from "@dooh/db";
import { randomUUID } from "crypto";
import { PrismaService } from "../prisma/prisma.service";
import { DeviceService } from "../device/device.service";
import { BunnyService } from "../creatives/bunny.service";
import { CreateScreenDto } from "./dto/create-screen.dto";
import { UpdateScreenDto } from "./dto/update-screen.dto";

const TERMINAL_STATUSES: BookingStatus[] = [
  BookingStatus.CANCELLED,
  BookingStatus.EXPIRED,
  BookingStatus.REJECTED,
  BookingStatus.REFUNDED,
  BookingStatus.COMPLETED,
];

@Injectable()
export class OwnerService {
  constructor(
    private prisma: PrismaService,
    private deviceService: DeviceService,
    private bunny: BunnyService
  ) {}

  listScreens(venueId: string) {
    return this.prisma.device.findMany({
      where: { venueId },
      include: { images: { orderBy: { sortOrder: "asc" } } },
      orderBy: { name: "asc" },
    });
  }

  async getScreen(venueId: string, id: string) {
    const device = await this.prisma.device.findFirst({
      where: { id, venueId },
      include: { images: { orderBy: { sortOrder: "asc" } } },
    });
    if (!device) throw new NotFoundException("Screen not found");
    return device;
  }

  private async normalizeImageUrls(urls: string[]): Promise<string[]> {
    return Promise.all(urls.map((url) => this.bunny.toStoredImageUrl(url)));
  }

  async createScreen(venueId: string, dto: CreateScreenDto) {
    const { credential, hash } = await this.deviceService.generateCredential();
    const imageUrls = await this.normalizeImageUrls(dto.imageUrls);

    const device = await this.prisma.$transaction(async (tx) => {
      const created = await tx.device.create({
        data: {
          venueId,
          name: dto.name,
          locationLabel: dto.locationLabel,
          resolution: dto.resolution,
          orientation: dto.orientation,
          slotDayPrice: dto.slotDayPrice,
          defaultImageUrl: imageUrls[0],
          credentialHash: hash,
          approvalStatus: DeviceApprovalStatus.PENDING,
          status: DeviceStatus.INACTIVE,
        },
      });

      await tx.deviceImage.createMany({
        data: imageUrls.map((imageUrl, sortOrder) => ({
          deviceId: created.id,
          imageUrl,
          sortOrder,
        })),
      });

      return tx.device.findUniqueOrThrow({
        where: { id: created.id },
        include: { images: { orderBy: { sortOrder: "asc" } } },
      });
    });

    return { device, credential, images: device.images };
  }

  async updateScreen(venueId: string, id: string, dto: UpdateScreenDto) {
    await this.getScreen(venueId, id);

    const imageUrls = dto.imageUrls
      ? await this.normalizeImageUrls(dto.imageUrls)
      : undefined;

    if (imageUrls) {
      await this.prisma.$transaction(async (tx) => {
        await tx.deviceImage.deleteMany({ where: { deviceId: id } });
        await tx.deviceImage.createMany({
          data: imageUrls.map((imageUrl, sortOrder) => ({
            deviceId: id,
            imageUrl,
            sortOrder,
          })),
        });
      });
    }

    return this.prisma.device.update({
      where: { id },
      data: {
        ...(dto.name !== undefined ? { name: dto.name } : {}),
        ...(dto.locationLabel !== undefined ? { locationLabel: dto.locationLabel } : {}),
        ...(dto.resolution !== undefined ? { resolution: dto.resolution } : {}),
        ...(dto.orientation !== undefined ? { orientation: dto.orientation } : {}),
        ...(dto.slotDayPrice !== undefined ? { slotDayPrice: dto.slotDayPrice } : {}),
        ...(dto.status !== undefined ? { status: dto.status } : {}),
        ...(imageUrls ? { defaultImageUrl: imageUrls[0] } : {}),
      },
      include: { images: { orderBy: { sortOrder: "asc" } } },
    });
  }

  async deleteScreen(venueId: string, id: string) {
    await this.getScreen(venueId, id);

    const activeBooking = await this.prisma.booking.findFirst({
      where: {
        deviceId: id,
        status: { notIn: TERMINAL_STATUSES },
      },
    });
    if (activeBooking) {
      throw new ConflictException("Screen has active bookings");
    }

    return this.prisma.device.update({
      where: { id },
      data: { status: DeviceStatus.INACTIVE },
    });
  }

  presignUpload(ownerId: string, filename: string, contentType?: string) {
    const ext = filename.split(".").pop()?.toLowerCase() ?? "jpg";
    const path = `devices/${ownerId}/${randomUUID()}.${ext}`;
    const mime =
      contentType === "image/jpeg" || contentType === "image/png"
        ? contentType
        : ext === "png"
          ? "image/png"
          : "image/jpeg";
    return this.bunny.getPresignedUpload(path, mime);
  }

  async deleteUploadedImage(imageUrl: string) {
    const path = this.bunny.extractStoragePath(imageUrl);
    if (!path) {
      throw new ConflictException("Invalid image URL");
    }
    const deleted = await this.bunny.deleteFile(path);
    if (!deleted) {
      throw new NotFoundException("Image not found in storage");
    }
    return { ok: true };
  }

  async uploadImage(
    ownerId: string,
    file: { originalname: string; mimetype: string; buffer: Buffer }
  ) {
    if (!["image/jpeg", "image/png"].includes(file.mimetype)) {
      throw new ConflictException("Images must be JPG or PNG");
    }

    const ext = file.originalname.split(".").pop()?.toLowerCase() ?? "jpg";
    const path = `devices/${ownerId}/${randomUUID()}.${ext}`;
    const cdnUrl = await this.bunny.uploadBuffer(path, file.buffer, file.mimetype);
    return { cdnUrl };
  }
}
