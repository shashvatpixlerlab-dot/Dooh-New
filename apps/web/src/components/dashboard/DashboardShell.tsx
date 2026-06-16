import Link from "next/link";
import { DashboardLogout } from "@/components/dashboard/DashboardLogout";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { ThemeToggle } from "@/components/ThemeToggle";
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
      <aside className="flex w-64 shrink-0 flex-col border-r border-input bg-card">
        <div className="border-b border-input px-5 py-5">
          <Link href={brand.homeHref} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-lg text-primary ring-1 ring-primary/20">
              ◉
            </span>
            <div>
              <p className="font-semibold leading-tight text-foreground">
                {brand.title}
              </p>
              <p className="text-xs text-muted-foreground">{brand.subtitle}</p>
            </div>
          </Link>
        </div>

        <div className="flex-1 px-3 py-4">
          <DashboardNav role={role} />
        </div>

        <div className="space-y-3 border-t border-input p-4">
          <ThemeToggle className="theme-toggle-sidebar" />
          <div className="flex items-center gap-3 rounded-lg bg-secondary/60 px-3 py-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
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
