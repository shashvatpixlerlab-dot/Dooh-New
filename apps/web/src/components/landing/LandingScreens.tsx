"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DeviceCard } from "@/components/DeviceCard";
import { PremiumCard } from "@/components/landing/PremiumCard";
import { SectionHeading } from "@/components/landing/SectionHeading";
import shared from "@/components/landing/styles/shared.module.css";
import marketplace from "@/components/landing/styles/marketplace.module.css";
import { deriveCity } from "@/lib/marketplace-utils";
import type { MarketplaceDevice } from "@/lib/types";
import { cn } from "@/lib/utils";

function filterByCity(devices: MarketplaceDevice[], city?: string) {
  if (!city) return devices;
  return devices.filter((d) => deriveCity(d.locationLabel) === city);
}

export function LandingScreens({
  allDevices,
  cities,
  initialCity,
}: {
  allDevices: MarketplaceDevice[];
  cities: string[];
  initialCity?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const urlCity = searchParams.get("city") ?? initialCity ?? undefined;
  const [city, setCity] = useState(urlCity);

  useEffect(() => {
    setCity(urlCity);
  }, [urlCity]);

  const devices = useMemo(
    () => filterByCity(allDevices, city),
    [allDevices, city]
  );

  function applyCity(next?: string) {
    setCity(next);
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (next) params.set("city", next);
      else params.delete("city");
      const query = params.toString();
      router.replace(query ? `/?${query}` : "/", { scroll: false });
    });
  }

  const pillClass = (active: boolean) =>
    cn(
      "rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 sm:px-4 sm:py-1.5 sm:text-sm",
      active
        ? "border-primary bg-primary text-primary-foreground shadow-[0_4px_18px_var(--tracle-glow-soft)]"
        : cn(
            shared.readableMuted,
            "border-input bg-card hover:border-primary/30 hover:text-primary"
          )
    );

  return (
    <section id="screens" className={cn(shared.sectionReadable, "space-y-7 sm:space-y-10")}>
      <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <SectionHeading
          align="left"
          eyebrow="Marketplace"
          title="Available screens"
          description={`${devices.length} connected screen${devices.length !== 1 ? "s" : ""}${city ? ` in ${city}` : " ready to book"} — only devices reporting live heartbeats are listed`}
          className="max-w-xl"
        />

        {cities.length > 0 ? (
          <div
            className="flex min-w-0 flex-wrap gap-1.5 sm:gap-2"
            role="group"
            aria-label="Filter by location"
          >
            <button
              type="button"
              onClick={() => applyCity(undefined)}
              className={pillClass(!city)}
              aria-pressed={!city}
            >
              All
            </button>
            {cities.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => applyCity(c)}
                className={pillClass(city === c)}
                aria-pressed={city === c}
              >
                {c}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div
        className={cn(
          marketplace.gridShell,
          isPending && marketplace.gridShellPending
        )}
        aria-busy={isPending}
      >
        {devices.length === 0 ? (
          <PremiumCard className="rounded-2xl border border-dashed border-input px-4 py-12 text-center sm:px-6 sm:py-20">
            <p className={shared.readableMuted}>
              {allDevices.length === 0
                ? "No screens are online right now. Only connected devices appear here — offline screens are not listed for booking."
                : "No connected screens in this location."}
            </p>
          </PremiumCard>
        ) : (
          <div
            className={cn(
              marketplace.grid,
              "grid grid-cols-2 items-stretch gap-3 sm:gap-6 xl:grid-cols-3 xl:gap-[1.625rem]"
            )}
          >
            {devices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
