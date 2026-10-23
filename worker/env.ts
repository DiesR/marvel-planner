export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  SITE_PASSWORD?: string;
  TMDB_TOKEN?: string;
  BETTER_AUTH_URL: string;
  BETTER_AUTH_SECRET: string;
}
