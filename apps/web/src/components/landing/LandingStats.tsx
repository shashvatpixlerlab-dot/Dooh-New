import { Building2, IndianRupee, Megaphone, Radio } from "lucide-react";
import type { MarketplaceStats } from "@/lib/marketplace-stats";
import { formatRevenue } from "@/lib/marketplace-stats";
import { SectionHeading } from "@/components/landing/SectionHeading";
import shared from "@/components/landing/styles/shared.module.css";
import metrics from "@/components/landing/styles/metrics.module.css";
import { cn } from "@/lib/utils";

const STAT_CONFIG = [
  {
    key: "screensOnline" as const,
    title: "Screens Online",
    description:
      "Devices connected and sending heartbeats within the configured liveness window.",
    indicator: (stats: MarketplaceStats) =>
      stats.screensLive > 0
        ? `${stats.screensLive} playing campaigns now`
        : "Device connectivity",
    live: (stats: MarketplaceStats) => stats.screensOnline > 0,
    icon: Radio,
    format: (v: number) => String(v),
  },
  {
    key: "liveCampaigns" as const,
    title: "Live Campaigns",
    description: "Advertiser campaigns currently running on booked screen slots.",
    indicator: () => "Active this week",
    live: () => false,
    icon: Megaphone,
    format: (v: number) => String(v),
  },
  {
    key: "revenueGenerated" as const,
    title: "Revenue Generated",
    description:
      "Total marketplace earnings from confirmed bookings and completed campaigns.",
    indicator: () => "All-time platform total",
    live: () => false,
    icon: IndianRupee,
    format: (v: number) => formatRevenue(v),
  },
  {
    key: "activeVenues" as const,
    title: "Active Venues",
    description:
      "Restaurants, gyms, hotels, and other locations listing screens on the marketplace.",
    indicator: () => "Across all categories",
    live: () => false,
    icon: Building2,
    format: (v: number) => String(v),
  },
];

export function LandingStats({ stats }: { stats: MarketplaceStats }) {
  return (
    <section className={cn(shared.sectionReadable, "space-y-7 sm:space-y-10")}>
      <SectionHeading
        eyebrow="Platform metrics"
        title="Real-time network performance"
        description="Live data from screens, campaigns, and venues across the DOOH marketplace."
      />

      <div className="mx-auto grid max-w-[52rem] grid-cols-2 items-stretch gap-3 sm:gap-5 lg:gap-[1.375rem]">
        {STAT_CONFIG.map((stat, index) => {
          const indicator = stat.indicator(stats);
          const isLive = stat.live(stats);

          return (
            <article
              key={stat.key}
              className={cn(metrics.card, "group")}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className={metrics.glow} aria-hidden />
              <div className="relative z-[1] flex h-full flex-col">
                <div className={metrics.header}>
                  <span className={metrics.icon}>
                    <stat.icon className="h-5 w-5" />
                  </span>
                  <div className={metrics.headline}>
                    <p className={metrics.title}>{stat.title}</p>
                    <p className={metrics.value}>
                      {stat.format(stats[stat.key])}
                    </p>
                  </div>
                </div>

                <p className={metrics.description}>{stat.description}</p>

                <p className={cn(metrics.indicator, isLive && metrics.indicatorLive)}>
                  <span
                    className={cn(
                      metrics.indicatorDot,
                      isLive && metrics.indicatorDotLive
                    )}
                    aria-hidden
                  />
                  {indicator}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
