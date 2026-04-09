/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { UserRoles } from "./roles/roles";

const ADMIN_ROUTES = ["/dashboard"];
const USER_ROUTES = ["/profile"];
const PRIVATE_ROUTES = [
  "/events/:path*",
  "/events/event-details/:id",
  "/events/event-details",
  "/pay",
  "/event-pass",
  "/payment-failed",
  "/payment-success",
  "/user-info",
];

const PUBLIC_ROUTES = ["/", "/login", "/register"];

// HELPER — decode JWT
function getTokenPayload(request: NextRequest) {
  const token = request.cookies.get("festiko_token")?.value;

  if (!token) return null;

  try {
    return jwt.decode(token) as any;
  } catch {
    return null;
  }
}

// HELPER — route matcher
function matchesRoute(path: string, routes: string[]) {
  return routes.some((route) => path === route || path.startsWith(route + "/"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicRoute = matchesRoute(pathname, PUBLIC_ROUTES);
  const isAdminRoute = matchesRoute(pathname, ADMIN_ROUTES);
  const isUserRoute = matchesRoute(pathname, USER_ROUTES);
  const isPrivateRoute = matchesRoute(pathname, PRIVATE_ROUTES);

  // Allow public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Get user from cookie
  const payload = getTokenPayload(request);

  // Not logged in → redirect to login
  if (!payload && (isAdminRoute || isUserRoute || isPrivateRoute)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If somehow not matched but also not public → allow
  if (!payload) {
    return NextResponse.next();
  }

  const role = payload.role as string;

  // Admin trying to access USER routes
  if (isUserRoute && role === UserRoles.ADMIN) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // User trying to access ADMIN routes
  if (isAdminRoute && role !== UserRoles.ADMIN) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // Everything else allowed
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
