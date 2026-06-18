import { NextResponse } from "next/server";
import { getApiUrl } from "@/lib/session";
import { getAccessToken } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.text();
  const token = await getAccessToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${getApiUrl()}/api/bookings/hold`, {
    method: "POST",
    headers,
    body,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data.message;
    const message = Array.isArray(msg)
      ? msg.join(", ")
      : (msg ?? `API error ${res.status}`);
    return NextResponse.json({ message }, { status: res.status });
  }

  return NextResponse.json(data);
}
