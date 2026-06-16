import Image from "next/image";
import Link from "next/link";
import { BookingActions } from "@/components/BookingActions";
import { MarkRefundedButton } from "@/components/admin/MarkRefundedButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CancelBookingButton } from "@/components/admin/CancelBookingButton";
import { resolveImageUrl } from "@/lib/image-url";
import { formatDateOnly, isBookingLiveToday } from "@/lib/marketplace-utils";
import { cn } from "@/lib/utils";

export type AdminBookingRow = {
  id: string;
  status: string;
  slotIndex: number;
  priceTotal: string;
  dateStart?: string;
  dateEnd?: string;
  advertiser: { email: string; name: string };
  device: { name: string; venue: { name: string } };
  creative?: { imageUrl: string; moderationStatus: string; rejectionReason?: string | null };
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function AdvertiserCell({
  booking,
  showLiveIndicator,
}: {
  booking: AdminBookingRow;
  showLiveIndicator?: boolean;
}) {
  const isLive =
    showLiveIndicator &&
    isBookingLiveToday(booking.dateStart, booking.dateEnd);

  return (
    <TableCell>
      <div className="flex items-center gap-3">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
          {initials(booking.advertiser.name)}
          {isLive ? (
            <span
              className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3"
              title="Live on screen today"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-card bg-emerald-500" />
            </span>
          ) : null}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{booking.advertiser.name}</p>
            {isLive ? (
              <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600 ">
                Live
              </span>
            ) : <span className="text-[10px] font-semibold uppercase tracking-wide text-red-600">
                offline
              </span>}
          </div>
          <p className="text-xs text-muted-foreground">{booking.advertiser.email}</p>
        </div>
      </div>
    </TableCell>
  );
}

function DeviceCell({ booking }: { booking: AdminBookingRow }) {
  return (
    <TableCell>
      <p className="font-medium">{booking.device.name}</p>
      <p className="text-xs text-muted-foreground">{booking.device.venue.name}</p>
    </TableCell>
  );
}

function CreativeCell({ booking }: { booking: AdminBookingRow }) {
  return (
    <TableCell className="w-20">
      {booking.creative ? (
        <a
          href={resolveImageUrl(booking.creative.imageUrl)}
          target="_blank"
          rel="noreferrer"
          className="relative block h-10 w-16 shrink-0 overflow-hidden rounded-md border border-input bg-secondary"
        >
          <Image
            src={resolveImageUrl(booking.creative.imageUrl)}
            alt="Creative"
            fill
            sizes="64px"
            className="object-cover object-center"
            unoptimized
          />
        </a>
      ) : (
        "—"
      )}
    </TableCell>
  );
}

export function AdminBookingsTabs({
  tab,
  pendingCount,
  approvedCount,
  refundCount,
}: {
  tab: "pending" | "approved" | "refunds";
  pendingCount: number;
  approvedCount: number;
  refundCount: number;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={tab === "pending" ? "default" : "outline"}
        size="sm"
        asChild
      >
        <Link href="/admin/bookings">Pending review ({pendingCount})</Link>
      </Button>
      <Button
        variant={tab === "approved" ? "default" : "outline"}
        size="sm"
        asChild
      >
        <Link href="/admin/bookings?tab=approved">
          Approved / live ({approvedCount})
        </Link>
      </Button>
      <Button
        variant={tab === "refunds" ? "default" : "outline"}
        size="sm"
        asChild
      >
        <Link href="/admin/bookings?tab=refunds">Awaiting refund ({refundCount})</Link>
      </Button>
    </div>
  );
}

export function PendingBookingsTable({
  bookings,
  adminEmail,
}: {
  bookings: AdminBookingRow[];
  adminEmail: string;
}) {
  if (bookings.length === 0) {
    return (
      <Card className="border-dashed border-input bg-card/50">
        <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
          <p className="font-medium text-foreground">Queue is empty</p>
          <p className="text-sm text-muted-foreground">
            New paid bookings will appear here for creative review.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-input bg-card shadow-sm">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/40 hover:bg-secondary/40">
              <TableHead>Advertiser</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Slot</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Creative</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((b) => (
              <TableRow key={b.id}>
                <AdvertiserCell booking={b} />
                <DeviceCell booking={b} />
                <TableCell>
                  <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    Slot {b.slotIndex}
                  </span>
                </TableCell>
                <TableCell className="font-semibold">₹{b.priceTotal}</TableCell>
                <CreativeCell booking={b} />
                <TableCell className="overflow-visible">
                  <BookingActions bookingId={b.id} adminEmail={adminEmail} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function ApprovedBookingsTable({
  bookings,
  adminEmail,
}: {
  bookings: AdminBookingRow[];
  adminEmail: string;
}) {
  if (bookings.length === 0) {
    return (
      <Card className="border-dashed border-input bg-card/50">
        <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
          <p className="font-medium text-foreground">No approved bookings</p>
          <p className="text-sm text-muted-foreground">
            Approved ads that are scheduled or live on screens will appear here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-input bg-card shadow-sm">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/40 hover:bg-secondary/40">
              <TableHead>Advertiser</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Slot</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Creative</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((b) => (
              <TableRow key={b.id}>
                <AdvertiserCell booking={b} showLiveIndicator />
                <DeviceCell booking={b} />
                <TableCell className="text-sm">
                  {b.dateStart && b.dateEnd ? (
                    <>
                      {formatDateOnly(b.dateStart)} → {formatDateOnly(b.dateEnd)}
                    </>
                  ) : (
                    "—"
                  )}
                </TableCell>
                <TableCell>
                  <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                    Slot {b.slotIndex}
                  </span>
                </TableCell>
                <TableCell className="font-semibold">₹{b.priceTotal}</TableCell>
                <CreativeCell booking={b} />
                <TableCell>
                  <CancelBookingButton bookingId={b.id} adminEmail={adminEmail} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function RefundBookingsTable({
  bookings,
  adminEmail,
}: {
  bookings: AdminBookingRow[];
  adminEmail: string;
}) {
  if (bookings.length === 0) {
    return (
      <Card className="border-dashed border-input bg-card/50">
        <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
          <p className="font-medium text-foreground">Nothing awaiting refund</p>
          <p className="text-sm text-muted-foreground">
            Rejected or cancelled bookings that need a Razorpay refund will appear here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-input bg-card shadow-sm">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/40 hover:bg-secondary/40">
              <TableHead>Advertiser</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((b) => (
              <TableRow key={b.id}>
                <AdvertiserCell booking={b} />
                <DeviceCell booking={b} />
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "font-normal",
                      b.status === "REJECTED" && "text-destructive"
                    )}
                  >
                    {b.status === "REJECTED" ? "Rejected" : "Cancelled"}
                  </Badge>
                </TableCell>
                <TableCell className="font-semibold">₹{b.priceTotal}</TableCell>
                <TableCell className="max-w-xs text-sm text-muted-foreground">
                  {b.creative?.rejectionReason ?? "—"}
                </TableCell>
                <TableCell>
                  <MarkRefundedButton bookingId={b.id} adminEmail={adminEmail} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
