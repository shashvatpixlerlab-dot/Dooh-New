import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { OwnerShell } from "@/components/owner/OwnerShell";
import { OWNER_COOKIE, verifyOwnerToken } from "@/lib/session";

export default async function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = await verifyOwnerToken(cookieStore.get(OWNER_COOKIE)?.value);

  if (!session) {
    redirect("/login");
  }

  return <OwnerShell email={session.email}>{children}</OwnerShell>;
}
