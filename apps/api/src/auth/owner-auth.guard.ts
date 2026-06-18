import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { SupabaseUserLoader, type AppOwner } from "./supabase-user.loader";

export type OwnerPayload = AppOwner;

@Injectable()
export class OwnerAuthGuard implements CanActivate {
  constructor(private users: SupabaseUserLoader) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const user = await this.users.loadUserFromRequest(req);
      req.owner = await this.users.toOwnerContext(user);
      return true;
    } catch (e) {
      if (e instanceof UnauthorizedException) throw e;
      throw new UnauthorizedException("Invalid owner token");
    }
  }
}
