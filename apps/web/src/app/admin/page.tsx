import Link from "next/link";
import {
  Activity,
  Building2,
  ClipboardList,
  Monitor,
  MonitorCheck,
} from "lucide-react";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminApi } from "@/lib/admin-api";

type Health = { isOnline: boolean };
type Booking = { id: string };
type PendingScreen = { id: string };

export default async function AdminHomePage() {
  let pendingBookings = 0;
  let pendingScreens = 0;
  let onlineCount = 0;
  let totalDevices = 0;
  let apiOnline = true;

  try {
    const [bookings, screens, health] = await Promise.all([
      adminApi<Booking[]>("/admin/bookings?status=PENDING_APPROVAL"),
      adminApi<PendingScreen[]>("/admin/screens?approvalStatus=PENDING"),
      adminApi<Health[]>("/admin/screen-health"),
    ]);
    pendingBookings = bookings.length;
    pendingScreens = screens.length;
    totalDevices = health.length;
    onlineCount = health.filter((d) => d.isOnline).length;
  } catch {
    apiOnline = false;
  }

  const offlineCount = totalDevices - onlineCount;
  const onlinePct =
    totalDevices > 0 ? Math.round((onlineCount / totalDevices) * 100) : 0;

  const stats = [
    { label: "Pending bookings", value: pendingBookings, icon: ClipboardList },
    { label: "Screen approvals", value: pendingScreens, icon: MonitorCheck },
    { label: "Screens online", value: onlineCount, icon: Monitor },
    { label: "Total devices", value: totalDevices, icon: Activity },
  ];

  const actions = [
    {
      href: "/admin/bookings",
      title: "Booking queue",
      description: `${pendingBookings} creative${pendingBookings !== 1 ? "s" : ""} awaiting review`,
      icon: ClipboardList,
    },
    {
      href: "/admin/screens",
      title: "Screen approvals",
      description: `${pendingScreens} screen${pendingScreens !== 1 ? "s" : ""} pending review`,
      icon: MonitorCheck,
    },
    {
      href: "/admin/health",
      title: "Screen health",
      description: `${onlineCount}/${totalDevices} devices online`,
      icon: Activity,
    },
    {
      href: "/admin/venues",
      title: "Venues & devices",
      description: "Onboard venues and pairing credentials",
      icon: Building2,
    },
  ];

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Dashboard"
        description="Overview of bookings, screen approvals, and network health."
        action={
          !apiOnline ? (
            <Badge variant="secondary" className="text-amber-600">
              API offline
            </Badge>
          ) : undefined
        }
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-input bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {actions.map((action) => (
          <Link key={action.href} href={action.href}>
            <Card className="h-full border-input bg-card shadow-sm transition hover:border-primary/40 hover:shadow-md">
              <CardContent className="flex gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <action.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{action.title}</p>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                  <p className="text-sm font-medium text-primary">Open →</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      {totalDevices > 0 && (
        <Card className="border-input bg-card/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Network snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <p className="text-muted-foreground">Online</p>
                <p className="text-2xl font-bold text-emerald-500">{onlineCount}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Offline</p>
                <p className="text-2xl font-bold text-destructive">{offlineCount}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Uptime</p>
                <p className="text-2xl font-bold text-foreground">{onlinePct}%</p>
              </div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${onlinePct}%` }}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
