import { PT_BR } from "@/locales/pt-br";

export type AcceptedLanguages = "pt-br" | "en";

export type LanguageSchema = typeof PT_BR;

export interface LanguageContextProps {
  currentLanguage: AcceptedLanguages;
  setCurrentLanguage: (newLang: AcceptedLanguages) => void;
  currentData: LanguageSchema;
}

export type LangDictionary = Record<AcceptedLanguages, LanguageSchema>;
