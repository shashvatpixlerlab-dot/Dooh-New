import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(
    private jwt: JwtService,
    private config: ConfigService
  ) { }

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers.authorization as string | undefined;
    const token = req.headers.cookie
      ?.split(';')
      .find((cookie: string) => cookie.trim().startsWith('admin_token='))
      ?.split('=')[1];

    if (!auth?.startsWith("Bearer ") && !token) {
      throw new UnauthorizedException("Missing admin token");
    }
    try {
      const payload = this.jwt.verify(token || auth?.slice(7), {
        secret: this.config.get<string>("JWT_ADMIN_SECRET"),
      });
      if (payload.type !== "admin") {
        throw new UnauthorizedException();
      }
      req.admin = payload;
      return true;
    } catch {
      throw new UnauthorizedException("Invalid admin token");
    }
  }
}
