import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

export default auth(async function middleware(req) {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  if (req.auth && !req.auth.user.id && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  // if in /home but the user is admin then redirect to dashboard
  if (req.nextUrl.pathname.startsWith("/home") && req.auth?.user.role === "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // if in /dashboard but the user is not admin then redirect to home
  if (req.nextUrl.pathname.startsWith("/dashboard") && req.auth?.user.role !== "admin") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // check if maintenance_mode is on or not
});

export const config = {
  matcher: ["/home/:path*", "/dashboard/:path*"],
};
