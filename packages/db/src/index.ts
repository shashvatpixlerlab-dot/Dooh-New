import { PrismaClient } from "./generated/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

/** Resolve DB URL from common Vercel / Supabase env names. */
export function resolveDatabaseUrl(): string | undefined {
  const url =
    process.env.DATABASE_URL ??
    process.env.VERCEL_DATABASE_URL ??
    process.env.POSTGRES_URL ??
    process.env.POSTGRES_PRISMA_URL ??
    process.env.SUPABASE_DATABASE_URL;

  if (url) {
    process.env.DATABASE_URL = url;
  }
  return url;
}

function createPrismaClient(): PrismaClient {
  const url = resolveDatabaseUrl();
  if (!url) {
    return new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });
  }
  return new PrismaClient({
    datasources: { db: { url } },
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

globalForPrisma.prisma = prisma;

export * from "./generated/client";
