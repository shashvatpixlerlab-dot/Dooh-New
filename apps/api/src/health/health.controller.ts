import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

function resolveDatabaseUrl(): string | undefined {
  const url =
    process.env.DATABASE_URL ??
    process.env.VERCEL_DATABASE_URL ??
    process.env.POSTGRES_URL ??
    process.env.POSTGRES_PRISMA_URL ??
    process.env.SUPABASE_DATABASE_URL;

  if (url && !process.env.DATABASE_URL) {
    process.env.DATABASE_URL = url;
  }
  return url;
}

function dbEnvKeyNames(): string[] {
  return Object.keys(process.env).filter((k) =>
    /DATABASE|POSTGRES|SUPABASE/i.test(k)
  );
}

@Controller("health")
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async check() {
    const dbUrl = resolveDatabaseUrl() ?? "";
    const meta = {
      ok: true,
      vercelEnv: process.env.VERCEL_ENV ?? null,
      hasDatabaseUrl: Boolean(dbUrl),
      usesPooler: dbUrl.includes("pooler"),
      port: dbUrl.match(/:(\d+)\//)?.[1] ?? null,
      dbEnvKeysFound: dbEnvKeyNames(),
      hasJwtOwnerSecret: Boolean(process.env.JWT_OWNER_SECRET),
      hasJwtAdvertiserSecret: Boolean(process.env.JWT_ADVERTISER_SECRET),
      hasJwtAdminSecret: Boolean(process.env.JWT_ADMIN_SECRET),
      fix: !dbUrl
        ? "Vercel → dooh-api (not dooh-new-web) → Environment Variables → DATABASE_URL → enable Production + Preview → Redeploy"
        : !process.env.JWT_OWNER_SECRET || !process.env.JWT_ADVERTISER_SECRET
          ? "Add JWT_OWNER_SECRET and JWT_ADVERTISER_SECRET to dooh-api on Vercel, then redeploy"
          : undefined,
    };

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      const deviceCount = await this.prisma.device.count();
      return { ...meta, db: "ok", deviceCount };
    } catch (e) {
      return {
        ...meta,
        ok: false,
        db: "error",
        error: e instanceof Error ? e.message : String(e),
      };
    }
  }
}
