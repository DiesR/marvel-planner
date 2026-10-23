export const LANGUAGES = ["de", "en", "es", "fr", "it"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_NAMES: Record<Language, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
};

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.some((language) => language === value);
}
