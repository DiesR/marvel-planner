import type { I18nContextValue } from "../../../i18n/I18nContext";

const POSTER_BASE_URL = "/api/images/w342";
const BACKDROP_BASE_URL = "/api/images/w780";

const YEAR_MONTH = /^\d{4}-\d{2}$/;
const FULL_DATE = /^\d{4}-\d{2}-\d{2}$/;
const APPROXIMATE = /^(\d{4})-(mid|late)$/;

export function posterUrl(path: string): string {
  return `${POSTER_BASE_URL}${path}`;
}

export function backdropUrl(path: string): string {
  return `${BACKDROP_BASE_URL}${path}`;
}

export function formatRelease(
  release: string,
  { t, formatDate }: Pick<I18nContextValue, "t" | "formatDate">,
): string {
  const approximate = APPROXIMATE.exec(release);
  if (approximate) {
    const [, year, position] = approximate;
    return t(position === "mid" ? "catalog.release.mid" : "catalog.release.late", { year });
  }
  if (FULL_DATE.test(release)) return formatDate(release);
  if (YEAR_MONTH.test(release)) return formatDate(`${release}-01`, "month");
  return release;
}
