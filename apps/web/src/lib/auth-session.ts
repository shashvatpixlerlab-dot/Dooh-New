import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  ADVERTISER_COOKIE,
  OWNER_COOKIE,
  verifyAdminToken,
  verifyAdvertiserToken,
  verifyOwnerToken,
} from "./session";

export type AuthRole = "ADMIN" | "SCREEN_OWNER" | "ADVERTISER";

export type AuthSession =
  | { role: "ADMIN"; email: string; dashboardPath: "/admin" }
  | { role: "SCREEN_OWNER"; email: string; dashboardPath: "/owner" }
  | { role: "ADVERTISER"; email: string; dashboardPath: "/advertiser" };

export type RoleNavLink = { href: string; label: string };

export type RoleNav = {
  roleLabel: string;
  dashboardLabel: string;
  dashboardPath: string;
  links: RoleNavLink[];
};

export function dashboardPathForRole(
  role: string
): "/admin" | "/owner" | "/advertiser" {
  if (role === "ADMIN") return "/admin";
  if (role === "SCREEN_OWNER") return "/owner";
  return "/advertiser";
}

export function getRoleNav(role: AuthRole): RoleNav {
  switch (role) {
    case "ADMIN":
      return {
        roleLabel: "Admin",
        dashboardLabel: "Admin dashboard",
        dashboardPath: "/admin",
        links: [
          { href: "/admin/bookings", label: "Bookings" },
          { href: "/admin/screens", label: "Screen approvals" },
          { href: "/admin/health", label: "Screen health" },
          { href: "/admin/venues", label: "Venues" },
        ],
      };
    case "SCREEN_OWNER":
      return {
        roleLabel: "Screen Owner",
        dashboardLabel: "Owner dashboard",
        dashboardPath: "/owner",
        links: [
          { href: "/owner/screens", label: "My screens" },
          { href: "/owner/screens/new", label: "Add screen" },
        ],
      };
    case "ADVERTISER":
      return {
        roleLabel: "Advertiser",
        dashboardLabel: "Advertiser dashboard",
        dashboardPath: "/advertiser",
        links: [
          { href: "/advertiser", label: "My bookings" },
          { href: "/#screens", label: "Browse screens" },
        ],
      };
  }
}

export async function getAuthSession(): Promise<AuthSession | null> {
  const cookieStore = await cookies();
  const adminSession = await verifyAdminToken(
    cookieStore.get(ADMIN_COOKIE)?.value
  );
  if (adminSession) {
    return {
      role: "ADMIN",
      email: adminSession.email,
      dashboardPath: "/admin",
    };
  }

  const ownerSession = await verifyOwnerToken(
    cookieStore.get(OWNER_COOKIE)?.value
  );
  if (ownerSession) {
    return {
      role: "SCREEN_OWNER",
      email: ownerSession.email,
      dashboardPath: "/owner",
    };
  }

  const advertiserSession = await verifyAdvertiserToken(
    cookieStore.get(ADVERTISER_COOKIE)?.value
  );
  if (advertiserSession) {
    return {
      role: "ADVERTISER",
      email: advertiserSession.email,
      dashboardPath: "/advertiser",
    };
  }

  return null;
}
