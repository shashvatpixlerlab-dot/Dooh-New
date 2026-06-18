"use client";

import { ScrollToSectionLink } from "@/components/landing/ScrollToSectionLink";
import navbar from "@/components/landing/styles/navbar.module.css";
import { MARKETPLACE_NAV_LINKS } from "@/lib/marketplace-nav";
import { useLandingActiveSection } from "@/lib/use-landing-active-section";
import { cn } from "@/lib/utils";

export function MarketplaceNavLinks() {
  const activeSection = useLandingActiveSection();

  return (
    <nav className="flex items-center gap-0.5" aria-label="Main navigation">
      {MARKETPLACE_NAV_LINKS.map((link) => {
        const isActive = activeSection === link.section;

        return (
          <ScrollToSectionLink
            key={link.section}
            section={link.section}
            className={cn(navbar.navLink, isActive && navbar.navLinkActive)}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </ScrollToSectionLink>
        );
      })}
    </nav>
  );
}
