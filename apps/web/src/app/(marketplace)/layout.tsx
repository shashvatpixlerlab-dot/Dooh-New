import Script from "next/script";
import { MarketplaceHeader } from "@/components/marketplace/MarketplaceHeader";
import { MarketplaceFooter } from "@/components/marketplace/MarketplaceFooter";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketplace-shell relative flex min-h-screen flex-col bg-background">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--primary) 12%, transparent), transparent 40%), radial-gradient(circle at 80% 0%, color-mix(in srgb, #8b5cf6 8%, transparent), transparent 35%)",
        }}
      />
      <MarketplaceHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <MarketplaceFooter />
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
