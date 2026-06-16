import { cookies } from "next/headers";
import { api } from "./api";
import { OWNER_COOKIE } from "./session";

export async function ownerApi<T>(path: string, options?: RequestInit) {
  const cookieStore = await cookies();
  const token = cookieStore.get(OWNER_COOKIE)?.value;
  if (!token) throw new Error("Not authenticated");
  return api<T>(path, { ...options, token });
}
