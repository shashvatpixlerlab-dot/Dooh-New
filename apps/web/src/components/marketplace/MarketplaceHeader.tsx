import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MarketplaceAuthNav } from "@/components/marketplace/MarketplaceAuthNav";

export function MarketplaceHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-input bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-lg text-primary ring-1 ring-primary/25 transition group-hover:bg-primary/25">
            ◉
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            DOOH Network
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="theme-toggle" />
          <MarketplaceAuthNav />
        </div>
      </div>
    </header>
  );
}
