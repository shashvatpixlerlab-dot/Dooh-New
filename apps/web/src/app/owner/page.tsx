import Image from "next/image";
import Link from "next/link";
import { Monitor, Plus, Radio, IndianRupee } from "lucide-react";
import { DEVICE_LIVENESS_MINUTES } from "@dooh/shared";
import { OwnerPageHeader } from "@/components/owner/OwnerPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resolveImageUrl } from "@/lib/image-url";
import { ownerApi } from "@/lib/owner-api";
import {
  approvalBadgeVariant,
  approvalLabel,
} from "@/lib/owner-screen-utils";
import type { OwnerScreen } from "@/lib/types";

function isOnline(lastSeenAt: string | null | undefined, cutoff: number) {
  return Boolean(lastSeenAt && new Date(lastSeenAt).getTime() >= cutoff);
}

export default async function OwnerDashboardPage() {
  let screens: OwnerScreen[] = [];
  let apiOnline = true;

  try {
    screens = await ownerApi<OwnerScreen[]>("/owner/screens");
  } catch {
    apiOnline = false;
    screens = [];
  }

  const cutoff = Date.now() - DEVICE_LIVENESS_MINUTES * 60 * 1000;
  const onlineScreens = screens.filter((s) => isOnline(s.lastSeenAt, cutoff));
  const offlineCount = screens.length - onlineScreens.length;
  const onlinePct =
    screens.length > 0
      ? Math.round((onlineScreens.length / screens.length) * 100)
      : 0;
  const avgPrice =
    screens.length > 0
      ? Math.round(
          screens.reduce((sum, s) => sum + Number(s.slotDayPrice), 0) /
            screens.length
        )
      : 0;
  const recentScreens = screens.slice(0, 5);

  const stats = [
    {
      label: "Total screens",
      value: String(screens.length),
      icon: Monitor,
    },
    {
      label: "Online now",
      value: String(onlineScreens.length),
      icon: Radio,
    },
    {
      label: "Avg. price / day",
      value: avgPrice > 0 ? `₹${avgPrice}` : "—",
      icon: IndianRupee,
    },
  ];

  return (
    <div className="space-y-8">
      <OwnerPageHeader
        title="Welcome to the Owner Dashboard"
        description="Overview of your screens and marketplace presence."
        action={
          !apiOnline ? (
            <Badge variant="secondary" className="text-amber-600">
              API offline
            </Badge>
          ) : undefined
        }
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-input bg-card">
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

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="border-input bg-card transition hover:border-primary/40">
          <CardHeader>
            <CardTitle className="text-base">Add a screen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              List a new display on the marketplace with photos and pricing.
            </p>
            <Button asChild className="w-full">
              <Link href="/owner/screens/new">
                <Plus className="mr-2 h-4 w-4" />
                Add screen
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-input bg-card transition hover:border-primary/40">
          <CardHeader>
            <CardTitle className="text-base">Manage screens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {screens.length} screen{screens.length !== 1 ? "s" : ""} registered
              {screens.length > 0 ? ` · ${onlinePct}% online` : ""}
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/owner/screens">View all screens</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-input bg-card transition hover:border-primary/40">
          <CardHeader>
            <CardTitle className="text-base">Marketplace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              See how advertisers browse and book screens like yours.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Browse marketplace</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {screens.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-foreground">
              Recent screens
            </h2>
            <Link
              href="/owner/screens"
              className="text-sm text-primary hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-3">
            {recentScreens.map((screen) => {
              const online = isOnline(screen.lastSeenAt, cutoff);
              const thumb = screen.images[0]?.imageUrl ?? screen.defaultImageUrl;
              return (
                <Card
                  key={screen.id}
                  className="border-input bg-card"
                >
                  <CardContent className="flex flex-wrap items-center gap-4 p-4">
                    <div className="device-card-image relative h-14 w-20 shrink-0 overflow-hidden rounded-md border border-input">
                      <Image
                        src={resolveImageUrl(thumb)}
                        alt={screen.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground">{screen.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {screen.locationLabel}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={approvalBadgeVariant(screen.approvalStatus)}>
                        {approvalLabel(screen.approvalStatus)}
                      </Badge>
                      <Badge variant={screen.status === "ACTIVE" ? "success" : "secondary"}>
                        {screen.status}
                      </Badge>
                      <Badge variant={online ? "success" : "secondary"}>
                        {online ? "Online" : "Offline"}
                      </Badge>
                      <span className="text-sm font-semibold text-foreground">
                        ₹{screen.slotDayPrice}/day
                      </span>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/owner/screens/${screen.id}/edit`}>Edit</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-input bg-card/50">
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4 text-sm">
              <span className="text-muted-foreground">
                Network: {onlineScreens.length} online · {offlineCount} offline
              </span>
              <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-secondary sm:w-48">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${onlinePct}%` }}
                />
              </div>
              <span className="font-medium text-foreground">{onlinePct}% uptime</span>
            </CardContent>
          </Card>
        </section>
      )}

      {screens.length === 0 && apiOnline && (
        <Card className="border-dashed border-input bg-card/50">
          <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
            <Monitor className="h-10 w-10 text-muted-foreground" />
            <div>
              <p className="font-medium text-foreground">No screens yet</p>
              <p className="text-sm text-muted-foreground">
                Add your first screen to appear on the DOOH marketplace.
              </p>
            </div>
            <Button asChild>
              <Link href="/owner/screens/new">Add your first screen</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
