import Link from "next/link";
import { Monitor, Radio, Sparkles, IndianRupee } from "lucide-react";
import { DeviceCard } from "@/components/DeviceCard";
import { api } from "@/lib/api";
import { deriveCity, getCitiesFromDevices } from "@/lib/marketplace-utils";
import type { MarketplaceDevice } from "@/lib/types";
import { MarketplaceHeroActions } from "@/components/marketplace/MarketplaceHeroActions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city } = await searchParams;

  let devices: MarketplaceDevice[] = [];
  try {
    devices = await api<MarketplaceDevice[]>("/marketplace/devices");
  } catch {
    devices = [];
  }

  const cities = getCitiesFromDevices(devices);
  const filtered = city
    ? devices.filter((d) => deriveCity(d.locationLabel) === city)
    : devices;

  const onlineCount = filtered.filter((d) => d.isOnline).length;
  const minPrice =
    filtered.length > 0 ? Math.min(...filtered.map((d) => d.slotDayPrice)) : 0;

  const stats = [
    {
      label: city ? "In location" : "Screens",
      value: String(filtered.length),
      icon: Monitor,
    },
    {
      label: "Online now",
      value: String(onlineCount),
      icon: Radio,
    },
    {
      label: "Per day / slot",
      value: minPrice > 0 ? `₹${minPrice}+` : "—",
      icon: IndianRupee,
    },
  ];

  return (
    <div className="space-y-12 pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-input bg-linear-to-br from-card via-background to-primary/10 px-6 py-12 sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="border-input bg-secondary px-3 py-1 text-foreground"
            >
              <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
              Digital Out-of-Home Marketplace
            </Badge>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Put your brand on{" "}
              <span className="bg-linear-to-r from-primary to-violet-400 bg-clip-text text-transparent">
                premium venue screens
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Book a 10-second slot on café, gym, and retail screens. Your creative
              plays once per 60-second loop — simple pricing, real locations.
            </p>
            <MarketplaceHeroActions />
          </div>

          <div className="grid gap-3 sm:grid-cols-1">
            {[
              { icon: "60s", title: "60-second loop", desc: "Continuous playback all day" },
              { icon: "6", title: "6 slots per screen", desc: "10 seconds each, auto-assigned" },
              { icon: "₹", title: "Flat daily pricing", desc: "No CPM — pay per slot per day" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-input bg-secondary/50 p-4 backdrop-blur-sm transition hover:border-primary/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/20">
                  {item.icon}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl border border-input bg-card p-5 shadow-sm"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <stat.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Filters + grid */}
      <section id="screens" className="space-y-6">
        {cities.length > 0 && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Available screens
              </h2>
              <p className="text-sm text-muted-foreground">
                {filtered.length} screen{filtered.length !== 1 ? "s" : ""}
                {city ? ` in ${city}` : " across all locations"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                  !city
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-input text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                All
              </Link>
              {cities.map((c) => (
                <Link
                  key={c}
                  href={`/?city=${encodeURIComponent(c)}`}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                    city === c
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-input text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-input bg-card/50 px-6 py-16 text-center">
            <p className="text-muted-foreground">
              {devices.length === 0
                ? "No live screens available. Ensure the API is running and devices are seeded."
                : "No screens in this location."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((d) => (
              <DeviceCard key={d.id} device={d} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
