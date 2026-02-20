import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const options: Partial<ResponseCookie> = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
};

export const LANG_COOKIE_CONFIG = {
  name: "lang",
  options,
  defaultValue: "pt-br",
} as const;
