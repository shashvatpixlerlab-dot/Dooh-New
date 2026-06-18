import {
  Activity,
  CalendarCheck,
  IndianRupee,
  LayoutDashboard,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { PremiumCard, PremiumCardIcon } from "@/components/landing/PremiumCard";
import { SectionHeading } from "@/components/landing/SectionHeading";
import shared from "@/components/landing/styles/shared.module.css";
import features from "@/components/landing/styles/features.module.css";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: CalendarCheck,
    title: "Book in minutes",
    description:
      "Browse available screens, pick your dates, and reserve a slot instantly — no sales calls, paperwork, or long-term contracts.",
  },
  {
    icon: Radio,
    title: "Live screen status",
    description:
      "See which screens are online before you book. Only reserve venues that are actively broadcasting and ready to play your creative.",
  },
  {
    icon: IndianRupee,
    title: "Flat daily pricing",
    description:
      "Transparent per-slot, per-day rates on every listing. No CPM calculations or hidden fees — the price you see is the price you pay.",
  },
  {
    icon: LayoutDashboard,
    title: "Owner dashboards",
    description:
      "Venue owners manage screens, upload creatives, review bookings, and track revenue from a single, purpose-built control panel.",
  },
  {
    icon: ShieldCheck,
    title: "Creative moderation",
    description:
      "Every ad is reviewed by platform admins before it goes live, keeping venue brands safe and ensuring quality across the network.",
  },
  {
    icon: Activity,
    title: "Device heartbeat monitoring",
    description:
      "Screen players send real-time heartbeats so advertisers and owners always know which devices are online, offline, or need attention.",
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className={cn(shared.sectionReadable, "space-y-8 sm:space-y-12")}>
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to run DOOH campaigns"
        description="A modern platform built for advertisers who want speed and venue owners who want control."
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-[1.375rem]">
        {FEATURES.map((feature) => (
          <PremiumCard
            key={feature.title}
            as="article"
            className={cn(features.featureCard, "p-4 sm:p-6")}
          >
            <PremiumCardIcon>
              <feature.icon className="h-5 w-5" />
            </PremiumCardIcon>
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {feature.title}
            </h3>
            <p
              className={cn(
                shared.readableMuted,
                "mt-1.5 text-xs leading-relaxed sm:mt-2 sm:text-sm"
              )}
            >
              {feature.description}
            </p>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
}
