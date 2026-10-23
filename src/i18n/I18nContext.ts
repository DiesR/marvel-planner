import { createContext, type ReactNode } from "react";
import type { Language } from "../../shared/languages";
import type { DateStyle, TranslationKey, TranslationParams } from "./types";

export interface I18nContextValue {
  language: Language;
  setLanguage(language: Language): void;
  t(key: TranslationKey, params?: TranslationParams): string;
  rich(
    key: TranslationKey,
    parts: Record<string, ReactNode>,
    params?: TranslationParams,
  ): ReactNode;
  formatDate(isoDate: string, style?: DateStyle): string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);
