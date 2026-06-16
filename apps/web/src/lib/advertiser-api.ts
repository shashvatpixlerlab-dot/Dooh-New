import { cookies } from "next/headers";
import { api } from "./api";
import { ADVERTISER_COOKIE } from "./session";

export async function advertiserApi<T>(path: string, options?: RequestInit) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADVERTISER_COOKIE)?.value;
  if (!token) throw new Error("Not authenticated");
  return api<T>(path, { ...options, token });
}
