import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getApiUrl, ADMIN_COOKIE } from "@/lib/session";

export async function GET() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const res = await fetch(`${getApiUrl()}/api/admin/venues`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json({ message: data.message ?? "Failed" }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ message: "Unable to reach API" }, { status: 503 });
  }
}
