import { LANG_COOKIE_CONFIG } from "@/config/cookies";
import { LANG_PARAM_CONFIG } from "@/config/params";
import { AcceptedLanguages } from "@/types/language";
import { cookies } from "next/headers";

export async function getCurrentLang() {
  const cookieStore = await cookies();
  const lang =
    (cookieStore.get(LANG_PARAM_CONFIG.name)?.value as AcceptedLanguages) ??
    (LANG_COOKIE_CONFIG.defaultValue as AcceptedLanguages);
  return lang;
}
