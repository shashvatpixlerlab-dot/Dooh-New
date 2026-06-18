import { NextResponse } from "next/server";
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
    if (profile.role !== "ADMIN") {
      await supabase.auth.signOut();
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ ok: true, email });
  } catch {
    return NextResponse.json(
      { message: "Unable to reach API. Is the backend running?" },
      { status: 503 }
    );
  }
}
