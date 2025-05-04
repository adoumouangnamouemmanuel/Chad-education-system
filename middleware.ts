import type { UserRole } from "@/lib/types";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  // Check if the path is a dashboard path
  if (path.startsWith("/dashboard")) {
    // Extract the role from the path
    const pathParts = path.split("/");
    const routeRole = pathParts.length > 2 ? pathParts[2] : "";

    // Get the user role from cookie
    const userRole = request.cookies.get("userRole")?.value as
      | UserRole
      | undefined;

    // If no user role is set, redirect to login
    if (!userRole) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    // If no specific dashboard is requested, redirect to user's dashboard
    if (path === "/dashboard") {
      url.pathname = `/dashboard/${userRole}`;
      return NextResponse.redirect(url);
    }

    // If the user is trying to access a dashboard that doesn't match their role
    if (routeRole && routeRole !== userRole) {
      // Role-based access control logic
      const hasAccess =
        userRole === "minister" || // Minister can access all
        (userRole === "inspector" &&
          ["director", "teacher", "student"].includes(routeRole)) || // Inspector can access director, teacher, student
        (userRole === "director" && ["teacher", "student"].includes(routeRole)); // Director can access teacher, student

      // If the user is not authorized, redirect to their dashboard
      if (!hasAccess) {
        url.pathname = `/dashboard/${userRole}`;
        return NextResponse.redirect(url);
      }
    }

    // Store the current path in a cookie for server-side access
    const response = NextResponse.next();
    response.cookies.set("currentPath", path, { path: "/" });
    return response;
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"],
};
