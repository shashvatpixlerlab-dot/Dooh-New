import { cookies } from "next/headers";
import { advertiserApi } from "./advertiser-api";
import { ADVERTISER_COOKIE, verifyAdvertiserToken } from "./session";

export type AdvertiserCheckoutProfile = {
  id: string;
  email: string;
  name: string;
  phone: string;
};

export async function getAdvertiserCheckoutProfile(): Promise<AdvertiserCheckoutProfile | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADVERTISER_COOKIE)?.value;
  const session = await verifyAdvertiserToken(token);
  if (!session) return null;

  try {
    return await advertiserApi<AdvertiserCheckoutProfile>("/advertiser/me");
  } catch {
    return null;
  }
}
