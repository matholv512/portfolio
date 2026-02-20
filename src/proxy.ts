import { NextRequest, NextResponse } from "next/server";
import { LANG_COOKIE_CONFIG } from "@/config/cookies";
import { LANG_PARAM_CONFIG } from "./config/params";
import { AcceptedLanguages } from "./types/language";

export default function Proxy(req: NextRequest) {
  const langCookie: AcceptedLanguages | undefined = req.cookies.get(LANG_COOKIE_CONFIG.name)
    ?.value as AcceptedLanguages;
  const langParamName = LANG_PARAM_CONFIG.name;
  const langParam = req.nextUrl.searchParams.get(langParamName);
  const cookieName = LANG_COOKIE_CONFIG.name;
  const defaultLang = LANG_COOKIE_CONFIG.defaultValue;
  const cookieOptions = LANG_COOKIE_CONFIG.options;

  const finalLang = langCookie ?? defaultLang;

  if (!langParam || langParam !== finalLang) {
    const url = new URL(req.url);
    url.searchParams.set(langParamName, finalLang);

    const res = NextResponse.redirect(url);

    if (!langCookie) {
      res.cookies.set(cookieName, finalLang, cookieOptions);
    }

    return res;
  }

  const res = NextResponse.next();

  if (!langCookie) {
    res.cookies.set(cookieName, finalLang, cookieOptions);
  }

  return res;
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
