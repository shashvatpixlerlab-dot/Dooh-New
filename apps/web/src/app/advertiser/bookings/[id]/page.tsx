import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import {
  ArrowLeft,
  CalendarRange,
  ImageIcon,
  MapPin,
  Monitor,
  Wallet,
} from "lucide-react";
import { advertiserApi } from "@/lib/advertiser-api";
import {
  bookingStatusMeta,
  formatBookingAmount,
} from "@/lib/advertiser-booking-utils";
import { resolveImageUrl } from "@/lib/image-url";
import { formatDateOnly } from "@/lib/marketplace-utils";
import type { AdvertiserBookingDetail } from "@/lib/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function DetailTile({
  icon: Icon,
  label,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-input bg-secondary/20 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <div className="mt-1 text-sm font-medium text-foreground">{children}</div>
      </div>
    </div>
  );
}

export default async function AdvertiserBookingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let booking: AdvertiserBookingDetail;
  try {
    booking = await advertiserApi<AdvertiserBookingDetail>(
      `/advertiser/bookings/${id}`
    );
  } catch {
    notFound();
  }

  const status = bookingStatusMeta(booking.status);
  const creativeUrl = booking.creative?.imageUrl
    ? resolveImageUrl(booking.creative.imageUrl)
    : null;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Button asChild variant="ghost" size="sm" className="-ml-2 gap-2 text-muted-foreground">
          <Link href="/advertiser">
            <ArrowLeft className="h-4 w-4" />
            Back to bookings
          </Link>
        </Button>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Booking details
            </h1>
            <p className="font-mono text-xs text-muted-foreground">{booking.id}</p>
          </div>
          <Badge variant={status.variant} className="text-sm">
            {status.label}
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="border-input bg-card shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base">Campaign summary</CardTitle>
              <CardDescription>Screen placement and schedule for this booking.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <DetailTile icon={Monitor} label="Screen">
                <p>{booking.device.name}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs font-normal text-muted-foreground">
                  <MapPin className="h-3 w-3 shrink-0" />
                  {booking.device.locationLabel}
                </p>
              </DetailTile>
              <DetailTile icon={CalendarRange} label="Dates">
                <span className="tabular-nums">
                  {formatDateOnly(booking.dateStart)} → {formatDateOnly(booking.dateEnd)}
                </span>
              </DetailTile>
              <DetailTile icon={ImageIcon} label="Slot">
                Position {booking.slotIndex}
              </DetailTile>
              <DetailTile icon={Wallet} label="Amount">
                <span className="text-lg font-semibold tabular-nums">
                  ₹{formatBookingAmount(booking.priceTotal)}
                </span>
              </DetailTile>
            </CardContent>
          </Card>

          {booking.creative?.rejectionReason && (
            <Alert variant="destructive">
              <AlertTitle>Rejection reason</AlertTitle>
              <AlertDescription>{booking.creative.rejectionReason}</AlertDescription>
            </Alert>
          )}

          {booking.status === "PENDING_APPROVAL" && (
            <Card className="border-amber-500/30 bg-amber-500/5 shadow-sm">
              <CardContent className="py-4 text-sm text-muted-foreground">
                Your creative is queued for admin review. You will be notified once it is
                approved or if changes are required.
              </CardContent>
            </Card>
          )}

          {booking.status === "APPROVED" && (
            <Card className="border-emerald-500/30 bg-emerald-500/5 shadow-sm">
              <CardContent className="py-4 text-sm text-muted-foreground">
                This campaign is approved and scheduled to play on the selected screen during
                your booked dates.
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="border-input bg-card shadow-sm lg:sticky lg:top-8 lg:self-start">
          <CardHeader>
            <CardTitle className="text-base">Creative preview</CardTitle>
            <CardDescription>
              {creativeUrl ? "Uploaded ad creative" : "No creative attached"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {creativeUrl ? (
              <div className="relative aspect-video overflow-hidden rounded-xl border border-input bg-secondary/30">
                <Image
                  src={creativeUrl}
                  alt="Uploaded creative"
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-input bg-secondary/20 text-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">No preview available</p>
              </div>
            )}
            {booking.creative?.moderationStatus && (
              <>
                <Separator className="my-4" />
                <p className="text-xs text-muted-foreground">
                  Moderation:{" "}
                  <span className="font-medium text-foreground">
                    {booking.creative.moderationStatus.replace(/_/g, " ")}
                  </span>
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
