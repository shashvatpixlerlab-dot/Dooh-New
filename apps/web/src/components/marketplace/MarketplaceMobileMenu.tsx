"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ScrollToSectionLink } from "@/components/landing/ScrollToSectionLink";
import { MarketplaceLogout } from "@/components/marketplace/MarketplaceLogout";
import navbar from "@/components/landing/styles/navbar.module.css";
import shared from "@/components/landing/styles/shared.module.css";
import { MARKETPLACE_NAV_LINKS } from "@/lib/marketplace-nav";
import { useLandingActiveSection } from "@/lib/use-landing-active-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type MobileMenuAuth =
  | { type: "guest" }
  | { type: "user"; dashboardPath: string; dashboardLabel: string };

export function MarketplaceMobileMenu({
  open,
  onClose,
  auth,
}: {
  open: boolean;
  onClose: () => void;
  auth: MobileMenuAuth;
}) {
  const activeSection = useLandingActiveSection();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        className={cn(navbar.menuOverlay, open && navbar.menuOverlayOpen)}
        onClick={onClose}
      />

      <div
        id="marketplace-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(navbar.menuPanel, open && navbar.menuPanelOpen)}
      >
        <nav className={navbar.menuNav} aria-label="Mobile navigation">
          {MARKETPLACE_NAV_LINKS.map((link) => {
            const isActive = activeSection === link.section;

            return (
              <ScrollToSectionLink
                key={link.section}
                section={link.section}
                className={cn(navbar.menuLink, isActive && navbar.menuLinkActive)}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </ScrollToSectionLink>
            );
          })}
        </nav>

        <div className={navbar.menuActions}>
          {auth.type === "guest" ? (
            <>
              <Button asChild className={cn(shared.btnTraclePrimary, shared.btnResponsive, "w-full")}>
                <Link href="/login" onClick={onClose}>
                  Log in
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={cn(shared.btnTracleOutline, shared.btnResponsive, "w-full")}
              >
                <Link href="/signup" onClick={onClose}>
                  Get started free
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild className={cn(shared.btnTraclePrimary, shared.btnResponsive, "w-full")}>
                <Link href={auth.dashboardPath} onClick={onClose}>
                  {auth.dashboardLabel}
                </Link>
              </Button>
              <MarketplaceLogout className={cn(shared.btnResponsive, "w-full")} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
