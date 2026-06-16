import { DashboardShell } from "@/components/dashboard/DashboardShell";

export function OwnerShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return (
    <DashboardShell role="owner" email={email}>
      {children}
    </DashboardShell>
  );
}
