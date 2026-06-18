import { BrandLogo } from "@/components/BrandLogo";
import { DashboardLogout } from "@/components/dashboard/DashboardLogout";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import type { DashboardRole } from "@/lib/dashboard-nav";
import { DASHBOARD_BRAND } from "@/lib/dashboard-nav";

function initials(email: string) {
  const name = email.split("@")[0] ?? "U";
  return name.slice(0, 2).toUpperCase();
}

export function DashboardShell({
  role,
  email,
  children,
}: {
  role: DashboardRole;
  email: string;
  children: React.ReactNode;
}) {
  const brand = DASHBOARD_BRAND[role];
  const shellClass = role === "owner" ? "owner-shell" : "dashboard-shell";

  return (
    <div className={`${shellClass} flex min-h-screen bg-background`}>
      <aside className="flex w-[var(--admin-sidebar-w)] shrink-0 flex-col border-r border-input bg-card/50 backdrop-blur-sm">
        <div className="border-b border-input px-5 py-5">
          <div className="space-y-3">
            <BrandLogo href={brand.homeHref} showWordmark={false} />
            <div>
              <p className="font-semibold leading-tight tracking-tight text-foreground">
                {brand.title}
              </p>
              <p className="text-xs text-muted-foreground">{brand.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-3 py-4">
          <DashboardNav role={role} />
        </div>

        <div className="space-y-3 border-t border-input p-4">
          <div className="flex items-center gap-3 rounded-lg border border-input/60 bg-secondary/40 px-3 py-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-input bg-card text-xs font-semibold text-foreground">
              {initials(email)}
            </span>
            <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
              {email}
            </p>
          </div>
          <DashboardLogout />
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">{children}</div>
      </main>
    </div>
  );
}
