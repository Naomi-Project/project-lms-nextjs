import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ message: "Token is required" }, { status: 400 });
  }

  const response = NextResponse.json({ message: "Cookie set successfully" });

  // Set cookies dengan HttpOnly dan Secure agar tidak bisa diakses dari JavaScript
  response.cookies.set({
    name: "authToken",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "strict",
    // maxAge: 60 * 60 * 24, // 1 hari
    maxAge: 30 * 24 * 60 * 60, // 1 bulan
  });

  return response;
}
