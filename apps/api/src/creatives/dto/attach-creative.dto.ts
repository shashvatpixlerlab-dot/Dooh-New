import { IsInt, IsString, IsUrl, Min } from "class-validator";

export class AttachCreativeDto {
  @IsUrl({ require_tld: false })
  imageUrl!: string;

  @IsInt()
  @Min(1)
  width!: number;

  @IsInt()
  @Min(1)
  height!: number;

  @IsInt()
  @Min(1)
  fileSizeBytes!: number;

  @IsString()
  mimeType!: string;
}
