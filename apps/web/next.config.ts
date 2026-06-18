import type { NextConfig } from "next";
import path from "path";
import { readFileSync, existsSync } from "fs";

function parseEnvFile(filePath: string): Record<string, string> {
  const vars: Record<string, string> = {};
  if (!existsSync(filePath)) return vars;

  for (const line of readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    vars[key] = value;
  }
  return vars;
}

const rootEnvPath = path.join(__dirname, "../../.env");
const webEnvPath = path.join(__dirname, ".env");
const rootEnvVars = parseEnvFile(rootEnvPath);
const webEnvVars = parseEnvFile(webEnvPath);
const mergedEnv = { ...rootEnvVars, ...webEnvVars };

for (const [key, value] of Object.entries(mergedEnv)) {
  if (!(key in process.env)) process.env[key] = value;
}

const bunnyCdnHostname =
  mergedEnv.BUNNY_CDN_HOSTNAME ?? process.env.BUNNY_CDN_HOSTNAME ?? "";
const publicApiUrl =
  mergedEnv.NEXT_PUBLIC_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "";
const publicSupabaseUrl =
  mergedEnv.NEXT_PUBLIC_SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const publicSupabaseAnonKey =
  mergedEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "";
const publicBunnyCdn =
  mergedEnv.NEXT_PUBLIC_BUNNY_CDN_HOSTNAME ??
  mergedEnv.BUNNY_CDN_HOSTNAME ??
  process.env.NEXT_PUBLIC_BUNNY_CDN_HOSTNAME ??
  "";

const bunnyImagePatterns = bunnyCdnHostname
  ? [{ protocol: "https" as const, hostname: bunnyCdnHostname }]
  : [];

const nextConfig: NextConfig = {
  transpilePackages: ["@dooh/shared"],
  outputFileTracingRoot: path.join(__dirname, "../../"),
  env: {
    NEXT_PUBLIC_API_URL: publicApiUrl,
    NEXT_PUBLIC_SUPABASE_URL: publicSupabaseUrl,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: publicSupabaseAnonKey,
    NEXT_PUBLIC_BUNNY_CDN_HOSTNAME: publicBunnyCdn,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "cdn.example.com" },
      { protocol: "http", hostname: "localhost", port: "3001" },
      ...bunnyImagePatterns,
    ],
  },
};

export default nextConfig;
