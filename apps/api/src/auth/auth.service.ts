import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UserRole, RevenueModel } from "@dooh/db";
import { PrismaService } from "../prisma/prisma.service";
import { SignupDto, SignupRoleDto } from "./dto/signup.dto";
import { SupabaseService } from "./supabase.service";
import { SupabaseUserLoader } from "./supabase-user.loader";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private supabase: SupabaseService,
    private userLoader: SupabaseUserLoader
  ) {}

  async signup(dto: SignupDto) {
    if (!this.supabase.isConfigured()) {
      throw new BadRequestException("Supabase auth is not configured");
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException("Email already registered");
    }

    const admin = await this.supabase.getAdminClient();
    const { data: created, error } = await admin.auth.admin.createUser({
      email: dto.email,
      password: dto.password,
      email_confirm: true,
      user_metadata: { name: dto.name, phone: dto.phone },
    });

    if (error || !created.user) {
      throw new ConflictException(error?.message ?? "Failed to create auth user");
    }

    const supabaseUserId = created.user.id;

    try {
      if (dto.role === SignupRoleDto.SCREEN_OWNER) {
        const result = await this.prisma.$transaction(async (tx) => {
          const user = await tx.user.create({
            data: {
              email: dto.email,
              supabaseUserId,
              name: dto.name,
              phone: dto.phone,
              role: UserRole.SCREEN_OWNER,
            },
          });

          const venue = await tx.venue.create({
            data: {
              name: `${dto.name}'s Venue`,
              contactEmail: dto.email,
              contactPhone: dto.phone,
              revenueModel: RevenueModel.percentage,
              revenueValue: 0.3,
              defaultImageUrl: PLACEHOLDER_IMAGE,
              ownerId: user.id,
            },
          });

          return { user, venue };
        });

        await this.supabase.syncAppMetadata(
          supabaseUserId,
          await this.userLoader.buildAppMetadata(result.user)
        );

        return {
          user: this.toUserResponse(result.user, { venueId: result.venue.id }),
        };
      }

      if (dto.role === SignupRoleDto.ADVERTISER) {
        const existingAdvertiser = await this.prisma.advertiser.findUnique({
          where: { email: dto.email },
        });
        if (existingAdvertiser?.userId) {
          throw new ConflictException("Email already registered");
        }

        const result = await this.prisma.$transaction(async (tx) => {
          const user = await tx.user.create({
            data: {
              email: dto.email,
              supabaseUserId,
              name: dto.name,
              phone: dto.phone,
              role: UserRole.ADVERTISER,
            },
          });

          const advertiser = existingAdvertiser
            ? await tx.advertiser.update({
                where: { id: existingAdvertiser.id },
                data: {
                  userId: user.id,
                  name: dto.name,
                  phone: dto.phone,
                },
              })
            : await tx.advertiser.create({
                data: {
                  email: dto.email,
                  name: dto.name,
                  phone: dto.phone,
                  userId: user.id,
                },
              });

          return { user, advertiser };
        });

        await this.supabase.syncAppMetadata(
          supabaseUserId,
          await this.userLoader.buildAppMetadata(result.user)
        );

        return {
          user: this.toUserResponse(result.user, {
            advertiserId: result.advertiser.id,
          }),
        };
      }

      throw new BadRequestException("Invalid role");
    } catch (e) {
      await admin.auth.admin.deleteUser(supabaseUserId).catch(() => undefined);
      throw e;
    }
  }

  async getProfileFromToken(authorization?: string) {
    const user = await this.userLoader.loadUserFromRequest({
      headers: { authorization },
    });
    return this.buildProfile(user);
  }

  async syncSessionMetadata(authorization?: string) {
    const user = await this.userLoader.loadUserFromRequest({
      headers: { authorization },
    });
    if (!user.supabaseUserId) {
      throw new UnauthorizedException("User is not linked to Supabase");
    }
    await this.supabase.syncAppMetadata(
      user.supabaseUserId,
      await this.userLoader.buildAppMetadata(user)
    );
    return this.buildProfile(user);
  }

  private async buildProfile(user: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
  }) {
    if (user.role === UserRole.ADVERTISER) {
      const advertiser = await this.prisma.advertiser.findFirst({
        where: { userId: user.id },
      });
      return this.toUserResponse(user, {
        advertiserId: advertiser?.id,
      });
    }

    if (user.role === UserRole.SCREEN_OWNER) {
      const venue = await this.prisma.venue.findFirst({
        where: { ownerId: user.id },
        orderBy: { createdAt: "asc" },
      });
      return this.toUserResponse(user, { venueId: venue?.id });
    }

    return this.toUserResponse(user);
  }

  private toUserResponse(
    user: { id: string; email: string; name: string; role: UserRole },
    extras?: { venueId?: string; advertiserId?: string }
  ) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      ...(extras?.venueId ? { venueId: extras.venueId } : {}),
      ...(extras?.advertiserId ? { advertiserId: extras.advertiserId } : {}),
    };
  }
}
