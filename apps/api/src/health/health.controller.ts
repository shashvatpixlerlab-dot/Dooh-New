import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("health")
export class HealthController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async check() {
    const dbUrl = process.env.DATABASE_URL ?? "";
    const meta = {
      ok: true,
      hasDatabaseUrl: Boolean(dbUrl),
      usesPooler: dbUrl.includes("pooler"),
      port: dbUrl.match(/:(\d+)\//)?.[1] ?? null,
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
