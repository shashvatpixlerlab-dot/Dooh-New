import { NextResponse } from "next/server";
import { getApiUrl } from "@/lib/session";
import { getAccessToken } from "@/lib/supabase/server";

async function ownerFetch(path: string, init?: RequestInit) {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
  const res = await fetch(`${getApiUrl()}/api${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(init?.headers as Record<string, string>),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data.message;
    const message = Array.isArray(msg) ? msg.join(", ") : (msg ?? "Request failed");
    return NextResponse.json({ message }, { status: res.status });
  }
  return NextResponse.json(data);
}

export async function GET() {
  try {
    return await ownerFetch("/owner/screens");
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  try {
    return await ownerFetch("/owner/screens", {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}
