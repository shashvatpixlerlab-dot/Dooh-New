import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ADMIN_COOKIE,
  ADVERTISER_COOKIE,
  OWNER_COOKIE,
  verifyAdminToken,
  verifyAdvertiserToken,
  verifyOwnerToken,
} from "@/lib/middleware-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const redirect = (path: string) =>
    NextResponse.redirect(new URL(path, request.url), 303);

  if (pathname === "/ownern") {
    return redirect("/owner");
  }

  const adminToken = request.cookies.get(ADMIN_COOKIE)?.value;
  const ownerToken = request.cookies.get(OWNER_COOKIE)?.value;
  const advertiserToken = request.cookies.get(ADVERTISER_COOKIE)?.value;
  const adminSession = await verifyAdminToken(adminToken);
  const ownerSession = await verifyOwnerToken(ownerToken);
  const advertiserSession = await verifyAdvertiserToken(advertiserToken);

  if (pathname === "/login" || pathname === "/signup") {
    if (adminSession) return redirect("/admin");
    if (ownerSession) return redirect("/owner");
    if (advertiserSession) return redirect("/advertiser");
    return NextResponse.next();
  }

  if (pathname === "/admin/login") {
    if (adminSession) return redirect("/admin");
    return redirect("/login");
  }

  if (pathname.startsWith("/admin")) {
    if (ownerSession && !adminSession) return redirect("/owner");
    if (advertiserSession && !adminSession) return redirect("/advertiser");
    if (!adminSession) return redirect("/login");
    return NextResponse.next();
  }

  if (pathname.startsWith("/owner")) {
    if (adminSession && !ownerSession) return redirect("/admin");
    if (advertiserSession && !ownerSession) return redirect("/advertiser");
    if (!ownerSession) return redirect("/login");
    return NextResponse.next();
  }

  if (pathname.startsWith("/advertiser")) {
    if (adminSession && !advertiserSession) return redirect("/admin");
    if (ownerSession && !advertiserSession) return redirect("/owner");
    if (!advertiserSession) return redirect("/login");
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/owner",
    "/owner/:path*",
    "/advertiser",
    "/advertiser/:path*",
    "/login",
    "/signup",
  ],
};
