import { cookies } from "next/headers";
import { api } from "./api";

export async function adminApi<T>(path: string, options?: RequestInit) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) throw new Error("Not authenticated");
  return api<T>(path, { ...options, token });
}
