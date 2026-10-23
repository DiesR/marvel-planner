import type { Language } from "../../shared/languages";
import { de } from "./locales/de";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { it, type Messages } from "./locales/it";
import type { TranslationKey, TranslationParams } from "./types";

const MESSAGES: Record<Language, Messages> = { it, fr, es, en, de };

const TOKEN_PATTERN = /\{(\w+)\}/g;

export function lookup(language: Language, key: TranslationKey): string {
  const value = key
    .split(".")
    .reduce<unknown>(
      (node, part) => (node as Record<string, unknown> | undefined)?.[part],
      MESSAGES[language],
    );
  return typeof value === "string" ? value : key;
}

export function interpolate(template: string, params: TranslationParams = {}): string {
  return template.replace(TOKEN_PATTERN, (token, name: string) =>
    name in params ? String(params[name]) : token,
  );
}

export function splitTokens(template: string): { text?: string; token?: string }[] {
  const parts: { text?: string; token?: string }[] = [];
  let lastIndex = 0;
  for (const match of template.matchAll(TOKEN_PATTERN)) {
    if (match.index > lastIndex) parts.push({ text: template.slice(lastIndex, match.index) });
    parts.push({ token: match[1] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < template.length) parts.push({ text: template.slice(lastIndex) });
  return parts;
}
