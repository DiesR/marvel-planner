import type { TranslationKey } from "../i18n/types";

export type FieldErrors<Field extends string> = Partial<Record<Field, TranslationKey>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function hasErrors(errors: object): boolean {
  return Object.keys(errors).length > 0;
}

export function focusFirstInvalidField(form: HTMLFormElement, errors: object) {
  const invalidNames = new Set(Object.keys(errors));
  const firstInvalid = Array.from(form.elements).find(
    (element): element is HTMLInputElement =>
      element instanceof HTMLInputElement && invalidNames.has(element.name),
  );
  firstInvalid?.focus();
}
