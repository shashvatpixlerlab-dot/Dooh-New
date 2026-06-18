import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return updateSession(request);
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
    "/ownern",
  ],
};
