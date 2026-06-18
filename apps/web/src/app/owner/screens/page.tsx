import Link from "next/link";
import { CheckCircle2, Clock, Monitor, Plus, Radio } from "lucide-react";
import { DEVICE_LIVENESS_MINUTES } from "@dooh/shared";
import { OwnerPageHeader } from "@/components/owner/OwnerPageHeader";
import { OwnerScreensTable } from "@/components/owner/OwnerScreensTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ownerApi } from "@/lib/owner-api";
import type { OwnerScreen } from "@/lib/types";
import { cn } from "@/lib/utils";

function isOnline(lastSeenAt: string | null | undefined, cutoff: number) {
  return Boolean(lastSeenAt && new Date(lastSeenAt).getTime() >= cutoff);
}

export default async function OwnerScreensPage() {
  let screens: OwnerScreen[] = [];
  try {
    screens = await ownerApi<OwnerScreen[]>("/owner/screens");
  } catch {
    screens = [];
  }

  const cutoff = Date.now() - DEVICE_LIVENESS_MINUTES * 60 * 1000;
  const onlineById = Object.fromEntries(
    screens.map((s) => [s.id, isOnline(s.lastSeenAt, cutoff)])
  );
  const onlineCount = screens.filter((s) => onlineById[s.id]).length;
  const pendingCount = screens.filter((s) => s.approvalStatus === "PENDING").length;
  const liveCount = screens.filter((s) => s.approvalStatus === "APPROVED").length;

  const summary = [
    { label: "Total screens", value: screens.length, icon: Monitor, highlight: false },
    { label: "Pending approval", value: pendingCount, icon: Clock, highlight: pendingCount > 0 },
    { label: "Live on marketplace", value: liveCount, icon: CheckCircle2, highlight: false },
    { label: "Online now", value: onlineCount, icon: Radio, highlight: false },
  ];

  return (
    <div className="space-y-8">
      <OwnerPageHeader
        title="My screens"
        description="Manage your digital screens listed on the DOOH marketplace."
        action={
          <Button asChild>
            <Link href="/owner/screens/new" className="gap-2 text-primary-foreground">
              <Plus className="h-4 w-4" />
              Add screen
            </Link>
          </Button>
        }
      />

      {screens.length === 0 ? (
        <Card className="border-dashed border-input bg-card/50">
          <CardContent className="flex flex-col items-center gap-4 py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
              <Monitor className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-foreground">No screens yet</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                Add your first screen to start receiving bookings. New screens are reviewed before
                going live.
              </p>
            </div>
            <Button asChild>
              <Link href="/owner/screens/new" className="text-primary-foreground">
                Add your first screen
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {summary.map((item) => (
              <Card
                key={item.label}
                className={cn(
                  "overflow-hidden border-input bg-card shadow-sm transition-shadow hover:shadow-md",
                  item.highlight && "border-amber-500/40 ring-1 ring-amber-500/20"
                )}
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                      item.highlight ? "bg-amber-500/15" : "bg-primary/10"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-5 w-5",
                        item.highlight ? "text-amber-600" : "text-primary"
                      )}
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold tracking-tight text-foreground">
                      {item.value}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="overflow-hidden border-input bg-card shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between border-b border-input bg-secondary/30 px-6 py-4">
              <div className="space-y-0.5">
                <CardTitle className="text-base font-semibold">All screens</CardTitle>
                <p className="text-xs text-muted-foreground">
                  Click a row to edit · {screens.length} registered
                </p>
              </div>
              <Badge variant="secondary" className="font-normal">
                {liveCount} live
              </Badge>
            </CardHeader>
            <CardContent className="p-0">
              <OwnerScreensTable screens={screens} onlineById={onlineById} />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
