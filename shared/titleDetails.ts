import type { Language } from "./languages";

export interface CastMember {
  name: string;
  character: string;
}

export interface Episode {
  number: number;
  name: string;
  overview: string;
}

export interface PlotText {
  text: string;
  language: Language;
  sourceUrl: string;
}

export interface TitleDetails {
  name: string;
  originalName: string;
  releaseDate: string | null;
  posterPath: string | null;
  backdropPath: string | null;
  synopsis: string;
  directors: string[];
  creators: string[];
  cast: CastMember[];
  episodes: Episode[];
  plot: PlotText | null;
}
