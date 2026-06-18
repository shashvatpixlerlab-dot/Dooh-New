import { NextResponse } from "next/server";
import { dashboardPathForRole } from "@/lib/auth-session";
import { createClient } from "@/lib/supabase/server";
import { syncSessionWithApi } from "@/lib/supabase/sync-session";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      return NextResponse.json(
        { message: error?.message ?? "Invalid credentials" },
        { status: 401 }
      );
    }

    const profile = await syncSessionWithApi(data.session.access_token);

    return NextResponse.json({
      ok: true,
      redirectTo: dashboardPathForRole(profile.role),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to sign in";
    if (message.includes("fetch") || message.includes("reach API")) {
      return NextResponse.json(
        { message: "Unable to reach API. Is the backend running?" },
        { status: 503 }
      );
    }
    return NextResponse.json({ message }, { status: 401 });
  }
}
