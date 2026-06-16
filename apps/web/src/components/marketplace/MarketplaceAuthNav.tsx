import Link from "next/link";
import { getAuthSession, getRoleNav } from "@/lib/auth-session";
import { MarketplaceLogout } from "@/components/marketplace/MarketplaceLogout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Landing navbar only: Log in, or dashboard + log out when signed in. */
export async function MarketplaceAuthNav({ className }: { className?: string }) {
  const auth = await getAuthSession();

  if (!auth) {
    return (
      <Button asChild size="sm" className={className}>
        <Link href="/login" className="text-primary-foreground">
          Log in
        </Link>
      </Button>
    );
  }

  const roleNav = getRoleNav(auth.role);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button asChild size="sm">
        <Link href={roleNav.dashboardPath} className="text-primary-foreground">
          {roleNav.dashboardLabel}
        </Link>
      </Button>
      <MarketplaceLogout />
    </div>
  );
}
