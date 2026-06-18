import { ArrowRight, Sparkles } from "lucide-react";
import { SectionBadge } from "@/components/landing/SectionHeading";
import { MarketplaceHeroActions } from "@/components/marketplace/MarketplaceHeroActions";
import shared from "@/components/landing/styles/shared.module.css";
import hero from "@/components/landing/styles/hero.module.css";
import { cn } from "@/lib/utils";

function heroStatusMessage(liveCount: number, onlineCount: number) {
  if (liveCount > 0) {
    return `${liveCount} screen${liveCount !== 1 ? "s" : ""} playing campaigns right now`;
  }
  if (onlineCount > 0) {
    return `${onlineCount} screen${onlineCount !== 1 ? "s" : ""} online and reporting status`;
  }
  return "No screens connected right now";
}

export function LandingHero({
  liveCount,
  onlineCount,
}: {
  liveCount: number;
  onlineCount: number;
}) {
  const showPulse = liveCount > 0 || onlineCount > 0;

  return (
    <section
      className={cn(
        hero.hero,
        "relative mx-auto max-w-4xl px-1 pb-2 pt-2 text-center sm:px-2 sm:pb-4 sm:pt-6 lg:pt-8"
      )}
    >
      <SectionBadge className="mb-5 gap-1.5 px-3 py-1 text-[0.6875rem] normal-case tracking-[0.06em] sm:mb-8 sm:px-4 sm:py-1.5 sm:text-[0.8125rem]">
        <Sparkles className="h-3 w-3 text-primary sm:h-3.5 sm:w-3.5" aria-hidden />
        Digital Out-of-Home Marketplace
      </SectionBadge>

      <h1 className="text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl sm:leading-[1.08] lg:text-5xl xl:text-[3.75rem]">
        Turn venue screens into{" "}
        <span className={shared.brandGradientText}>your next billboard</span>
      </h1>

      <p
        className={cn(
          shared.readableMuted,
          "mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:mt-8 sm:text-lg lg:text-xl"
        )}
      >
        Book 10-second slots on café, gym, and retail screens across India.
        Flat daily pricing, live availability, and instant booking — no CPM
        complexity.
      </p>

      <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 px-1 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 sm:px-0">
        <MarketplaceHeroActions />
      </div>

      <div
        className={cn(
          shared.readableMuted,
          "mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-2 text-xs sm:mt-12 sm:text-sm"
        )}
      >
        <span
          className={cn(
            hero.statusDot,
            showPulse ? hero.statusDotPulse : hero.statusDotIdle
          )}
        />
        <span className={cn("text-center", showPulse && hero.statusLive)}>
          {heroStatusMessage(liveCount, onlineCount)}
        </span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
      </div>
    </section>
  );
}
