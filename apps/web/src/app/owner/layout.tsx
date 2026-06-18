import { redirect } from "next/navigation";
import { OwnerShell } from "@/components/owner/OwnerShell";
import { getRoleFromUser, getSupabaseAuthUser } from "@/lib/supabase/server";

export default async function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSupabaseAuthUser();
  if (!user?.email || getRoleFromUser(user) !== "SCREEN_OWNER") {
    redirect("/login");
  }

  return <OwnerShell email={user.email}>{children}</OwnerShell>;
}
