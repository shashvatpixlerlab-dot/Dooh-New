import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

export type OwnerPayload = {
  sub: string;
  email: string;
  type: "owner";
  role: "SCREEN_OWNER";
  venueId: string;
};

@Injectable()
export class OwnerAuthGuard implements CanActivate {
  constructor(
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers.authorization as string | undefined;
    const cookieToken = req.headers.cookie
      ?.split(";")
      .find((c: string) => c.trim().startsWith("owner_token="))
      ?.split("=")[1];

    if (!auth?.startsWith("Bearer ") && !cookieToken) {
      throw new UnauthorizedException("Missing owner token");
    }

    try {
      const payload = this.jwt.verify(cookieToken || auth?.slice(7), {
        secret: this.config.get<string>("JWT_OWNER_SECRET"),
      }) as OwnerPayload;

      if (payload.type !== "owner" || !payload.venueId) {
        throw new UnauthorizedException();
      }

      req.owner = {
        userId: payload.sub,
        email: payload.email,
        venueId: payload.venueId,
      };
      return true;
    } catch {
      throw new UnauthorizedException("Invalid owner token");
    }
  }
}
