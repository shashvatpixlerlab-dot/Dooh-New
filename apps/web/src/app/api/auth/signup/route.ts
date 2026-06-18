import { NextResponse } from "next/server";
import { dashboardPathForRole } from "@/lib/auth-session";
import { getApiUrl } from "@/lib/session";
import { createClient } from "@/lib/supabase/server";
import { syncSessionWithApi } from "@/lib/supabase/sync-session";

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

    const email = typeof body.email === "string" ? body.email.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const supabase = await createClient();
    const { data: signIn, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !signIn.session) {
      return NextResponse.json(
        { message: error?.message ?? "Account created but sign-in failed" },
        { status: 500 }
      );
    }

    const profile = await syncSessionWithApi(signIn.session.access_token);

    return NextResponse.json({
      ok: true,
      redirectTo: dashboardPathForRole(profile.role),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Signup failed";
    if (message.includes("fetch") || message.includes("reach API")) {
      return NextResponse.json(
        { message: "Unable to reach API. Is the backend running?" },
        { status: 503 }
      );
    }
    return NextResponse.json({ message }, { status: 401 });
  }
}
