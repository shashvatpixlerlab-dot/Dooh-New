"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  MarketplaceMobileMenu,
  type MobileMenuAuth,
} from "@/components/marketplace/MarketplaceMobileMenu";
import navbar from "@/components/landing/styles/navbar.module.css";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

export function MarketplaceHeaderShell({
  logo,
  nav,
  actions,
  mobileAuth,
}: {
  logo: React.ReactNode;
  nav: React.ReactNode;
  actions: React.ReactNode;
  mobileAuth: MobileMenuAuth;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header
      className={cn(navbar.header, scrolled && navbar.headerScrolled)}
    >
      <div className={navbar.innerBar}>
        <div className={navbar.logoSlot}>{logo}</div>

        <div className={navbar.desktopNav}>{nav}</div>

        <div className={navbar.actionsSlot}>
          <div className={navbar.desktopActions}>{actions}</div>

          <button
            type="button"
            className={navbar.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="marketplace-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <MarketplaceMobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        auth={mobileAuth}
      />
    </header>
  );
}
