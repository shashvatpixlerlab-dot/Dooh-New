import { advertiserApi } from "./advertiser-api";
import { getRoleFromUser, getSupabaseAuthUser } from "./supabase/server";

export type AdvertiserCheckoutProfile = {
  id: string;
  email: string;
  name: string;
  phone: string;
};

export async function getAdvertiserCheckoutProfile(): Promise<AdvertiserCheckoutProfile | null> {
  const user = await getSupabaseAuthUser();
  if (!user?.email || getRoleFromUser(user) !== "ADVERTISER") return null;

  try {
    return await advertiserApi<AdvertiserCheckoutProfile>("/advertiser/me");
  } catch {
    return null;
  }
}
