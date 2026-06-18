import Image from "next/image";
import { resolveImageUrl } from "@/lib/image-url";
import { cn } from "@/lib/utils";

export function ScreenTableThumb({
  src,
  alt,
  online,
  showOnlineIndicator = true,
}: {
  src: string;
  alt: string;
  online?: boolean;
  showOnlineIndicator?: boolean;
}) {
  return (
    <div className="relative shrink-0">
      <div
        className={cn(
          "relative h-12 w-12 overflow-hidden rounded-lg border border-input bg-secondary shadow-sm",
          "ring-1 ring-black/5"
        )}
      >
        <Image src={resolveImageUrl(src)} alt={alt} fill className="object-cover" unoptimized />
      </div>
      {showOnlineIndicator && (
        <span
          className={cn(
            "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card",
            online ? "bg-emerald-500" : "bg-muted-foreground/40"
          )}
          title={online ? "Online" : "Offline"}
          aria-hidden
        />
      )}
    </div>
  );
}
