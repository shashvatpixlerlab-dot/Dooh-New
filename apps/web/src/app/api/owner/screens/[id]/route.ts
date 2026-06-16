import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getApiUrl, OWNER_COOKIE } from "@/lib/session";

async function ownerFetch(path: string, init?: RequestInit) {
  const token = (await cookies()).get(OWNER_COOKIE)?.value;
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

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    return await ownerFetch(`/owner/screens/${id}`);
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  try {
    return await ownerFetch(`/owner/screens/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    return await ownerFetch(`/owner/screens/${id}`, { method: "DELETE" });
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}
