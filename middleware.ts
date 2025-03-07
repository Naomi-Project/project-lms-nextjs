import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

console.log("✅ Middleware Loaded"); // Debug

async function getUserRole(token: string | null): Promise<string | null> {
  if (!token) {
    console.warn("⚠️ No Authorization Token Found");
    return null;
  }

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
          query {
            me {
              role
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      console.error("❌ GraphQL Fetch Failed", response.status);
      return null;
    }

    const result = await response.json();
    return result.data?.me?.role || null;
  } catch (error) {
    console.error("❌ Error Fetching GraphQL:", error);
    return null;
  }
}

const rolePermissions: Record<string, string[]> = {
  // Admin, Principal, Staff routes
  "/dashboard": ["ADMIN", "PRINCIPAL", "STAFF"],
  "/dashboard/managers": ["ADMIN", "PRINCIPAL", "STAFF"],
  "/managements/manager": ["ADMIN", "PRINCIPAL", "STAFF"],
  "/dashboard/admins": ["STAFF"],
  "/managements/admin": ["STAFF"],

  // Teacher routes
  "/dashboard/teachers": ["TEACHER"],
  "/managements/teacher": ["TEACHER"],

  // Student routes
  "/dashboard/students": ["STUDENT"],
  "/managements/student": ["STUDENT"],
};

// Helper to normalize route — remove UUIDs and trailing slashes
function normalizeRoute(path: string): string {
  return path.replace(/\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/, "").replace(/\/$/, "");
}

export async function middleware(req: NextRequest) {
  const urlPath = req.nextUrl.pathname;
  const route = normalizeRoute(urlPath);
  const referer = req.headers.get("referer");
  const token = req.cookies.get("authToken")?.value || null;

  console.log("📢 Middleware Executing for:", urlPath);
  console.log("🔎 Normalized Route:", route);
  console.log("🔙 Previous Page (Referer):", referer);
  console.log("🔑 Token:", token);

  const userRole = await getUserRole(token);
  console.log("👤 Fetched User Role:", userRole);

  // Redirect if accessing root ("/") while logged in
  if (route === "/" && userRole) {
    console.log("🔄 Already logged in, redirecting to /403");
    return NextResponse.redirect(new URL("/403", req.url));
  }

  // Redirect unauthenticated users (no role and not at root)
  if (!userRole) {
    if (route !== "/") {
      console.warn("⛔ Unauthenticated, redirecting to login");
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // Permission check — only check routes that have permissions defined
  if (route in rolePermissions) {
    const allowedRoles = rolePermissions[route];
    if (!allowedRoles.includes(userRole)) {
      console.warn(`⛔ Access Denied — Role "${userRole}" cannot access ${route}`);
      return NextResponse.redirect(new URL("/403", req.url));
    }
    console.log(`✅ Access Granted — Role "${userRole}" allowed for ${route}`);
  } else {
    // Deny access to undefined routes
    console.warn(`⛔ No permissions defined for: ${route}`);
    return NextResponse.redirect(new URL("/403", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/", 
    "/dashboard/:path*", 
    "/dashboard/managers/:path*", 
    "/managements/manager/:path*",
    "/dashboard/admins/:path*", 
    "/managements/admin/:path*",
    "/dashboard/teachers/:path*", 
    "/managements/teacher/:path*",
    "/dashboard/students/:path*", 
    "/managements/student/:path*",
  ],
};
