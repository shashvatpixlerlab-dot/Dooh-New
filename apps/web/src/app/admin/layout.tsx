import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { verifyAdminToken } from "@/lib/admin-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifyAdminToken();

  if (!session) {
    redirect("/login");
  }

  return <AdminShell email={session.email}>{children}</AdminShell>;
}
