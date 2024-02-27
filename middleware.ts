import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  if (
    req.nextUrl.pathname === "/home" &&
    req.nextauth.token?.role === "admin"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } else if (
    req.nextUrl.pathname.startsWith("/dashboard") &&
    req.nextauth.token?.role === "employee"
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
});

export const config = {
  matcher: ["/home", "/dashboard/:path*"],
};
