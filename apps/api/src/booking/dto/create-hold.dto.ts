import { IsEmail, IsOptional, IsString, IsUUID, Matches } from "class-validator";

export class CreateHoldDto {
  @IsUUID()
  deviceId!: string;

  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  dateStart!: string;

  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  dateEnd!: string;

  /** Required for guest checkout; omitted when advertiser JWT is present. */
  @IsOptional()
  @IsEmail()
  advertiserEmail?: string;

  @IsOptional()
  @IsString()
  advertiserName?: string;

  @IsOptional()
  @IsString()
  advertiserPhone?: string;
}
