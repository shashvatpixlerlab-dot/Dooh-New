"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Building2,
  Calendar,
  ClipboardList,
  LayoutDashboard,
  Monitor,
  MonitorCheck,
  PlusCircle,
  Store,
} from "lucide-react";
import type { DashboardRole, NavLinkConfig } from "@/lib/dashboard-nav";
import { DASHBOARD_NAV } from "@/lib/dashboard-nav";
import { cn } from "@/lib/utils";

const ICONS = {
  "layout-dashboard": LayoutDashboard,
  "clipboard-list": ClipboardList,
  "monitor-check": MonitorCheck,
  activity: Activity,
  building: Building2,
  monitor: Monitor,
  "plus-circle": PlusCircle,
  calendar: Calendar,
  store: Store,
} as const;

function isActive(pathname: string, link: NavLinkConfig) {
  if (link.exact) return pathname === link.href;
  if (link.href.startsWith("/#")) return false;
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

export function DashboardNav({ role }: { role: DashboardRole }) {
  const pathname = usePathname();
  const links = DASHBOARD_NAV[role];

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {
        const Icon = ICONS[link.icon];
        const active = isActive(pathname, link);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-primary/12 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
