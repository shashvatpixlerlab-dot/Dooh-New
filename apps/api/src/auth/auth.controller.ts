import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Post,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post("signup")
  @HttpCode(201)
  signup(@Body() dto: SignupDto) {
    return this.auth.signup(dto);
  }

  @Get("me")
  me(@Headers("authorization") authorization?: string) {
    return this.auth.getProfileFromToken(authorization);
  }

  @Post("sync-session")
  @HttpCode(200)
  syncSession(@Headers("authorization") authorization?: string) {
    return this.auth.syncSessionMetadata(authorization);
  }
}
