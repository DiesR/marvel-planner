import { apiRequest } from "../../../lib/apiClient";

export interface CatalogCandidate {
  key: string;
  kind: "movie" | "tv" | "season";
  tmdbId: number;
  season: number | null;
  title: string;
  releaseDate: string | null;
}

export function fetchCandidates(): Promise<CatalogCandidate[]> {
  return apiRequest<{ candidates: CatalogCandidate[] }>("/admin/candidates").then(
    (response) => response.candidates,
  );
}

export function dismissCandidate(key: string): Promise<void> {
  return apiRequest("/admin/candidates/dismiss", { method: "POST", body: JSON.stringify({ key }) });
}

export function tmdbUrl(candidate: CatalogCandidate): string {
  const base = `https://www.themoviedb.org/${candidate.kind === "movie" ? "movie" : "tv"}/${candidate.tmdbId}`;
  return candidate.season === null ? base : `${base}/season/${candidate.season}`;
}
