import type { Language } from "../../shared/languages";
import type { Episode, TitleDetails } from "../../shared/titleDetails";
import type { TmdbRef } from "../../shared/tmdbRefs";

const API_URL = "https://api.themoviedb.org/3";
const MAX_CAST = 15;
const FALLBACK_LANGUAGE: Language = "en";

const TMDB_LOCALES: Record<Language, string> = {
  it: "it-IT",
  fr: "fr-FR",
  es: "es-ES",
  en: "en-US",
  de: "de-DE",
};

interface TmdbCredits {
  cast?: { name: string; character?: string; order?: number }[];
  crew?: { name: string; job?: string }[];
}

interface TmdbExternalIds {
  wikidata_id?: string | null;
}

interface TmdbMovie {
  title: string;
  original_title: string;
  release_date?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  credits?: TmdbCredits;
  external_ids?: TmdbExternalIds;
}

interface TmdbShow {
  name: string;
  original_name: string;
  first_air_date?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  created_by?: { name: string }[];
  credits?: TmdbCredits;
}

interface TmdbSeason {
  air_date?: string | null;
  poster_path?: string | null;
  overview?: string;
  credits?: TmdbCredits;
  episodes?: { episode_number: number; name: string; overview?: string }[];
}

export type TmdbDetails = Omit<TitleDetails, "plot"> & { wikidataId: string | null };

export class TmdbError extends Error {
  constructor(readonly status: number) {
    super(`TMDB ha risposto con stato ${status}`);
    this.name = "TmdbError";
  }
}

async function request<T>(token: string, path: string, language: Language): Promise<T> {
  const separator = path.includes("?") ? "&" : "?";
  const url = `${API_URL}${path}${separator}language=${TMDB_LOCALES[language]}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  });
  if (!response.ok) throw new TmdbError(response.status);
  return (await response.json()) as T;
}

async function requestOptional<T>(token: string, path: string, language: Language) {
  try {
    return await request<T>(token, path, language);
  } catch (error) {
    if (error instanceof TmdbError && error.status === 404) return null;
    throw error;
  }
}

async function overviewOrFallback(
  token: string,
  path: string,
  language: Language,
  overview: string | undefined,
): Promise<string> {
  if (overview?.trim() || language === FALLBACK_LANGUAGE) return overview?.trim() ?? "";
  const fallback = await requestOptional<{ overview?: string }>(token, path, FALLBACK_LANGUAGE);
  return fallback?.overview?.trim() ?? "";
}

function mapCast(credits?: TmdbCredits) {
  return (credits?.cast ?? [])
    .toSorted((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .slice(0, MAX_CAST)
    .map((member) => ({ name: member.name, character: member.character?.trim() ?? "" }));
}

function directorsOf(credits?: TmdbCredits): string[] {
  return (credits?.crew ?? []).filter((member) => member.job === "Director").map((m) => m.name);
}

function mapEpisodes(season: TmdbSeason | null): Episode[] {
  return (season?.episodes ?? [])
    .filter((episode) => episode.overview?.trim())
    .map((episode) => ({
      number: episode.episode_number,
      name: episode.name,
      overview: episode.overview!.trim(),
    }));
}

async function movieDetails(token: string, id: number, language: Language): Promise<TmdbDetails> {
  const movie = await request<TmdbMovie>(
    token,
    `/movie/${id}?append_to_response=credits,external_ids`,
    language,
  );
  return {
    name: movie.title,
    originalName: movie.original_title,
    releaseDate: movie.release_date || null,
    posterPath: movie.poster_path ?? null,
    backdropPath: movie.backdrop_path ?? null,
    synopsis: await overviewOrFallback(token, `/movie/${id}`, language, movie.overview),
    directors: directorsOf(movie.credits),
    creators: [],
    cast: mapCast(movie.credits),
    episodes: [],
    wikidataId: movie.external_ids?.wikidata_id ?? null,
  };
}

async function tvDetails(
  token: string,
  id: number,
  language: Language,
  season?: number,
): Promise<TmdbDetails> {
  const [show, seasonData] = await Promise.all([
    request<TmdbShow>(token, `/tv/${id}?append_to_response=credits`, language),
    season === undefined
      ? Promise.resolve(null)
      : requestOptional<TmdbSeason>(
          token,
          `/tv/${id}/season/${season}?append_to_response=credits`,
          language,
        ),
  ]);
  const credits = seasonData?.credits?.cast?.length ? seasonData.credits : show.credits;
  const synopsis = seasonData?.overview?.trim() ? seasonData.overview : show.overview;
  return {
    name: show.name,
    originalName: show.original_name,
    releaseDate: seasonData?.air_date || show.first_air_date || null,
    posterPath: seasonData?.poster_path ?? show.poster_path ?? null,
    backdropPath: show.backdrop_path ?? null,
    synopsis: await overviewOrFallback(token, `/tv/${id}`, language, synopsis),
    directors: [],
    creators: (show.created_by ?? []).map((creator) => creator.name),
    cast: mapCast(credits),
    episodes: mapEpisodes(seasonData),
    wikidataId: null,
  };
}

export function fetchTmdbDetails(
  token: string,
  ref: TmdbRef,
  language: Language,
): Promise<TmdbDetails> {
  return ref.kind === "movie"
    ? movieDetails(token, ref.id, language)
    : tvDetails(token, ref.id, language, ref.season);
}
