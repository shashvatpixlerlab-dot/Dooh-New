import { redirect } from "next/navigation";
import { AdvertiserShell } from "@/components/advertiser/AdvertiserShell";
import { getRoleFromUser, getSupabaseAuthUser } from "@/lib/supabase/server";

export default async function AdvertiserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSupabaseAuthUser();
  if (!user?.email || getRoleFromUser(user) !== "ADVERTISER") {
    redirect("/login");
  }

  return <AdvertiserShell email={user.email}>{children}</AdvertiserShell>;
}
