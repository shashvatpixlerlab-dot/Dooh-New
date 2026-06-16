import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

export type AdvertiserPayload = {
  sub: string;
  email: string;
  type: "advertiser";
  role: "ADVERTISER";
  advertiserId: string;
};

@Injectable()
export class AdvertiserAuthGuard implements CanActivate {
  constructor(
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers.authorization as string | undefined;
    const cookieToken = req.headers.cookie
      ?.split(";")
      .find((c: string) => c.trim().startsWith("advertiser_token="))
      ?.split("=")[1];

    if (!auth?.startsWith("Bearer ") && !cookieToken) {
      throw new UnauthorizedException("Missing advertiser token");
    }

    try {
      const payload = this.jwt.verify(cookieToken || auth?.slice(7), {
        secret: this.config.get<string>("JWT_ADVERTISER_SECRET"),
      }) as AdvertiserPayload;

      if (payload.type !== "advertiser" || !payload.advertiserId) {
        throw new UnauthorizedException();
      }

      req.advertiser = {
        userId: payload.sub,
        email: payload.email,
        advertiserId: payload.advertiserId,
      };
      return true;
    } catch {
      throw new UnauthorizedException("Invalid advertiser token");
    }
  }
}
