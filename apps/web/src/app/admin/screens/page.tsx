import { CheckCircle2, Clock, Monitor, XCircle } from "lucide-react";
import { AdminScreensTable } from "@/components/admin/AdminScreensTable";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminApi } from "@/lib/admin-api";
import type { AdminScreen } from "@/lib/types";
import { cn } from "@/lib/utils";

export default async function AdminScreensPage() {
  let allScreens: AdminScreen[] = [];
  try {
    allScreens = await adminApi<AdminScreen[]>("/admin/screens");
  } catch {
    allScreens = [];
  }

  const pendingScreens = allScreens.filter((s) => s.approvalStatus === "PENDING");
  const approvedCount = allScreens.filter((s) => s.approvalStatus === "APPROVED").length;
  const rejectedCount = allScreens.filter((s) => s.approvalStatus === "REJECTED").length;

  const summary = [
    {
      label: "Pending review",
      value: pendingScreens.length,
      icon: Clock,
      highlight: pendingScreens.length > 0,
    },
    {
      label: "Approved",
      value: approvedCount,
      icon: CheckCircle2,
      highlight: false,
    },
    {
      label: "Rejected",
      value: rejectedCount,
      icon: XCircle,
      highlight: false,
    },
    {
      label: "Total screens",
      value: allScreens.length,
      icon: Monitor,
      highlight: false,
    },
  ];

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Screen approvals"
        description="Review owner-submitted screens before they appear on the marketplace."
      />

      {pendingScreens.length === 0 ? (
        <Card className="border-dashed border-input bg-card/50">
          <CardContent className="flex flex-col items-center gap-4 py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-foreground">All caught up</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                No screens waiting for approval. New owner submissions will appear here.
              </p>
            </div>
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
                <CardTitle className="text-base font-semibold">Pending approvals</CardTitle>
                <p className="text-xs text-muted-foreground">
                  Review each submission · {pendingScreens.length} awaiting decision
                </p>
              </div>
              <Badge variant="secondary" className="font-normal">
                {pendingScreens.length} pending
              </Badge>
            </CardHeader>
            <CardContent className="p-0">
              <AdminScreensTable screens={pendingScreens} />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
