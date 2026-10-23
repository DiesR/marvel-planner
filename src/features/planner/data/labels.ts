import type { MediaType, TypeFilter } from "../types";

export const MEDIA_TYPE_LABELS: Record<MediaType, string> = {
  film: "Film",
  serie: "Serie",
  special: "Speciale",
};

export const TYPE_FILTER_OPTIONS: { value: TypeFilter; label: string }[] = [
  { value: "all", label: "Tutti" },
  { value: "film", label: "Film" },
  { value: "serie", label: "Serie" },
  { value: "special", label: "Speciali" },
];
