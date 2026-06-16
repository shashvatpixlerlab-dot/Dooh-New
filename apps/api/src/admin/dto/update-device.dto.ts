import { DeviceOrientation, DeviceStatus } from "@dooh/db";
import { IsEnum, IsNumber, IsOptional, IsString, IsUrl, Min } from "class-validator";

export class UpdateDeviceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  locationLabel?: string;

  @IsOptional()
  @IsString()
  resolution?: string;

  @IsOptional()
  @IsEnum(DeviceOrientation)
  orientation?: DeviceOrientation;

  @IsOptional()
  @IsUrl()
  defaultImageUrl?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  slotDayPrice?: number;

  @IsOptional()
  @IsEnum(DeviceStatus)
  status?: DeviceStatus;
}
