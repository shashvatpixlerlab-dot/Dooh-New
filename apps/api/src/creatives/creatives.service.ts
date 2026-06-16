import { BadRequestException, Injectable } from "@nestjs/common";
import {
  CREATIVE_ASPECT_RATIO,
  CREATIVE_ASPECT_TOLERANCE,
  CREATIVE_HEIGHT,
  CREATIVE_MAX_BYTES,
  CREATIVE_WIDTH,
} from "@dooh/shared";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CreativesService {
  constructor(private prisma: PrismaService) {}

  validateCreative(meta: {
    width: number;
    height: number;
    fileSizeBytes: number;
    mimeType: string;
  }) {
    const allowed = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowed.includes(meta.mimeType)) {
      throw new BadRequestException("Format must be JPG or PNG");
    }
    if (meta.fileSizeBytes > CREATIVE_MAX_BYTES) {
      throw new BadRequestException("File exceeds 5 MB limit");
    }
    const ratio = meta.width / meta.height;
    if (Math.abs(ratio - CREATIVE_ASPECT_RATIO) > CREATIVE_ASPECT_TOLERANCE) {
      throw new BadRequestException(
        `Aspect ratio must be 16:9 (${CREATIVE_WIDTH}x${CREATIVE_HEIGHT})`
      );
    }
  }

  async attachToBooking(
    bookingId: string,
    imageUrl: string,
    width: number,
    height: number,
    fileSizeBytes: number
  ) {
    return this.prisma.creative.upsert({
      where: { bookingId },
      update: { imageUrl, width, height, fileSizeBytes },
      create: {
        bookingId,
        imageUrl,
        width,
        height,
        fileSizeBytes,
      },
    });
  }
}
