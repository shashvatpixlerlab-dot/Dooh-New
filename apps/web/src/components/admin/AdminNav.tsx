"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard", icon: "▣" },
  { href: "/admin/bookings", label: "Bookings", icon: "☰" },
  { href: "/admin/screens", label: "Screen approvals", icon: "▦" },
  { href: "/admin/health", label: "Screen Health", icon: "◉" },
  { href: "/admin/venues", label: "Venues", icon: "⌂" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="admin-sidebar-nav">
      {links.map((link) => {
        const active =
          link.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`admin-nav-link ${active ? "admin-nav-active" : ""}`}
          >
            <span className="admin-nav-icon" aria-hidden>
              {link.icon}
            </span>
            <span className="admin-nav-label">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
