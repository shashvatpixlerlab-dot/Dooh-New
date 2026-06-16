import { IsInt, IsString, IsUUID, Max, Min } from "class-validator";

export class DeviceHeartbeatDto {
  @IsUUID()
  device_id!: string;

  @IsInt()
  @Min(1)
  @Max(6)
  currently_showing_slot!: number;

  @IsString()
  currently_showing_image!: string;

  @IsString()
  app_version!: string;

  @IsString()
  timestamp!: string;
}
