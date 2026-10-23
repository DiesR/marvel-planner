import type { TranslationKey } from "../../../i18n/types";
import type { MediaType, NoteKey } from "../types";

export const MEDIA_TYPE_KEYS: Record<MediaType, TranslationKey> = {
  film: "planner.types.film",
  serie: "planner.types.serie",
  special: "planner.types.special",
};

export const NOTE_KEYS: Record<NoteKey, TranslationKey> = {
  shorts: "planner.notes.shorts",
  animated: "planner.notes.animated",
};

export const TYPE_FILTER_OPTIONS: { value: MediaType; labelKey: TranslationKey }[] = [
  { value: "film", labelKey: "planner.filters.film" },
  { value: "serie", labelKey: "planner.filters.serie" },
  { value: "special", labelKey: "planner.filters.special" },
];
