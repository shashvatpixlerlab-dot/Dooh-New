import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { dashboardPathForRole } from "@/lib/auth-session";

export type SupabaseAppRole = "ADMIN" | "SCREEN_OWNER" | "ADVERTISER";

function getRoleFromUser(user: {
  app_metadata?: Record<string, unknown>;
} | null): SupabaseAppRole | null {
  const role = user?.app_metadata?.role;
  if (role === "ADMIN" || role === "SCREEN_OWNER" || role === "ADVERTISER") {
    return role;
  }
  return null;
}

export async function updateSession(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const role = getRoleFromUser(user);
  const { pathname } = request.nextUrl;
  const redirect = (path: string) =>
    NextResponse.redirect(new URL(path, request.url), 303);

  if (pathname === "/ownern") {
    return redirect("/owner");
  }

  if (pathname === "/login" || pathname === "/signup") {
    if (user && role) return redirect(dashboardPathForRole(role));
    return supabaseResponse;
  }

  if (pathname === "/admin/login") {
    if (user && role === "ADMIN") return redirect("/admin");
    return redirect("/login");
  }

  if (pathname.startsWith("/admin")) {
    if (!user || role !== "ADMIN") return redirect("/login");
    return supabaseResponse;
  }

  if (pathname.startsWith("/owner")) {
    if (!user || role !== "SCREEN_OWNER") return redirect("/login");
    return supabaseResponse;
  }

  if (pathname.startsWith("/advertiser")) {
    if (!user || role !== "ADVERTISER") return redirect("/login");
    return supabaseResponse;
  }

  return supabaseResponse;
}
