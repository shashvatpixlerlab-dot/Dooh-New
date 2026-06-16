import { NextResponse } from "next/server";
import { dashboardPathForRole } from "@/lib/auth-session";
import { setAuthCookie } from "@/lib/auth-cookies";
import { getApiUrl } from "@/lib/session";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  try {
    const res = await fetch(`${getApiUrl()}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data.message;
      const message = Array.isArray(msg) ? msg.join(", ") : (msg ?? "Signup failed");
      return NextResponse.json({ message }, { status: res.status });
    }

    const response = NextResponse.json({
      ok: true,
      redirectTo: dashboardPathForRole(data.user.role),
    });
    setAuthCookie(response, data.user.role, data.token);
    return response;
  } catch {
    return NextResponse.json(
      { message: "Unable to reach API. Is the backend running?" },
      { status: 503 }
    );
  }
}
