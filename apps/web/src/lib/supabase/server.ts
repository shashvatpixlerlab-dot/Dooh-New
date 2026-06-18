import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return { url, anonKey };
}

export async function createClient() {
  const config = getSupabaseConfig();
  if (!config) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required");
  }

  const cookieStore = await cookies();

  return createServerClient(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // setAll can fail in Server Components; middleware refreshes sessions.
        }
      },
    },
  });
}

export async function getAccessToken(): Promise<string | null> {
  const config = getSupabaseConfig();
  if (!config) return null;

  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session?.access_token ?? null;
}

export type SupabaseAppRole = "ADMIN" | "SCREEN_OWNER" | "ADVERTISER";

export async function getSupabaseAuthUser() {
  const config = getSupabaseConfig();
  if (!config) return null;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export function getRoleFromUser(user: {
  app_metadata?: Record<string, unknown>;
} | null): SupabaseAppRole | null {
  const role = user?.app_metadata?.role;
  if (role === "ADMIN" || role === "SCREEN_OWNER" || role === "ADVERTISER") {
    return role;
  }
  return null;
}
