import { SignJWT } from "jose";

export async function resolveSupabaseServiceRoleKey(config: {
  url?: string;
  serviceRoleKey?: string;
  jwtSecret?: string;
}): Promise<string | null> {
  const serviceRoleKey = config.serviceRoleKey?.trim();
  const jwtSecret = config.jwtSecret?.trim();
  const url = config.url?.trim();

  if (serviceRoleKey?.startsWith("eyJ")) return serviceRoleKey;

  if (jwtSecret) {
    const ref = url ? new URL(url).hostname.split(".")[0] : undefined;
    return new SignJWT({
      role: "service_role",
      ...(ref ? { ref } : {}),
    })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuer("supabase")
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(jwtSecret));
  }

  return serviceRoleKey ?? null;
}
