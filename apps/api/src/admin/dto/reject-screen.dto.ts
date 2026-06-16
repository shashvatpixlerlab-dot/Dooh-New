import { IsString, MinLength } from "class-validator";

export class RejectScreenDto {
  @IsString()
  @MinLength(3)
  rejectionReason!: string;
}
