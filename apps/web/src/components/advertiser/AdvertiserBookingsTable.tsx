"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  bookingStatusMeta,
  formatBookingAmount,
} from "@/lib/advertiser-booking-utils";
import { formatDateOnly } from "@/lib/marketplace-utils";
import type { AdvertiserBookingListItem } from "@/lib/types";

export function AdvertiserBookingsTable({
  bookings,
}: {
  bookings: AdvertiserBookingListItem[];
}) {
  const router = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-input bg-secondary/50 hover:bg-secondary/50">
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Screen
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Slot
          </TableHead>
          <TableHead className="hidden text-xs font-semibold uppercase tracking-wide text-muted-foreground md:table-cell">
            Dates
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Amount
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Status
          </TableHead>
          <TableHead className="w-[88px] text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => {
          const status = bookingStatusMeta(booking.status);
          const href = `/advertiser/bookings/${booking.id}`;

          return (
            <TableRow
              key={booking.id}
              className="group cursor-pointer border-b border-input/50 transition-colors last:border-0 hover:bg-secondary/30"
              onClick={() => router.push(href)}
            >
              <TableCell className="py-4">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-foreground group-hover:text-primary">
                    {booking.device.name}
                  </p>
                  <p
                    className="truncate text-xs text-muted-foreground"
                    title={booking.device.locationLabel}
                  >
                    {booking.device.locationLabel}
                  </p>
                </div>
              </TableCell>
              <TableCell className="tabular-nums text-sm text-muted-foreground">
                #{booking.slotIndex}
              </TableCell>
              <TableCell className="hidden tabular-nums text-sm text-muted-foreground md:table-cell">
                {formatDateOnly(booking.dateStart)} → {formatDateOnly(booking.dateEnd)}
              </TableCell>
              <TableCell className="font-semibold tabular-nums text-foreground">
                ₹{formatBookingAmount(booking.priceTotal)}
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <Badge variant={status.variant}>{status.label}</Badge>
                  {booking.creative?.rejectionReason && (
                    <p
                      className="max-w-[10rem] truncate text-xs text-destructive"
                      title={booking.creative.rejectionReason}
                    >
                      {booking.creative.rejectionReason}
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                <Button asChild size="sm" variant="ghost" className="gap-1">
                  <Link href={href}>
                    View
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
