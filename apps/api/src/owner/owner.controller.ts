import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import type { Request } from "express";
import { CREATIVE_MAX_BYTES } from "@dooh/shared";
import { OwnerAuthGuard } from "../auth/owner-auth.guard";
import { OwnerService } from "./owner.service";
import { CreateScreenDto } from "./dto/create-screen.dto";
import { UpdateScreenDto } from "./dto/update-screen.dto";

type OwnerRequest = Request & { owner: { venueId: string; userId: string } };

@Controller("owner")
@UseGuards(OwnerAuthGuard)
export class OwnerController {
  constructor(private owner: OwnerService) {}

  @Get("screens")
  listScreens(@Req() req: OwnerRequest) {
    return this.owner.listScreens(req.owner.venueId);
  }

  @Post("screens")
  createScreen(@Req() req: OwnerRequest, @Body() dto: CreateScreenDto) {
    return this.owner.createScreen(req.owner.venueId, dto);
  }

  @Get("screens/:id")
  getScreen(@Req() req: OwnerRequest, @Param("id") id: string) {
    return this.owner.getScreen(req.owner.venueId, id);
  }

  @Patch("screens/:id")
  updateScreen(
    @Req() req: OwnerRequest,
    @Param("id") id: string,
    @Body() dto: UpdateScreenDto
  ) {
    return this.owner.updateScreen(req.owner.venueId, id, dto);
  }

  @Delete("screens/:id")
  deleteScreen(@Req() req: OwnerRequest, @Param("id") id: string) {
    return this.owner.deleteScreen(req.owner.venueId, id);
  }

  @Post("upload/presign")
  presign(
    @Req() req: OwnerRequest,
    @Body() body: { filename: string; contentType?: string }
  ) {
    return this.owner.presignUpload(
      req.owner.userId,
      body.filename,
      body.contentType
    );
  }

  /** Raw image body → Bunny Storage. Headers: Content-Type, X-Filename */
  @Post("upload")
  async upload(@Req() req: OwnerRequest) {
    const contentType = String(req.headers["content-type"] ?? "").split(";")[0].trim();
    const filename = String(req.headers["x-filename"] ?? "upload.jpg");

    if (!["image/jpeg", "image/png"].includes(contentType)) {
      throw new BadRequestException("Images must be JPG or PNG");
    }

    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk as Buffer);
    }
    const buffer = Buffer.concat(chunks);

    if (buffer.length === 0) {
      throw new BadRequestException("file required");
    }
    if (buffer.length > CREATIVE_MAX_BYTES) {
      throw new BadRequestException("Each image must be under 5 MB");
    }

    return this.owner.uploadImage(req.owner.userId, {
      originalname: filename,
      mimetype: contentType,
      buffer,
    });
  }

  @Delete("upload")
  @HttpCode(200)
  deleteUpload(@Body() body: { imageUrl: string }) {
    return this.owner.deleteUploadedImage(body.imageUrl);
  }
}
