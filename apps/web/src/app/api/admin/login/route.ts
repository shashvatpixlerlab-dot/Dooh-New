import { NextResponse } from "next/server";
import { ADMIN_COOKIE, getApiUrl } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  let token: string;
  let adminEmail: string;

  try {
    const res = await fetch(`${getApiUrl()}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const msg = err.message;
      const message = Array.isArray(msg)
        ? msg.join(", ")
        : (msg ?? "Invalid credentials");
      return NextResponse.json({ message }, { status: res.status });
    }
    
    const data = (await res.json()) as {
      token: string;
      admin: { email: string };
    };
    token = data.token;
    adminEmail = data.admin.email;
  } catch {
    return NextResponse.json(
      { message: "Unable to reach API. Is the backend running?" },
      { status: 503 }
    );
  }

  const response = NextResponse.json({ ok: true, email: adminEmail });
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 8 * 60 * 60,
  });
  return response;
}
