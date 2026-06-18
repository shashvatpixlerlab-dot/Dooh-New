import { AmbientPageLighting } from "@/components/landing/AmbientPageLighting";
import { BrandLogo } from "@/components/BrandLogo";
import auth from "@/components/auth/styles/auth.module.css";
import shared from "@/components/landing/styles/shared.module.css";
import { Check, Monitor, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const BENEFITS = [
  "10-second slots in a 60-second loop",
  "Flat daily pricing — no CPM surprises",
  "Live screen status and instant booking",
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(auth.shell, "auth-shell")}>
      <AmbientPageLighting />

      <aside className={cn(auth.brandAside, shared.glass)}>
        <BrandLogo href="/" />

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-input bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Premium DOOH marketplace
          </div>
          <h1 className={auth.brandTitle}>
            Book screens.{" "}
            <span className={shared.brandGradientText}>Grow your brand.</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Connect with café, gym, and retail venues. Simple daily pricing,
            real locations, and a dashboard built for speed.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-input bg-card">
                  <Check className="h-3 w-3 text-primary" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            className={cn(
              shared.surfaceCard,
              "mt-8 rounded-2xl border border-input bg-card p-4"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-secondary/60 text-primary">
                <Monitor className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">60s loop · 6 slots</p>
                <p className="text-xs text-muted-foreground">Your ad plays every minute</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Trusted by venue owners and advertisers across India.
        </p>
      </aside>

      <div className={auth.formPanel}>
        <div className={auth.formWrap}>{children}</div>
      </div>
    </div>
  );
}
