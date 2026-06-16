import Image from "next/image";
import Link from "next/link";
import { MapPin, Monitor } from "lucide-react";
import { resolveImageUrl } from "@/lib/image-url";
import type { MarketplaceDevice } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function DeviceCard({ device }: { device: MarketplaceDevice }) {
  return (
    <Card className="group overflow-hidden border-input bg-card shadow-lg transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="device-card-image relative aspect-[16/10] overflow-hidden">
        <Image
          src={resolveImageUrl(device.defaultImageUrl)}
          alt={device.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-3 top-3">
          <Badge
            variant={device.isOnline ? "success" : "secondary"}
            className="backdrop-blur-sm"
          >
            {device.isOnline ? "Live" : "Offline"}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70">
            {device.venueName}
          </p>
          <h3 className="text-lg font-semibold text-white">{device.name}</h3>
        </div>
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{device.locationLabel}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              From
            </p>
            <p className="text-xl font-bold text-foreground">
              ₹{device.slotDayPrice}
              <span className="text-sm font-normal text-muted-foreground">
                /day
              </span>
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Monitor className="h-3.5 w-3.5" />
            {device.resolution}
          </div>
        </div>

        {device.isOnline ? (
          <Button asChild className="w-full">
            <Link href={`/devices/${device.id}`}>View & Book</Link>
          </Button>
        ) : (
          <Button className="w-full" variant="secondary" disabled>
            Currently offline
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
