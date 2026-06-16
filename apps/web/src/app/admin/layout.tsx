import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { ADMIN_COOKIE, verifyAdminToken } from "@/lib/admin-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  const session = await verifyAdminToken(token);

  if (!session) {
    redirect("/login");
  }

  return <AdminShell email={session.email}>{children}</AdminShell>;
}
