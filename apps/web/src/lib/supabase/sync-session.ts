import { getApiUrl } from "@/lib/session";

export async function syncSessionWithApi(accessToken: string) {
  const res = await fetch(`${getApiUrl()}/api/auth/sync-session`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const msg = data.message;
    const message = Array.isArray(msg) ? msg.join(", ") : (msg ?? "Session sync failed");
    throw new Error(message);
  }
  return res.json() as Promise<{ role: string }>;
}
