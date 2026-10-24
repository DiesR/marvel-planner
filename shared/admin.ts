import type { CatalogCandidate } from "./catalogCandidate";

export interface AdminOverview {
  maintenance: boolean;
  tmdbConfigured: boolean;
  lastRuns: { daily: string | null; weekly: string | null };
  candidates: CatalogCandidate[];
}

export interface SiteStatus {
  maintenance: boolean;
  isAdmin: boolean;
}
