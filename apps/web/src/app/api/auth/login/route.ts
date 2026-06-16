import { NextResponse } from "next/server";
import { dashboardPathForRole } from "@/lib/auth-session";
import { setAuthCookie } from "@/lib/auth-cookies";
import { getApiUrl } from "@/lib/session";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  try {
    const res = await fetch(`${getApiUrl()}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data.message;
      const message = Array.isArray(msg) ? msg.join(", ") : (msg ?? "Invalid credentials");
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
