import { DashboardShell } from "@/components/dashboard/DashboardShell";

export function AdvertiserShell({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return (
    <DashboardShell role="advertiser" email={email}>
      {children}
    </DashboardShell>
  );
}
