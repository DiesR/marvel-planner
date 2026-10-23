export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  SITE_PASSWORD?: string;
  BETTER_AUTH_URL: string;
  BETTER_AUTH_SECRET: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
}
