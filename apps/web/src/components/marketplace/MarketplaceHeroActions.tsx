import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth-session";

/** Hero CTAs for the landing page — not dashboard navigation. */
export async function MarketplaceHeroActions() {
  const auth = await getAuthSession();

  if (!auth) {
    return (
      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href="#screens" className="text-primary-foreground">
            Browse screens
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/signup">List your screen</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg">
        <a href="#screens" className="text-primary-foreground">
          Browse screens
        </a>
      </Button>
    </div>
  );
}
