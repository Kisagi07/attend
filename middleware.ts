import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export default withAuth(async function middleware(req) {
  // if in /home but the user is admin then redirect to dashboard
  if (
    req.nextUrl.pathname === "/home" &&
    req.nextauth.token?.role === "admin"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // if in /dashboard but the user is not admin then redirect to home
  if (
    req.nextUrl.pathname === "/dashboard" &&
    req.nextauth.token?.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // check if maintenance_mode is on or not
});

export const config = {
  matcher: ["/home", "/dashboard/:path*"],
};
