export type MediaType = "film" | "serie" | "special";
export type Continuity = "main" | "alternate";
export type ReleaseStatus = "released" | "upcoming";

export interface Title {
  id: string;
  name: string;
  release: string;
  type: MediaType;
  continuity: Continuity;
  status: ReleaseStatus;
  note?: string;
}

export interface Phase {
  number: number;
  name: string;
  years: string;
  titles: Title[];
}

export interface Saga {
  name: string;
  phases: Phase[];
}

export type TypeFilter = "all" | MediaType;

export interface Filters {
  type: TypeFilter;
  hideAlternate: boolean;
  hideUpcoming: boolean;
}

export interface Progress {
  done: number;
  total: number;
}

export type ProgressStorage = "account" | "device" | "none";
