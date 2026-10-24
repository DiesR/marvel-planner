export type MediaType = "film" | "serie" | "special";
export type Continuity = "main" | "alternate";
export type ReleaseStatus = "released" | "upcoming";

export type NoteKey = "shorts" | "animated";
export type PhaseNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type SagaId = "infinity" | "multiverse";

export interface Title {
  id: string;
  name: string;
  release: string;
  type: MediaType;
  continuity: Continuity;
  status: ReleaseStatus;
  note?: NoteKey;
}

export interface Phase {
  number: PhaseNumber;
  years: string;
  titles: Title[];
}

export interface Saga {
  id: SagaId;
  phases: Phase[];
}

export type ViewOrder = "release" | "chronological";

export interface Filters {
  types: MediaType[];
  showAlternate: boolean;
  showUpcoming: boolean;
}

export interface Progress {
  done: number;
  total: number;
}

export type ProgressStorage = "account" | "device" | "none";
