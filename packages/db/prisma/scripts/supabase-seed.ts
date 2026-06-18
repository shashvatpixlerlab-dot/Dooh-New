import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import ws from "ws";
import { resolveSupabaseServiceRoleKey } from "./supabase-admin-key";

export async function getSupabaseAdmin(): Promise<SupabaseClient | null> {
  const url = (
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  )?.trim();
  const key = await resolveSupabaseServiceRoleKey({
    url,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    jwtSecret: process.env.SUPABASE_JWT_SECRET,
  });
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
    realtime: { transport: ws as never },
  });
}

export async function ensureSupabaseAuthUser(input: {
  email: string;
  password: string;
  appMetadata: Record<string, unknown>;
}): Promise<string | null> {
  const admin = await getSupabaseAdmin();
  if (!admin) return null;

  const { data: listed, error: listError } = await admin.auth.admin.listUsers();
  if (listError) {
    throw new Error(
      `Supabase admin auth failed: ${listError.message}. ` +
        `Use the legacy service_role key (starts with eyJ) from Dashboard → Settings → API → Legacy API keys → paste into SUPABASE_SERVICE_ROLE_KEY, save .env, then re-run pnpm db:seed.`
    );
  }

  const existing = listed.users.find(
    (user) => user.email?.toLowerCase() === input.email.toLowerCase()
  );

  if (existing) {
    const { error } = await admin.auth.admin.updateUserById(existing.id, {
      password: input.password,
      email_confirm: true,
      app_metadata: input.appMetadata,
    });
    if (error) {
      throw new Error(`Supabase updateUser failed: ${error.message}`);
    }
    return existing.id;
  }

  const { data, error } = await admin.auth.admin.createUser({
    email: input.email,
    password: input.password,
    email_confirm: true,
    app_metadata: input.appMetadata,
  });

  if (error || !data.user) {
    throw new Error(error?.message ?? "Supabase createUser failed");
  }

  return data.user.id;
}
