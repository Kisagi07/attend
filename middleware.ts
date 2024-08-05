import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/[...nextauth]/authConfig";

export default auth(async function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const isApiRoute = pathname.startsWith("/api");
  const isLoginRoute = pathname === "/api/login";
  const isNextAuthRoute = pathname.startsWith("/api/auth");

  if (!req.auth && !isLoginRoute && !isNextAuthRoute) {
    if (isApiRoute) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } else {
      return NextResponse.redirect(new URL("/login", origin));
    }
  }

  if (req.auth && !req.auth.user.id && !isLoginRoute) {
    if (isApiRoute) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } else {
      return NextResponse.redirect(new URL("/login", origin));
    }
  }

  // if in /home but the user is admin then redirect to dashboard
  if (pathname.startsWith("/home") && req.auth?.user.role === "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // if in /dashboard but the user is not admin then redirect to home
  if (pathname.startsWith("/dashboard") && req.auth?.user.role !== "admin") {
    return NextResponse.redirect(new URL("/home", req.url));
  }
});

export const config = {
  matcher: ["/home/:path*", "/dashboard/:path*", "/api/:path*"],
};
