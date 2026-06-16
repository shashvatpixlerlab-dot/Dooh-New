import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Req,
  Res,
  Get,
} from "@nestjs/common";
import { Request, Response } from "express";
import { createReadStream, existsSync } from "fs";
import { join } from "path";
import { CreativesService } from "./creatives.service";
import { BunnyService } from "./bunny.service";
import { LocalUploadService } from "./local-upload.service";
import { PresignDto } from "./dto/presign.dto";
import { AttachCreativeDto } from "./dto/attach-creative.dto";

@Controller("creatives")
export class CreativesController {
  constructor(
    private creatives: CreativesService,
    private bunny: BunnyService,
    private localUpload: LocalUploadService
  ) {}

  @Post("presign")
  presign(@Body() dto: PresignDto) {
    const path = this.bunny.getUploadPath("creatives", dto.filename);
    return this.bunny.getPresignedUpload(path);
  }

  @Put("upload/:path(*)")
  async devUpload(
    @Param("path") path: string,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk as Buffer);
    }
    await this.localUpload.save(path, Buffer.concat(chunks));
    res.json({ ok: true, path });
  }

  @Get("file/:path(*)")
  async serveFile(@Param("path") path: string, @Res() res: Response) {
    const fullPath = join(process.cwd(), "uploads", path);
    if (existsSync(fullPath)) {
      return createReadStream(fullPath).pipe(res);
    }

    const remote = await this.bunny.fetchFile(path);
    if (!remote) {
      return res.status(404).json({ error: "not_found" });
    }

    res.setHeader("Content-Type", remote.contentType);
    res.setHeader("Cache-Control", "public, max-age=86400");
    return res.send(remote.buffer);
  }

  @Post(":bookingId/attach")
  attach(@Param("bookingId") bookingId: string, @Body() dto: AttachCreativeDto) {
    this.creatives.validateCreative({
      width: dto.width,
      height: dto.height,
      fileSizeBytes: dto.fileSizeBytes,
      mimeType: dto.mimeType,
    });
    return this.creatives.attachToBooking(
      bookingId,
      dto.imageUrl,
      dto.width,
      dto.height,
      dto.fileSizeBytes
    );
  }
}
