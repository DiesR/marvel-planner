export const LANGUAGES = ["it", "fr", "es", "en", "de"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_NAMES: Record<Language, string> = {
  it: "Italiano",
  fr: "Français",
  es: "Español",
  en: "English",
  de: "Deutsch",
};

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.some((language) => language === value);
}
