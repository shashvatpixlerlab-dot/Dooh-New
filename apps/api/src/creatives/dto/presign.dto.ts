import { IsString } from "class-validator";

export class PresignDto {
  @IsString()
  filename!: string;
}
