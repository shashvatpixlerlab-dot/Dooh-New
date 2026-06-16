import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  ADVERTISER_COOKIE,
  OWNER_COOKIE,
} from "./session";

const COOKIE_OPTS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 8 * 60 * 60,
};

const CLEAR = { ...COOKIE_OPTS, maxAge: 0 };

export function setAuthCookie(
  response: NextResponse,
  role: "ADMIN" | "SCREEN_OWNER" | "ADVERTISER",
  token: string
) {
  response.cookies.set(ADMIN_COOKIE, "", CLEAR);
  response.cookies.set(OWNER_COOKIE, "", CLEAR);
  response.cookies.set(ADVERTISER_COOKIE, "", CLEAR);

  if (role === "ADMIN") {
    response.cookies.set(ADMIN_COOKIE, token, COOKIE_OPTS);
  } else if (role === "SCREEN_OWNER") {
    response.cookies.set(OWNER_COOKIE, token, COOKIE_OPTS);
  } else {
    response.cookies.set(ADVERTISER_COOKIE, token, COOKIE_OPTS);
  }
}

export function clearAuthCookies(response: NextResponse) {
  response.cookies.set(ADMIN_COOKIE, "", CLEAR);
  response.cookies.set(OWNER_COOKIE, "", CLEAR);
  response.cookies.set(ADVERTISER_COOKIE, "", CLEAR);
}
