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

// Helper untuk normalisasi path — hapus UUID dan trailing slash
function normalizeRoute(path: string): string {
  return path.replace(/\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/, "").replace(/\/$/, "");
}

export async function middleware(req: NextRequest) {
  const urlPath = req.nextUrl.pathname;
  const route = normalizeRoute(urlPath);
  const token = req.cookies.get("authToken")?.value || null;

  console.log("📢 Middleware Executing for:", urlPath);
  console.log("🔎 Normalized Route:", route);
  console.log("🔑 Token:", token);

  const userRole = await getUserRole(token);
  console.log("👤 Fetched User Role:", userRole);

  // Kalau sudah login dan akses "/", arahkan ke dashboard
  if (route === "/" && userRole) {
    console.log("🔄 Already logged in, redirecting to /dashboard");
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Kalau tidak ada token (belum login), redirect ke halaman login
  if (!userRole) {
    if (route !== "/") {
      console.warn("⛔ No token, redirecting to login");
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // Cek akses berdasarkan rolePermissions
  if (route in rolePermissions) {
    const allowedRoles = rolePermissions[route];
    if (!allowedRoles.includes(userRole)) {
      console.warn(`⛔ Role "${userRole}" tidak punya akses ke ${route}, redirect ke login`);
      return NextResponse.redirect(new URL("/", req.url));
    }
    console.log(`✅ Role "${userRole}" punya akses ke ${route}`);
  } else {
    // Kalau route tidak terdaftar, anggap tidak punya akses dan redirect ke login
    console.warn(`⛔ Route ${route} tidak terdaftar di rolePermissions, redirect ke login`);
    return NextResponse.redirect(new URL("/", req.url));
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
