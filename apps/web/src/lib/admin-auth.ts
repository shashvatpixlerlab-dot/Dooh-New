export type AdminSession = { email: string; sub: string };

export async function verifyAdminToken(): Promise<AdminSession | null> {
  const { getSupabaseAuthUser, getRoleFromUser } = await import("./supabase/server");
  const user = await getSupabaseAuthUser();
  if (!user?.email || getRoleFromUser(user) !== "ADMIN") return null;
  return { email: user.email, sub: user.id };
}
