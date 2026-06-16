import Link from "next/link";
import { CalendarDays, IndianRupee, Megaphone, Store } from "lucide-react";
import { AdvertiserBookingsTable } from "@/components/advertiser/AdvertiserBookingsTable";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { advertiserApi } from "@/lib/advertiser-api";
import { formatBookingAmount } from "@/lib/advertiser-booking-utils";
import type { AdvertiserBookingListItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const ACTIVE_STATUSES = ["HELD", "AWAITING_PAYMENT", "PENDING_APPROVAL", "APPROVED"];

export default async function AdvertiserDashboardPage() {
  let bookings: AdvertiserBookingListItem[] = [];
  let apiOnline = true;

  try {
    bookings = await advertiserApi<AdvertiserBookingListItem[]>("/advertiser/bookings");
  } catch {
    apiOnline = false;
    bookings = [];
  }

  const activeCount = bookings.filter((b) => ACTIVE_STATUSES.includes(b.status)).length;
  const totalSpend = bookings.reduce((sum, b) => sum + Number(b.priceTotal), 0);

  const stats = [
    {
      label: "Total bookings",
      value: String(bookings.length),
      icon: CalendarDays,
      highlight: false,
    },
    {
      label: "Active campaigns",
      value: String(activeCount),
      icon: Megaphone,
      highlight: activeCount > 0,
    },
    {
      label: "Total spend",
      value: totalSpend > 0 ? `₹${formatBookingAmount(totalSpend)}` : "—",
      icon: IndianRupee,
      highlight: false,
    },
  ];

  return (
    <div className="space-y-8">
      <DashboardPageHeader
        title="Dashboard"
        description="Track your screen bookings and campaign status."
        action={
          !apiOnline ? (
            <Badge variant="secondary" className="text-amber-600">
              API offline
            </Badge>
          ) : (
            <Button asChild>
              <Link href="/#screens" className="gap-2 text-primary-foreground">
                <Store className="h-4 w-4" />
                Book a screen
              </Link>
            </Button>
          )
        }
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className={cn(
              "overflow-hidden border-input bg-card shadow-sm transition-shadow hover:shadow-md",
              stat.highlight && "border-primary/30 ring-1 ring-primary/15"
            )}
          >
            <CardContent className="flex items-center gap-4 p-5">
              <div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                  stat.highlight ? "bg-primary/15" : "bg-secondary"
                )}
              >
                <stat.icon
                  className={cn(
                    "h-5 w-5",
                    stat.highlight ? "text-primary" : "text-muted-foreground"
                  )}
                />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="overflow-hidden border-input bg-card shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between border-b border-input bg-secondary/30 px-6 py-4">
          <div className="space-y-0.5">
            <CardTitle className="text-base font-semibold">My bookings</CardTitle>
            <p className="text-xs text-muted-foreground">
              Click a row to view details · {bookings.length} total
            </p>
          </div>
          <Button asChild size="sm" variant="outline">
            <Link href="/#screens">Browse screens</Link>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          {bookings.length === 0 ? (
            <div className="flex flex-col items-center gap-4 px-6 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                <Megaphone className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">No bookings yet</p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Browse available screens on the marketplace and place your first ad campaign.
                </p>
              </div>
              <Button asChild>
                <Link href="/#screens" className="text-primary-foreground">
                  Browse screens
                </Link>
              </Button>
            </div>
          ) : (
            <AdvertiserBookingsTable bookings={bookings} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
