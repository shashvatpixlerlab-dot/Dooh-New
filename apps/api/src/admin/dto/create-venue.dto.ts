import { IsEmail, IsEnum, IsNumber, IsString, IsUrl, Min } from "class-validator";

export class CreateVenueDto {
  @IsString()
  name!: string;

  @IsEmail()
  contactEmail!: string;

  @IsString()
  contactPhone!: string;

  @IsEnum(["percentage", "flat"])
  revenueModel!: string;

  @IsNumber()
  @Min(0)
  revenueValue!: number;

  @IsUrl()
  defaultImageUrl!: string;
}
