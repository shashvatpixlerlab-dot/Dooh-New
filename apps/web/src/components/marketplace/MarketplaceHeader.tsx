import { BrandLogo } from "@/components/BrandLogo";
import { MarketplaceAuthNav } from "@/components/marketplace/MarketplaceAuthNav";
import { MarketplaceHeaderShell } from "@/components/marketplace/MarketplaceHeaderShell";
import { MarketplaceNavLinks } from "@/components/marketplace/MarketplaceNavLinks";
import { getAuthSession, getRoleNav } from "@/lib/auth-session";

export async function MarketplaceHeader() {
  const auth = await getAuthSession();
  const roleNav = auth ? getRoleNav(auth.role) : null;

  const mobileAuth = auth && roleNav
    ? {
        type: "user" as const,
        dashboardPath: roleNav.dashboardPath,
        dashboardLabel: roleNav.dashboardLabel,
      }
    : { type: "guest" as const };

  return (
    <MarketplaceHeaderShell
      logo={<BrandLogo href="/" size="sm" />}
      nav={<MarketplaceNavLinks />}
      actions={<MarketplaceAuthNav />}
      mobileAuth={mobileAuth}
    />
  );
}
