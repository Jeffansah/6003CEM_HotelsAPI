import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export async function middleware(req) {
  try {
    const res = NextResponse.next();
    const accessToken = getCookie("access_token", { res, req });

    if (!accessToken) {
      return NextResponse.redirect(new URL("/auth?s=login", req.url));
    } else {
      return NextResponse.next();
    }
  } catch (error) {
    console.error("Error checking authentication:", error);

    return NextResponse.redirect(new URL("/error", req.url));
  }
}

export const config = {
  matcher: ["/about", "/booking"],
};
