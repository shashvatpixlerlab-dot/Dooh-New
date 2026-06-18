import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User, UserRole } from "@dooh/db";
import { PrismaService } from "../prisma/prisma.service";
import { SupabaseService } from "./supabase.service";

export type AppAdmin = { sub: string; email: string };
export type AppOwner = { userId: string; email: string; venueId: string };
export type AppAdvertiser = {
  userId: string;
  email: string;
  advertiserId: string;
};

@Injectable()
export class SupabaseUserLoader {
  constructor(
    private supabase: SupabaseService,
    private prisma: PrismaService
  ) {}

  async loadUserFromRequest(req: {
    headers: { authorization?: string };
  }): Promise<User> {
    const token = this.supabase.extractBearerToken(req.headers.authorization);
    if (!token) {
      throw new UnauthorizedException("Missing access token");
    }

    const payload = await this.supabase.verifyAccessToken(token);
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { supabaseUserId: payload.sub },
          ...(payload.email ? [{ email: payload.email }] : []),
        ],
      },
    });

    if (!user) {
      throw new UnauthorizedException("User profile not found");
    }

    if (!user.supabaseUserId) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { supabaseUserId: payload.sub },
      });
      user.supabaseUserId = payload.sub;
    }

    return user;
  }

  async toAdminContext(user: User): Promise<AppAdmin> {
    if (user.role !== UserRole.ADMIN) {
      throw new UnauthorizedException("Admin access required");
    }
    return { sub: user.id, email: user.email };
  }

  async toOwnerContext(user: User): Promise<AppOwner> {
    if (user.role !== UserRole.SCREEN_OWNER) {
      throw new UnauthorizedException("Owner access required");
    }
    const venue = await this.prisma.venue.findFirst({
      where: { ownerId: user.id },
      orderBy: { createdAt: "asc" },
    });
    if (!venue) {
      throw new UnauthorizedException("No venue linked to this account");
    }
    return { userId: user.id, email: user.email, venueId: venue.id };
  }

  async toAdvertiserContext(user: User): Promise<AppAdvertiser> {
    if (user.role !== UserRole.ADVERTISER) {
      throw new UnauthorizedException("Advertiser access required");
    }
    const advertiser = await this.prisma.advertiser.findFirst({
      where: { userId: user.id },
    });
    if (!advertiser) {
      throw new UnauthorizedException("Advertiser profile not found");
    }
    return {
      userId: user.id,
      email: user.email,
      advertiserId: advertiser.id,
    };
  }

  async buildAppMetadata(user: User): Promise<Record<string, unknown>> {
    const base = { role: user.role };
    if (user.role === UserRole.SCREEN_OWNER) {
      const venue = await this.prisma.venue.findFirst({
        where: { ownerId: user.id },
        orderBy: { createdAt: "asc" },
      });
      return venue ? { ...base, venueId: venue.id } : base;
    }
    if (user.role === UserRole.ADVERTISER) {
      const advertiser = await this.prisma.advertiser.findFirst({
        where: { userId: user.id },
      });
      return advertiser ? { ...base, advertiserId: advertiser.id } : base;
    }
    return base;
  }
}
