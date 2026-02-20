"use client";

import { LANG_COOKIE_CONFIG } from "@/config/cookies";
import { AcceptedLanguages, LanguageContextProps } from "@/types/language";
import { createContext, ReactNode } from "react";
import { LANG_DICTIONARY } from "@/locales";
import { useRouter } from "next/navigation";

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({
  currentLanguage,
  children,
}: {
  currentLanguage: AcceptedLanguages;
  children: ReactNode;
}) {
  const router = useRouter();

  const setCurrentLanguage = (newLang: AcceptedLanguages) => {
    if (newLang === currentLanguage) return;
    document.cookie = `${LANG_COOKIE_CONFIG.name}=${newLang}; ${LANG_COOKIE_CONFIG.options};`;
    router.refresh();
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setCurrentLanguage, currentData: LANG_DICTIONARY[currentLanguage] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
