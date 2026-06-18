import { NextResponse } from "next/server";
import { getApiUrl } from "@/lib/session";
import { getAccessToken } from "@/lib/supabase/server";

export async function GET() {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const res = await fetch(`${getApiUrl()}/api/admin/devices`, {
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
