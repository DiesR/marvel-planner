import type { Messages } from "./locales/it";

type Leaves<T, Prefix extends string = ""> = {
  [Key in keyof T & string]: T[Key] extends string
    ? `${Prefix}${Key}`
    : Leaves<T[Key], `${Prefix}${Key}.`>;
}[keyof T & string];

export type TranslationKey = Leaves<Messages>;

export type TranslationParams = Record<string, string | number>;

export type DateStyle = "long" | "month";
