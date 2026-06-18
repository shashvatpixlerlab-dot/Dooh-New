import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ScrollToSectionLink } from "@/components/landing/ScrollToSectionLink";
import navbar from "@/components/landing/styles/navbar.module.css";
import { getAuthSession, getRoleNav } from "@/lib/auth-session";
import { LANDING_SECTIONS } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

export async function MarketplaceFooter() {
  const auth = await getAuthSession();
  const roleNav = auth ? getRoleNav(auth.role) : null;

  return (
    <footer className={navbar.footer}>
      <div className={navbar.footerInner}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <BrandLogo
              href="/"
              markClassName={navbar.footerBrandMark}
              titleClassName="text-[var(--footer-fg)]"
              subtitleClassName="text-[var(--footer-muted)]"
            />
            <p className={cn(navbar.footerText, "max-w-xs text-sm")}>
              Book premium venue screens with flat daily pricing. 60s loop, 6
              slots, 10 seconds each.
            </p>
          </div>

          <div>
            <p className={navbar.footerHeading}>Product</p>
            <ul className={cn(navbar.footerText, "mt-4 space-y-3 text-sm")}>
              <li>
                <ScrollToSectionLink
                  section={LANDING_SECTIONS.screens}
                  className={navbar.footerLink}
                >
                  Browse screens
                </ScrollToSectionLink>
              </li>
              <li>
                <ScrollToSectionLink
                  section={LANDING_SECTIONS.features}
                  className={navbar.footerLink}
                >
                  Features
                </ScrollToSectionLink>
              </li>
              <li>
                <ScrollToSectionLink
                  section={LANDING_SECTIONS.howItWorks}
                  className={navbar.footerLink}
                >
                  How it works
                </ScrollToSectionLink>
              </li>
            </ul>
          </div>

          <div>
            <p className={navbar.footerHeading}>Account</p>
            <ul className={cn(navbar.footerText, "mt-4 space-y-3 text-sm")}>
              {auth && roleNav ? (
                <li>
                  <Link href={roleNav.dashboardPath} className={navbar.footerLink}>
                    {roleNav.dashboardLabel}
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link href="/login" className={navbar.footerLink}>
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" className={navbar.footerLink}>
                      Sign up
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link href="/signup?role=SCREEN_OWNER" className={navbar.footerLink}>
                  List your screen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={navbar.footerHeading}>Platform</p>
            <ul className={cn(navbar.footerText, "mt-4 space-y-3 text-sm")}>
              <li>60-second playback loop</li>
              <li>6 slots per screen</li>
              <li className={navbar.footerHighlight}>Live screen status</li>
            </ul>
          </div>
        </div>

        <div
          className={cn(
            navbar.footerText,
            navbar.footerDivider,
            "mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm sm:flex-row"
          )}
        >
          <p>© {new Date().getFullYear()} DOOH Network. All rights reserved.</p>
          <p>Flat daily pricing · No CPM</p>
        </div>
      </div>
    </footer>
  );
}
