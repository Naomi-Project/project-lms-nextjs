import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

console.log("✅ Middleware Loaded"); // Debug 

async function getUserRole(token: string | null): Promise<string | null> {
  console.log("🔄 Fetching User Role...");

  if (!token) {
    console.warn("⚠️ No Authorization Token Found");
    return null;
  }

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Kirim token ke GraphQL
      },
      body: JSON.stringify({
        query: `
          query {
            me {
              id
              name
              username
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
    console.log("🔍 GraphQL Response:", result);

    return result.data?.me?.role || null;
  } catch (error) {
    console.error("❌ Error Fetching GraphQL:", error);
    return null;
  }
}

const rolePermissions: Record<string, string[]> = {
  // default dashboard
  "/dashboard": ["ADMIN", "PRINCIPAL", "STAFF"], 

  // menu for role admin only
  "/dashboard/managers": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/class": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/class/induk/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/class/cabang/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/class/cabang/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/wablast": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/wablast/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/wablast/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/mata-pelajaran": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/mata-pelajaran/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/mata-pelajaran/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/keuangan": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/keuangan/detail": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/keuangan/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/student": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/student/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/student/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/teacher": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/teacher/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/teacher/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/pengumuman": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/pengumuman/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/pengumuman/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/setting-admin": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/setting-admin/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/setting-admin/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/pricing": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/pricing/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/pricing/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/kurikulum": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/kurikulum/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/kurikulum/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/semester": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/semester/create": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/semester/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/profile": ["ADMIN", "PRINCIPAL", "STAFF"], 
  "/managements/manager/profile/edit": ["ADMIN", "PRINCIPAL", "STAFF"], 
  
  // menu for role headoffice or staff and pricincipal only
  "/dashboard/admins": ["STAFF", "ADMIN"], 
  "/managements/admin": ["ADMIN"], 
  "/managements/admin/sekolah": ["ADMIN"], 
  "/managementjs/admin/sekolah/create": ["ADMIN"], 
  "/managements/admin/sekolah/edit": ["ADMIN"], 
  "/managements/admin/sekolah/detail": ["ADMIN"], 
  "/managements/admin/keuangan": ["ADMIN"], 
  "/managements/admin/student": ["ADMIN"], 
  "/managements/admin/teacher": ["ADMIN"], 
  "/managements/admin/pengumuman": ["ADMIN"], 
  "/managements/admin/pengumuman/create": ["ADMIN"], 
  "/managements/admin/library": ["ADMIN"], 
  "/managements/admin/library/create": ["ADMIN"], 
  "/managements/admin/library/edit": ["ADMIN"], 
  "/managements/admin/setting-admin": ["ADMIN"], 
  "/managements/admin/setting-admin/create": ["ADMIN"], 
  "/managements/admin/setting-admin/edit": ["ADMIN"], 
  
  // menu for role teacher only
  "/dashboard/teachers": ["TEACHER"],
  "/managements/teacher": ["TEACHER"],
  "/managements/teacher/tasks-create": ["TEACHER"],
  "/managements/teacher/tasks-detail": ["TEACHER"], 
  "/managements/teacher/nilai": ["TEACHER"], 
  "/managements/teacher/material": ["TEACHER"], 
  "/managements/teacher/material/create": ["TEACHER"], 
  "/managements/teacher/material/edit": ["TEACHER"], 
  "/managements/teacher/material/detail": ["TEACHER"], 
  "/managements/teacher/class": ["TEACHER"], 
  "/managements/teacher/presence": ["TEACHER"], 
  "/managements/teacher/schedule": ["TEACHER"], 
  "/managements/teacher/library": ["TEACHER"], 
  "/managements/teacher/library/create": ["TEACHER"], 
  "/managements/teacher/profile": ["TEACHER"], 
  "/managements/teacher/profile/edit": ["TEACHER"], 
  "/managements/teacher/profile/family-add": ["TEACHER"], 
  
  // menu for role student only
  "/dashboard/students": ["STUDENT"],
  "/managements/student": ["STUDENT"],
  "/managements/student/tasks-detail": ["STUDENT"],
  "/managements/student/material": ["STUDENT"],
  "/managements/student/material/detail": ["STUDENT"],
  "/managements/student/presence": ["STUDENT"],
  "/managements/student/schedule": ["STUDENT"],
  "/managements/student/library": ["STUDENT"],
  "/managements/student/profile": ["STUDENT"],
  "/managements/student/profile/edit": ["STUDENT"],
  "/managements/student/profile/family-add": ["STUDENT"],
  "/managements/student/profile-payment": ["STUDENT"],
  "/managements/student/profile-payment/payments": ["STUDENT"],
  // "/managements/manager/profile/edit": ["STUDENT"],
  "/managements/manager/profile/family-add": ["STUDENT"],
  "/managements/manager/profile-student/edit": ["STUDENT"],
  "/managements/manager/profile-student/family-add": ["STUDENT"],
};


export async function middleware(req: NextRequest) {
  console.log("📢 Middleware Executing for:", req.nextUrl.pathname);

  const token = req.cookies.get("authToken")?.value || null;
  console.log("🔑 Token:", token);

  const userRole = await getUserRole(token);
  console.log("👤 User Role:", userRole);

  let route = req.nextUrl.pathname;
  const uuidRegex = /\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/;
  const alphanumericIdRegex = /\/([a-zA-Z0-9-]+)$/;

  if (uuidRegex.test(route)) {
    route = route.replace(uuidRegex, "");
  } else if (alphanumericIdRegex.test(route) && route.startsWith("/managements/student/profile-payment/payments/")) {
    route = route.replace(alphanumericIdRegex, "");
  }
  console.log("🔎 Normalized Route for Checking:", route);
  
  const referer = req.headers.get("referer");
  console.log("🔙 Previous Page (Referer):", referer);

  if (!userRole && route !== "/") {
      console.warn("⛔ User belum login, redirect ke halaman login");
      return NextResponse.redirect(new URL("/", req.url));
  }

  if (route === "/" && userRole) {
    console.log("🔄 User sudah login, redirect ke 403");
    return NextResponse.redirect(new URL("/403", req.url));
  }

  if (route in rolePermissions) {
    const allowedRoles = rolePermissions[route];

    if (!allowedRoles.includes(userRole ?? '')) {
      console.warn(`⛔ User role "${userRole}" TIDAK BOLEH mengakses ${route}`);
      return NextResponse.redirect(new URL("/303", req.url));
    } else {
      console.log(`✅ User role "${userRole}" DIPERBOLEHKAN mengakses ${route}`);
    }
  } else {
    if (!userRole && route === '/') return NextResponse.next()
    console.warn(`⛔ Tidak ada izin untuk akses: ${route}`);
    return NextResponse.redirect(new URL("/303", req.url));
  }

  console.log(`✅ User "${userRole}" memiliki akses ke ${route}`);
  return NextResponse.next();
}

// path to execute this middleware
export const config = {
  matcher: [
    // auth 
    "/",
    "/dashboard/:path*",

    // administrasi or managers
    "/dashboard/managers/:path*",
    "/managements/manager/:path*",
    
    // headoffice
    "/dashboard/admins/:path*",
    "/managements/admin/:path*",
    
    // teacher 
    "/dashboard/teachers/:path*",
    "/managements/teacher/:path*",

    // student 
    "/dashboard/students/:path*",
    "/managements/student/:path*",
  ],
};
