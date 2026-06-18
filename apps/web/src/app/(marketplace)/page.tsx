import { Suspense } from "react";
import { api } from "@/lib/api";
import { deriveCity, getCitiesFromDevices } from "@/lib/marketplace-utils";
import type { MarketplaceStats } from "@/lib/marketplace-stats";
import type { MarketplaceDevice } from "@/lib/types";
import { LandingCta } from "@/components/landing/LandingCta";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingHowItWorks } from "@/components/landing/LandingHowItWorks";
import { LandingScreens } from "@/components/landing/LandingScreens";
import { LandingStats } from "@/components/landing/LandingStats";
import { LandingTrustBar } from "@/components/landing/LandingTrustBar";
import shared from "@/components/landing/styles/shared.module.css";
import { cn } from "@/lib/utils";

const EMPTY_STATS: MarketplaceStats = {
  screensOnline: 0,
  screensLive: 0,
  liveCampaigns: 0,
  revenueGenerated: 0,
  activeVenues: 0,
};

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city } = await searchParams;

  let devices: MarketplaceDevice[] = [];
  let stats: MarketplaceStats = EMPTY_STATS;

  try {
    [devices, stats] = await Promise.all([
      api<MarketplaceDevice[]>("/marketplace/devices"),
      api<MarketplaceStats>("/marketplace/stats"),
    ]);
  } catch {
    try {
      devices = await api<MarketplaceDevice[]>("/marketplace/devices");
    } catch {
      devices = [];
    }
  }

  const cities = getCitiesFromDevices(devices);
  const filtered = city
    ? devices.filter((d) => deriveCity(d.locationLabel) === city)
    : devices;

  const onlineCount = filtered.filter((d) => d.isOnline).length;
  const liveCount = filtered.filter((d) => d.isLive).length;

  if (stats.screensOnline === 0 && onlineCount > 0) {
    stats = { ...stats, screensOnline: onlineCount };
  }
  if (stats.screensLive === 0 && liveCount > 0) {
    stats = { ...stats, screensLive: liveCount };
  }

  return (
    <div className="min-w-0 space-y-14 pb-6 sm:space-y-20 sm:pb-8 lg:space-y-32">
      <LandingHero liveCount={liveCount} onlineCount={onlineCount} />
      <LandingStats stats={stats} />
      <LandingTrustBar />
      <LandingFeatures />
      <LandingHowItWorks />
      <Suspense
        fallback={
          <section
            id="screens"
            className={cn(
              shared.sectionReadable,
              "min-h-[320px] animate-pulse rounded-2xl bg-secondary/25"
            )}
            aria-hidden
          />
        }
      >
        <LandingScreens
          allDevices={devices}
          cities={cities}
          initialCity={city}
        />
      </Suspense>
      <LandingCta />
    </div>
  );
}
