export type DashboardRole = "admin" | "owner" | "advertiser";

export type NavLinkConfig = {
  href: string;
  label: string;
  icon:
    | "layout-dashboard"
    | "clipboard-list"
    | "monitor-check"
    | "activity"
    | "building"
    | "monitor"
    | "plus-circle"
    | "calendar"
    | "store";
  exact?: boolean;
};

export const DASHBOARD_BRAND: Record<
  DashboardRole,
  { homeHref: string; title: string; subtitle: string }
> = {
  admin: {
    homeHref: "/",
    title: "DOOH Admin",
    subtitle: "Operations console",
  },
  owner: {
    homeHref: "/owner",
    title: "DOOH Owner",
    subtitle: "Screen management",
  },
  advertiser: {
    homeHref: "/advertiser",
    title: "DOOH Advertiser",
    subtitle: "Campaign bookings",
  },
};

export const DASHBOARD_NAV: Record<DashboardRole, NavLinkConfig[]> = {
  admin: [
    { href: "/admin", label: "Dashboard", icon: "layout-dashboard", exact: true },
    { href: "/admin/bookings", label: "Bookings", icon: "clipboard-list" },
    { href: "/admin/screens", label: "Screen approvals", icon: "monitor-check" },
    { href: "/admin/health", label: "Screen health", icon: "activity" },
    { href: "/admin/venues", label: "Venues & devices", icon: "building" },
  ],
  owner: [
    { href: "/owner", label: "Dashboard", icon: "layout-dashboard", exact: true },
    { href: "/owner/screens", label: "My screens", icon: "monitor" },
    { href: "/owner/screens/new", label: "Add screen", icon: "plus-circle" },
  ],
  advertiser: [
    { href: "/advertiser", label: "Dashboard", icon: "layout-dashboard", exact: true },
    { href: "/#screens", label: "Browse screens", icon: "store" },
  ],
};
