/**
 * Edge-safe JWT verification for middleware only.
 */
import { jwtVerify } from "jose/jwt/verify";

export const ADMIN_COOKIE = "admin_token";
export const OWNER_COOKIE = "owner_token";
export const ADVERTISER_COOKIE = "advertiser_token";

export type AdminSession = { email: string; sub: string };
export type OwnerSession = { email: string; sub: string; venueId: string };
export type AdvertiserSession = {
  email: string;
  sub: string;
  advertiserId: string;
};

function encodeSecret(secret: string | undefined): Uint8Array | null {
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

export async function verifyAdminToken(
  token: string | undefined
): Promise<AdminSession | null> {
  if (!token) return null;
  const secret = encodeSecret(process.env.JWT_ADMIN_SECRET);
  if (!secret) return null;

  try {
    const { payload } = await jwtVerify(token, secret);
    if (payload.type !== "admin" || typeof payload.email !== "string") return null;
    return { email: payload.email, sub: String(payload.sub ?? "") };
  } catch {
    return null;
  }
}

export async function verifyOwnerToken(
  token: string | undefined
): Promise<OwnerSession | null> {
  if (!token) return null;
  const secret = encodeSecret(process.env.JWT_OWNER_SECRET);
  if (!secret) return null;

  try {
    const { payload } = await jwtVerify(token, secret);
    if (
      payload.type !== "owner" ||
      typeof payload.email !== "string" ||
      typeof payload.venueId !== "string"
    ) {
      return null;
    }
    return {
      email: payload.email,
      sub: String(payload.sub ?? ""),
      venueId: payload.venueId,
    };
  } catch {
    return null;
  }
}

export async function verifyAdvertiserToken(
  token: string | undefined
): Promise<AdvertiserSession | null> {
  if (!token) return null;
  const secret = encodeSecret(process.env.JWT_ADVERTISER_SECRET);
  if (!secret) return null;

  try {
    const { payload } = await jwtVerify(token, secret);
    if (
      payload.type !== "advertiser" ||
      typeof payload.email !== "string" ||
      typeof payload.advertiserId !== "string"
    ) {
      return null;
    }
    return {
      email: payload.email,
      sub: String(payload.sub ?? ""),
      advertiserId: payload.advertiserId,
    };
  } catch {
    return null;
  }
}
