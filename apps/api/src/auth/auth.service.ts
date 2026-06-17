import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UserRole, RevenueModel } from "@dooh/db";
import * as bcrypt from "bcryptjs";
import { PrismaService } from "../prisma/prisma.service";
import { SignupDto, SignupRoleDto } from "./dto/signup.dto";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signup(dto: SignupDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException("Email already registered");
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);
    console.log("passwordHash in build time", passwordHash);
    if (dto.role === SignupRoleDto.SCREEN_OWNER) {
      const result = await this.prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            email: dto.email,
            passwordHash,
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

      const token = this.signOwnerToken(result.user, result.venue.id);
      return {
        token,
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
            passwordHash,
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

      const token = this.signAdvertiserToken(result.user, result.advertiser.id);
      return {
        token,
        user: this.toUserResponse(result.user, {
          advertiserId: result.advertiser.id,
        }),
      };
    }

    throw new BadRequestException("Invalid role");
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new UnauthorizedException("Invalid credentials");
    }

    if (user.role === UserRole.ADMIN) {
      const token = this.signAdminToken(user);
      return { token, user: this.toUserResponse(user) };
    }

    if (user.role === UserRole.ADVERTISER) {
      const advertiser = await this.prisma.advertiser.findFirst({
        where: { userId: user.id },
      });
      if (!advertiser) {
        throw new UnauthorizedException("Advertiser profile not found");
      }
      const token = this.signAdvertiserToken(user, advertiser.id);
      return {
        token,
        user: this.toUserResponse(user, { advertiserId: advertiser.id }),
      };
    }

    const venue = await this.prisma.venue.findFirst({
      where: { ownerId: user.id },
      orderBy: { createdAt: "asc" },
    });
    if (!venue) {
      throw new UnauthorizedException("No venue linked to this account");
    }

    const token = this.signOwnerToken(user, venue.id);
    return { token, user: this.toUserResponse(user, { venueId: venue.id }) };
  }

  private signAdminToken(user: { id: string; email: string }) {
    return this.jwt.sign(
      { sub: user.id, email: user.email, type: "admin", role: "ADMIN" },
      {
        secret: this.config.get<string>("JWT_ADMIN_SECRET"),
        expiresIn: "8h",
      }
    );
  }

  private signOwnerToken(user: { id: string; email: string }, venueId: string) {
    return this.jwt.sign(
      {
        sub: user.id,
        email: user.email,
        type: "owner",
        role: "SCREEN_OWNER",
        venueId,
      },
      {
        secret: this.config.get<string>("JWT_OWNER_SECRET"),
        expiresIn: "8h",
      }
    );
  }

  private signAdvertiserToken(
    user: { id: string; email: string },
    advertiserId: string
  ) {
    return this.jwt.sign(
      {
        sub: user.id,
        email: user.email,
        type: "advertiser",
        role: "ADVERTISER",
        advertiserId,
      },
      {
        secret: this.config.get<string>("JWT_ADVERTISER_SECRET"),
        expiresIn: "8h",
      }
    );
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
