"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function DeviceStatusBadge({
  isOnline,
  isLive,
  className,
}: {
  isOnline: boolean;
  isLive: boolean;
  className?: string;
}) {
  if (!isOnline) {
    return (
      <Badge variant="danger" className={cn("gap-1.5", className)}>
        <span className="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden />
        Offline
      </Badge>
    );
  }

  if (isLive) {
    return (
      <Badge variant="success" className={cn("gap-1.5", className)}>
        <span
          className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_var(--success-glow)] animate-pulse"
          aria-hidden
        />
        Live
      </Badge>
    );
  }

  return (
    <Badge variant="success" className={cn("gap-1.5", className)}>
      <span
        className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_var(--success-glow)]"
        aria-hidden
      />
      Online
    </Badge>
  );
}
