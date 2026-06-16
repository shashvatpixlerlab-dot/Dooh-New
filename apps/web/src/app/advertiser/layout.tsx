import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdvertiserShell } from "@/components/advertiser/AdvertiserShell";
import { ADVERTISER_COOKIE, verifyAdvertiserToken } from "@/lib/session";

export default async function AdvertiserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = await verifyAdvertiserToken(
    cookieStore.get(ADVERTISER_COOKIE)?.value
  );

  if (!session) {
    redirect("/login");
  }

  return <AdvertiserShell email={session.email}>{children}</AdvertiserShell>;
}
