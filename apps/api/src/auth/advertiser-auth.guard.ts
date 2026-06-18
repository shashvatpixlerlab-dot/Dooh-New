import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { SupabaseUserLoader, type AppAdvertiser } from "./supabase-user.loader";

export type AdvertiserPayload = AppAdvertiser;

@Injectable()
export class AdvertiserAuthGuard implements CanActivate {
  constructor(private users: SupabaseUserLoader) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const user = await this.users.loadUserFromRequest(req);
      req.advertiser = await this.users.toAdvertiserContext(user);
      return true;
    } catch (e) {
      if (e instanceof UnauthorizedException) throw e;
      throw new UnauthorizedException("Invalid advertiser token");
    }
  }
}
