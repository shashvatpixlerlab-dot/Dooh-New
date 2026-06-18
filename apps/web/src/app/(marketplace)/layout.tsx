import { Suspense } from "react";
import { AmbientPageLighting } from "@/components/landing/AmbientPageLighting";
import { BackToTop } from "@/components/landing/BackToTop";
import { LandingSectionOnLoad } from "@/components/landing/LandingSectionOnLoad";
import shared from "@/components/landing/styles/shared.module.css";
import navbar from "@/components/landing/styles/navbar.module.css";
import Script from "next/script";
import { MarketplaceHeader } from "@/components/marketplace/MarketplaceHeader";
import { MarketplaceFooter } from "@/components/marketplace/MarketplaceFooter";
import { cn } from "@/lib/utils";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn(shared.shell, "relative flex min-h-screen flex-col overflow-x-hidden")}>
      <Suspense fallback={null}>
        <LandingSectionOnLoad />
      </Suspense>
      <AmbientPageLighting />
      <MarketplaceHeader />
      <main
        className={cn(
          navbar.main,
          "relative z-[1] mx-auto w-full min-w-0 max-w-7xl flex-1 px-4 pb-8 sm:px-6 sm:pb-14 lg:px-8"
        )}
      >
        {children}
      </main>
      <MarketplaceFooter />
      <BackToTop />
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
