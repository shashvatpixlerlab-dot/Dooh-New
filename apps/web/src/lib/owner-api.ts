import { getAccessToken } from "@/lib/supabase/server";
import { api } from "./api";

export async function ownerApi<T>(path: string, options?: RequestInit) {
  const token = await getAccessToken();
  if (!token) throw new Error("Not authenticated");
  return api<T>(path, { ...options, token });
}
