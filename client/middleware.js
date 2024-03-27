import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";
import * as jose from "jose";

export async function middleware(req) {
  try {
    const res = NextResponse.next();
    const accessToken = getCookie("access_token", { res, req });

    if (!accessToken) {
      return NextResponse.redirect(new URL("/auth?s=login", req.url));
    }

    const pathname = req.nextUrl.pathname;
    console.log(pathname);
    if (pathname.includes("/auth")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    const secret = process.env.JWT_KEY;

    if (!secret) {
      console.error("Error checking authentication:", error);

      return NextResponse.redirect(new URL("/error", req.url));
    }

    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jose.jwtVerify(accessToken, secretKey);

    if (payload.id) {
      return NextResponse.next();
    }
  } catch (error) {
    console.error("Error checking authentication:", error);

    return NextResponse.redirect(new URL("/error", req.url));
  }
}

export const config = {
  matcher: ["/about", "/auth"],
};
