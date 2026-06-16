import { Activity, Monitor, WifiOff } from "lucide-react";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { adminApi } from "@/lib/admin-api";

type Health = {
  id: string;
  name: string;
  venue: string;
  isOnline: boolean;
  lastSeenAt: string | null;
  currentlyShowingSlot: number | null;
};

export default async function ScreenHealthPage() {
  let devices: Health[] = [];
  try {
    devices = await adminApi<Health[]>("/admin/screen-health");
  } catch {
    devices = [];
  }

  const online = devices.filter((d) => d.isOnline).length;

  const stats = [
    { label: "Total devices", value: devices.length, icon: Monitor },
    { label: "Online", value: online, icon: Activity },
    { label: "Offline", value: devices.length - online, icon: WifiOff },
  ];

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Screen health"
        description="Live liveness from device heartbeats across the network."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-input bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="overflow-hidden border-input bg-card shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/40 hover:bg-secondary/40">
                <TableHead>Device</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Current slot</TableHead>
                <TableHead>Last seen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="py-12 text-center text-muted-foreground">
                    No devices found. Start the API and run{" "}
                    <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">
                      pnpm db:seed
                    </code>
                    .
                  </TableCell>
                </TableRow>
              ) : (
                devices.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-medium">{d.name}</TableCell>
                    <TableCell className="text-muted-foreground">{d.venue}</TableCell>
                    <TableCell>
                      <Badge variant={d.isOnline ? "success" : "secondary"}>
                        {d.isOnline ? "Online" : "Offline"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {d.currentlyShowingSlot != null ? (
                        <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                          Slot {d.currentlyShowingSlot}
                        </span>
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {d.lastSeenAt
                        ? new Date(d.lastSeenAt).toLocaleString()
                        : "Never"}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
