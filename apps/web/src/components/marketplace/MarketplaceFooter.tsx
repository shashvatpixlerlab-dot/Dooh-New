import Link from "next/link";
import { getAuthSession, getRoleNav } from "@/lib/auth-session";

export async function MarketplaceFooter() {
  const auth = await getAuthSession();
  const roleNav = auth ? getRoleNav(auth.role) : null;

  return (
    <footer className="border-t border-input bg-card/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          60s loop · 6 slots · 10s each · Flat daily pricing
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {auth && roleNav ? (
            <Link
              href={roleNav.dashboardPath}
              className="transition hover:text-foreground"
            >
              {roleNav.dashboardLabel}
            </Link>
          ) : (
            <Link href="/login" className="transition hover:text-foreground">
              Log in
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
