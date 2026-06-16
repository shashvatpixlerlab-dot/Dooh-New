export {
  ADMIN_COOKIE,
  ADVERTISER_COOKIE,
  OWNER_COOKIE,
  verifyAdminToken,
  verifyAdvertiserToken,
  verifyOwnerToken,
} from "./middleware-auth";

export type {
  AdminSession,
  AdvertiserSession,
  OwnerSession,
} from "./middleware-auth";

export function getApiUrl(): string {
  return (
    process.env.API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    "http://localhost:3001"
  );
}
