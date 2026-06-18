import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { SupabaseUserLoader } from "./supabase-user.loader";

@Injectable()
export class OptionalAdvertiserAuthGuard implements CanActivate {
  constructor(private users: SupabaseUserLoader) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization as string | undefined;
    if (!token?.startsWith("Bearer ")) {
      return true;
    }

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
