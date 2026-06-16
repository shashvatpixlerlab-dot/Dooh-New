import { IsEmail, IsString, MinLength } from "class-validator";

export class RejectBookingDto {
  @IsEmail()
  adminEmail!: string;

  @IsString()
  @MinLength(5)
  rejectionReason!: string;
}
