import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { SupabaseUserLoader } from "./supabase-user.loader";

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private users: SupabaseUserLoader) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const user = await this.users.loadUserFromRequest(req);
      req.admin = await this.users.toAdminContext(user);
      return true;
    } catch (e) {
      if (e instanceof UnauthorizedException) throw e;
      throw new UnauthorizedException("Invalid admin token");
    }
  }
}
