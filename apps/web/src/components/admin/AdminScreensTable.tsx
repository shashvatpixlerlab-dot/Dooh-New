"use client";

import { ScreenApprovalActions } from "@/components/admin/ScreenApprovalActions";
import { ScreenTableThumb } from "@/components/owner/ScreenTableThumb";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  approvalBadgeVariant,
  approvalLabel,
} from "@/lib/owner-screen-utils";
import type { AdminScreen } from "@/lib/types";

function formatPrice(value: string | number) {
  const n = Number(value);
  return Number.isFinite(n) ? (Number.isInteger(n) ? n : n.toFixed(2)) : value;
}

export function AdminScreensTable({ screens }: { screens: AdminScreen[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-input bg-secondary/50 hover:bg-secondary/50">
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Screen
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Owner venue
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Location
          </TableHead>
          <TableHead className="hidden text-xs font-semibold uppercase tracking-wide text-muted-foreground md:table-cell">
            Resolution
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Price/day
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Approval
          </TableHead>
          <TableHead className="w-[120px] text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {screens.map((screen) => {
          const thumb = screen.images[0]?.imageUrl ?? screen.defaultImageUrl;
          const orientation = screen.orientation ?? "landscape";

          return (
            <TableRow
              key={screen.id}
              className="group border-b border-input/50 transition-colors last:border-0 hover:bg-secondary/30"
            >
              <TableCell className="py-4">
                <div className="flex items-center gap-3.5">
                  <ScreenTableThumb
                    src={thumb}
                    alt={screen.name}
                    showOnlineIndicator={false}
                  />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-foreground">{screen.name}</p>
                    <p className="text-xs capitalize text-muted-foreground">{orientation}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="min-w-0 max-w-[200px]">
                  <p className="truncate font-medium text-foreground">{screen.venue.name}</p>
                  <p
                    className="truncate text-xs text-muted-foreground"
                    title={screen.venue.contactEmail}
                  >
                    {screen.venue.contactEmail}
                  </p>
                </div>
              </TableCell>
              <TableCell className="max-w-[180px]">
                <p className="truncate text-sm text-muted-foreground" title={screen.locationLabel}>
                  {screen.locationLabel}
                </p>
              </TableCell>
              <TableCell className="hidden tabular-nums text-sm text-muted-foreground md:table-cell">
                {screen.resolution}
              </TableCell>
              <TableCell className="font-semibold tabular-nums text-foreground">
                ₹{formatPrice(screen.slotDayPrice)}
              </TableCell>
              <TableCell>
                <Badge variant={approvalBadgeVariant(screen.approvalStatus)}>
                  {approvalLabel(screen.approvalStatus)}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <ScreenApprovalActions screenId={screen.id} stacked />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
