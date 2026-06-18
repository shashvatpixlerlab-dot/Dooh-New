import Image from "next/image";
import Link from "next/link";
import { MapPin, Monitor } from "lucide-react";
import { DeviceStatusBadge } from "@/components/marketplace/DeviceStatusBadge";
import shared from "@/components/landing/styles/shared.module.css";
import marketplace from "@/components/landing/styles/marketplace.module.css";
import { resolveImageUrl } from "@/lib/image-url";
import type { MarketplaceDevice } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DeviceCard({ device }: { device: MarketplaceDevice }) {
  return (
    <article className={cn(marketplace.deviceCard, "group")}>
      <div className={marketplace.deviceCardShine} aria-hidden />

      <div className={marketplace.media}>
        <Image
          src={resolveImageUrl(device.defaultImageUrl)}
          alt={device.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={marketplace.image}
          unoptimized
        />
        <div className={marketplace.overlay} aria-hidden />
        <div className={marketplace.status}>
          <DeviceStatusBadge
            isOnline={device.isOnline}
            isLive={device.isLive}
            className="backdrop-blur-md px-2 py-0.5 text-[0.6875rem] shadow-sm sm:px-2.5 sm:py-1 sm:text-xs"
          />
        </div>
        <div className={marketplace.caption}>
          <p className={marketplace.venue}>{device.venueName}</p>
          <h3 className={marketplace.title}>{device.name}</h3>
        </div>
      </div>

      <div className={marketplace.body}>
        <div className={marketplace.location}>
          <MapPin
            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
            aria-hidden
          />
          <span>{device.locationLabel}</span>
        </div>

        <div className={marketplace.meta}>
          <div>
            <p className={marketplace.priceLabel}>From</p>
            <p className={marketplace.price}>
              ₹{device.slotDayPrice}
              <span> /day</span>
            </p>
          </div>
          <div className={marketplace.spec}>
            <Monitor className="h-3.5 w-3.5 text-primary" aria-hidden />
            {device.resolution}
          </div>
        </div>

        <div className={marketplace.action}>
          <Button asChild className={cn(shared.btnTraclePrimary, "w-full")}>
            <Link href={`/devices/${device.id}`}>View & Book</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
