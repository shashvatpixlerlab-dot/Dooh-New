import { Module } from "@nestjs/common";
import { CreativesService } from "./creatives.service";
import { CreativesController } from "./creatives.controller";
import { BunnyService } from "./bunny.service";
import { LocalUploadService } from "./local-upload.service";

@Module({
  providers: [CreativesService, BunnyService, LocalUploadService],
  controllers: [CreativesController],
  exports: [CreativesService, BunnyService, LocalUploadService],
})
export class CreativesModule {}
