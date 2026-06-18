import {
  Building2,
  Dumbbell,
  Hotel,
  ShoppingBag,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { SectionHeading } from "@/components/landing/SectionHeading";
import shared from "@/components/landing/styles/shared.module.css";
import venue from "@/components/landing/styles/venue.module.css";
import { cn } from "@/lib/utils";

const VENUES = [
  { icon: UtensilsCrossed, label: "Cafés & restaurants", desc: "High dwell time" },
  { icon: Dumbbell, label: "Gyms & fitness", desc: "Repeat footfall" },
  { icon: ShoppingBag, label: "Retail stores", desc: "Purchase intent" },
  { icon: Building2, label: "Co-working", desc: "Professional audience" },
  { icon: Hotel, label: "Hotels & lobbies", desc: "Premium visibility" },
  { icon: Store, label: "Malls & cinemas", desc: "Mass reach" },
];

export function LandingTrustBar() {
  return (
    <section className={cn(shared.sectionReadable, "space-y-7 sm:space-y-10")}>
      <SectionHeading
        eyebrow="Venues"
        title="Trusted across high-footfall venues"
        description="Reach audiences where they eat, work out, shop, and spend time every day."
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {VENUES.map((item) => (
          <article key={item.label} className={cn(venue.card, "group")}>
            <div className={venue.shine} aria-hidden />
            <div className="relative z-[1] flex items-start gap-4">
              <span className={venue.icon}>
                <item.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                  {item.label}
                </p>
                <p className={cn(shared.readableMuted, "mt-1 text-sm")}>
                  {item.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
