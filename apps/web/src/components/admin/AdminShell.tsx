import { DashboardShell } from "@/components/dashboard/DashboardShell";

export function AdminShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return (
    <DashboardShell role="admin" email={email}>
      {children}
    </DashboardShell>
  );
}
