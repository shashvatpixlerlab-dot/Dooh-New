import { VenueStatus } from "@dooh/db";
import { IsEmail, IsEnum, IsNumber, IsOptional, IsString, IsUrl, Min } from "class-validator";

export class UpdateVenueDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;

  @IsOptional()
  @IsEnum(["percentage", "flat"])
  revenueModel?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  revenueValue?: number;

  @IsOptional()
  @IsUrl()
  defaultImageUrl?: string;

  @IsOptional()
  @IsEnum(VenueStatus)
  status?: VenueStatus;
}
