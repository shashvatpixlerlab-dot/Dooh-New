import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DeviceAuthGuard implements CanActivate {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
    private config: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers.authorization as string | undefined;
    if (!auth?.startsWith("Bearer ")) {
      throw new UnauthorizedException("Missing device token");
    }
    const token = auth.slice(7);
    let payload: { sub: string; type: string };
    try {
      payload = this.jwt.verify(token, {
        secret: this.config.get<string>("JWT_DEVICE_SECRET"),
      });
    } catch {
      throw new UnauthorizedException("Invalid device token");
    }
    if (payload.type !== "device") {
      throw new UnauthorizedException("Invalid token type");
    }
    const device = await this.prisma.device.findUnique({
      where: { id: payload.sub },
    });
    if (!device?.deviceTokenHash) {
      throw new UnauthorizedException("Device not paired");
    }
    const valid = await bcrypt.compare(token, device.deviceTokenHash);
    if (!valid) {
      throw new UnauthorizedException("Token revoked");
    }
    req.device = device;
    return true;
  }
}
