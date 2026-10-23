import { Fragment, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, isLanguage, type Language } from "../../shared/languages";
import { readJson, writeJson } from "../lib/storage";
import { I18nContext, type I18nContextValue } from "./I18nContext";
import { interpolate, lookup, splitTokens } from "./translate";
import type { DateStyle, TranslationKey, TranslationParams } from "./types";

const LANGUAGE_STORAGE_KEY = "mcu-planner-language";

const DATE_OPTIONS: Record<DateStyle, Intl.DateTimeFormatOptions> = {
  long: { dateStyle: "long", timeZone: "UTC" },
  month: { month: "long", year: "numeric", timeZone: "UTC" },
};

function detectLanguage(): Language {
  const stored = readJson<unknown>(LANGUAGE_STORAGE_KEY, null);
  if (isLanguage(stored)) return stored;
  const preferred = navigator.languages.map((locale) => locale.slice(0, 2).toLowerCase());
  return preferred.find(isLanguage) ?? DEFAULT_LANGUAGE;
}

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    writeJson(LANGUAGE_STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const t = (key: TranslationKey, params?: TranslationParams) =>
      interpolate(lookup(language, key), params);

    const rich = (
      key: TranslationKey,
      parts: Record<string, ReactNode>,
      params?: TranslationParams,
    ) =>
      splitTokens(lookup(language, key)).map((part, index) => (
        <Fragment key={index}>
          {part.token !== undefined
            ? (parts[part.token] ?? params?.[part.token] ?? `{${part.token}}`)
            : part.text}
        </Fragment>
      ));

    const formatDate = (isoDate: string, style: DateStyle = "long") =>
      new Intl.DateTimeFormat(language, DATE_OPTIONS[style]).format(new Date(isoDate));

    return { language, setLanguage, t, rich, formatDate };
  }, [language, setLanguage]);

  return <I18nContext value={value}>{children}</I18nContext>;
}
