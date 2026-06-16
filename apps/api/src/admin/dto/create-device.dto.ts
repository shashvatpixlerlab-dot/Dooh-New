import { DeviceOrientation } from "@dooh/db";
import { IsEnum, IsNumber, IsOptional, IsString, IsUrl, IsUUID, Min } from "class-validator";

export class CreateDeviceDto {
  @IsUUID()
  venueId!: string;

  @IsString()
  name!: string;

  @IsString()
  locationLabel!: string;

  @IsString()
  resolution!: string;

  @IsOptional()
  @IsEnum(DeviceOrientation)
  orientation?: DeviceOrientation;

  @IsOptional()
  @IsUrl()
  defaultImageUrl?: string;

  @IsNumber()
  @Min(0)
  slotDayPrice!: number;
}
