export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  TMDB_TOKEN?: string;
  ADMIN_USER_ID?: string;
  BETTER_AUTH_URL: string;
  BETTER_AUTH_SECRET: string;
}
