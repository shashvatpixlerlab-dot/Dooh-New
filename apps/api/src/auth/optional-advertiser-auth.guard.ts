import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import type { AdvertiserPayload } from "./advertiser-auth.guard";

@Injectable()
export class OptionalAdvertiserAuthGuard implements CanActivate {
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

    const token = auth?.startsWith("Bearer ")
      ? auth.slice(7)
      : cookieToken;

    if (!token) {
      return true;
    }

    try {
      const payload = this.jwt.verify(token, {
        secret: this.config.get<string>("JWT_ADVERTISER_SECRET"),
      }) as AdvertiserPayload;

      if (payload.type !== "advertiser" || !payload.advertiserId) {
        throw new UnauthorizedException("Invalid advertiser token");
      }

      req.advertiser = {
        userId: payload.sub,
        email: payload.email,
        advertiserId: payload.advertiserId,
      };
      return true;
    } catch (e) {
      if (e instanceof UnauthorizedException) throw e;
      throw new UnauthorizedException("Invalid advertiser token");
    }
  }
}
