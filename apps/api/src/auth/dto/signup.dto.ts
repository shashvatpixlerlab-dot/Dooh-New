import { IsEmail, IsEnum, IsString, MaxLength, MinLength } from "class-validator";

export enum SignupRoleDto {
  SCREEN_OWNER = "SCREEN_OWNER",
  ADVERTISER = "ADVERTISER",
}

export class SignupDto {
  @IsString()
  @MinLength(1)
  @MaxLength(120)
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(10)
  @MaxLength(20)
  phone!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password!: string;

  @IsEnum(SignupRoleDto)
  role!: SignupRoleDto;
}
