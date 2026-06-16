import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getApiUrl } from "@/lib/session";
import { ADVERTISER_COOKIE } from "@/lib/session";

export async function POST(request: Request) {
  const body = await request.text();
  const cookieStore = await cookies();
  const token = cookieStore.get(ADVERTISER_COOKIE)?.value;

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
