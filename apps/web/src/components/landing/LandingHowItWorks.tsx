import { PremiumCard } from "@/components/landing/PremiumCard";
import { SectionHeading } from "@/components/landing/SectionHeading";
import shared from "@/components/landing/styles/shared.module.css";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    title: "Browse live screens",
    description:
      "Explore screens by city and venue type. Filter by location and check real-time online status.",
  },
  {
    step: "02",
    title: "Book your slot",
    description:
      "Select dates, upload your creative, and pay. Each screen runs a 60-second loop with 6 slots.",
  },
  {
    step: "03",
    title: "Go live",
    description:
      "After admin approval, your ad plays on venue screens. Track status from your advertiser dashboard.",
  },
];

export function LandingHowItWorks() {
  return (
    <section id="how-it-works" className={cn(shared.sectionReadable, "space-y-8 sm:space-y-12")}>
      <SectionHeading
        eyebrow="How it works"
        title="From browse to broadcast in three steps"
        description="Simple workflow designed for advertisers and venue owners alike."
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {STEPS.map((item) => (
          <PremiumCard key={item.step} as="article" className="p-4 sm:p-6">
            <span className="inline-flex rounded-lg border border-[color-mix(in_srgb,var(--tracle-primary)_20%,var(--input))] bg-[color-mix(in_srgb,var(--tracle-primary)_8%,var(--card))] px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-[var(--tracle-primary)] sm:px-2.5 sm:py-1 sm:text-xs sm:tracking-[0.18em]">
              Step {item.step}
            </span>
            <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground sm:mt-4 sm:text-xl">
              {item.title}
            </h3>
            <p className={cn(shared.readableMuted, "mt-1.5 text-xs leading-relaxed sm:mt-2 sm:text-sm")}>
              {item.description}
            </p>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
}
