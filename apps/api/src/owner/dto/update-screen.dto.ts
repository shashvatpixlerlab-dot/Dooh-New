import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { DeviceOrientation, DeviceStatus } from "@dooh/db";

export class UpdateScreenDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(120)
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  locationLabel?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d{3,5}x\d{3,5}$/)
  resolution?: string;

  @IsOptional()
  @IsEnum(DeviceOrientation)
  orientation?: DeviceOrientation;

  @IsOptional()
  @IsNumber()
  @Min(0)
  slotDayPrice?: number;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(3)
  @IsUrl({ require_tld: false }, { each: true })
  imageUrls?: string[];

  @IsOptional()
  @IsEnum(DeviceStatus)
  status?: DeviceStatus;
}
