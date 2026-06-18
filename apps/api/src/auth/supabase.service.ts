import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { createRemoteJWKSet, jwtVerify } from "jose";
import ws from "ws";
import { resolveSupabaseServiceRoleKey } from "./supabase-admin-key";

export type SupabaseJwtPayload = {
  sub: string;
  email?: string;
};

@Injectable()
export class SupabaseService {
  private adminClient: SupabaseClient | null = null;
  private jwks: ReturnType<typeof createRemoteJWKSet> | null = null;

  constructor(private config: ConfigService) {}

  private getSupabaseUrl(): string | undefined {
    return (
      this.config.get<string>("SUPABASE_URL") ??
      this.config.get<string>("NEXT_PUBLIC_SUPABASE_URL")
    )?.trim();
  }

  private getJwks() {
    if (this.jwks) return this.jwks;
    const url = this.getSupabaseUrl();
    if (!url) return null;
    this.jwks = createRemoteJWKSet(
      new URL("/auth/v1/.well-known/jwks.json", url)
    );
    return this.jwks;
  }

  async getAdminClient(): Promise<SupabaseClient> {
    if (this.adminClient) return this.adminClient;

    const url = this.getSupabaseUrl();
    const key = await resolveSupabaseServiceRoleKey({
      url,
      serviceRoleKey: this.config.get<string>("SUPABASE_SERVICE_ROLE_KEY"),
      jwtSecret: this.config.get<string>("SUPABASE_JWT_SECRET"),
    });
    if (!url || !key) {
      throw new Error("SUPABASE_URL and admin credentials are required");
    }

    this.adminClient = createClient(url, key, {
      auth: { autoRefreshToken: false, persistSession: false },
      realtime: { transport: ws as never },
    });
    return this.adminClient;
  }

  isConfigured(): boolean {
    const url = this.getSupabaseUrl();
    const serviceKey = this.config.get<string>("SUPABASE_SERVICE_ROLE_KEY")?.trim();
    const jwtSecret = this.config.get<string>("SUPABASE_JWT_SECRET")?.trim();
    return Boolean(url && (serviceKey || jwtSecret));
  }

  async verifyAccessToken(token: string): Promise<SupabaseJwtPayload> {
    const secret = this.config.get<string>("SUPABASE_JWT_SECRET")?.trim();
    const jwks = this.getJwks();

    try {
      let payload;
      if (jwks) {
        try {
          ({ payload } = await jwtVerify(token, jwks));
        } catch {
          if (!secret) throw new UnauthorizedException("Invalid or expired token");
          ({ payload } = await jwtVerify(
            token,
            new TextEncoder().encode(secret)
          ));
        }
      } else if (secret) {
        ({ payload } = await jwtVerify(
          token,
          new TextEncoder().encode(secret)
        ));
      } else {
        throw new UnauthorizedException("Supabase auth is not configured");
      }

      const sub = payload.sub;
      if (!sub) {
        throw new UnauthorizedException("Invalid token");
      }
      return {
        sub,
        email: typeof payload.email === "string" ? payload.email : undefined,
      };
    } catch (e) {
      if (e instanceof UnauthorizedException) throw e;
      throw new UnauthorizedException("Invalid or expired token");
    }
  }

  extractBearerToken(authorization?: string): string | null {
    if (!authorization?.startsWith("Bearer ")) return null;
    const token = authorization.slice(7).trim();
    return token || null;
  }

  async syncAppMetadata(
    supabaseUserId: string,
    metadata: Record<string, unknown>
  ): Promise<void> {
    const admin = await this.getAdminClient();
    const { error } = await admin.auth.admin.updateUserById(supabaseUserId, {
      app_metadata: metadata,
    });
    if (error) {
      throw new Error(`Failed to sync Supabase metadata: ${error.message}`);
    }
  }
}
