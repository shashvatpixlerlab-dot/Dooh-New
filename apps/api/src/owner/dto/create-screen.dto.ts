import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNumber,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { DeviceOrientation } from "@dooh/db";

export class CreateScreenDto {
  @IsString()
  @MinLength(1)
  @MaxLength(120)
  name!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  locationLabel!: string;

  @IsString()
  @Matches(/^\d{3,5}x\d{3,5}$/)
  resolution!: string;

  @IsEnum(DeviceOrientation)
  orientation!: DeviceOrientation;

  @IsNumber()
  @Min(0)
  slotDayPrice!: number;

  @IsArray()
  @ArrayMinSize(3)
  @IsUrl({ require_tld: false }, { each: true })
  imageUrls!: string[];
}
