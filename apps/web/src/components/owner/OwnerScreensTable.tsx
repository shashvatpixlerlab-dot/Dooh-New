"use client";

import { useRouter } from "next/navigation";
import { ScreenActions } from "@/components/owner/ScreenActions";
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
import type { OwnerScreen } from "@/lib/types";

function formatLabel(value: string) {
  return value.charAt(0) + value.slice(1).toLowerCase();
}

export function OwnerScreensTable({
  screens,
  onlineById,
}: {
  screens: OwnerScreen[];
  onlineById: Record<string, boolean>;
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
            Location
          </TableHead>
          <TableHead className="hidden text-xs font-semibold uppercase tracking-wide text-muted-foreground md:table-cell">
            Resolution
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Price/day
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Status
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Approval
          </TableHead>
          <TableHead className="hidden text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:table-cell">
            Online
          </TableHead>
          <TableHead className="w-[72px] text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {screens.map((screen) => {
          const online = onlineById[screen.id] ?? false;
          const thumb = screen.images[0]?.imageUrl ?? screen.defaultImageUrl;
          const editHref = `/owner/screens/${screen.id}/edit`;

          return (
            <TableRow
              key={screen.id}
              className="group cursor-pointer border-b border-input/50 transition-colors last:border-0 hover:bg-secondary/30"
              onClick={() => router.push(editHref)}
            >
              <TableCell className="py-4">
                <div className="flex items-center gap-3.5">
                  <ScreenTableThumb src={thumb} alt={screen.name} online={online} />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-foreground group-hover:text-primary">
                      {screen.name}
                    </p>
                    <p className="text-xs capitalize text-muted-foreground">
                      {screen.orientation}
                    </p>
                  </div>
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
                ₹{screen.slotDayPrice}
              </TableCell>
              <TableCell>
                <Badge variant={screen.status === "ACTIVE" ? "success" : "secondary"}>
                  {formatLabel(screen.status)}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <Badge variant={approvalBadgeVariant(screen.approvalStatus)}>
                    {approvalLabel(screen.approvalStatus)}
                  </Badge>
                  {screen.approvalStatus === "REJECTED" && screen.rejectionReason && (
                    <p
                      className="max-w-[120px] truncate text-xs text-destructive"
                      title={screen.rejectionReason}
                    >
                      {screen.rejectionReason}
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge variant={online ? "success" : "secondary"}>
                  {online ? "Online" : "Offline"}
                </Badge>
              </TableCell>
              <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                <ScreenActions screenId={screen.id} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
