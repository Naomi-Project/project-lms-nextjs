import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("🚪 Logging out...");

  const response = NextResponse.json({ message: "Logout successful" });

  // Hapus cookie dengan mengatur `maxAge` menjadi 0
  response.cookies.set({
    name: "authToken",
    value: "",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Hanya secure di production
    sameSite: "strict",
    maxAge: 0, // Menghapus cookie segera
  });

  console.log("✅ Cookie removed, user logged out.");
  return response;
}
