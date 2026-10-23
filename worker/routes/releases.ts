import { Hono } from "hono";
import { getReleases, refreshReleases } from "../services/releases";
import type { AppEnv } from "../types";

const REQUEST_REFRESH_LIMIT = 24;
const BROWSER_CACHE_SECONDS = 60 * 60;

export const releaseRoutes = new Hono<AppEnv>().get("/", async (c) => {
  const token = c.env.TMDB_TOKEN;
  if (token) {
    c.executionCtx.waitUntil(refreshReleases(c.var.db, token, REQUEST_REFRESH_LIMIT));
  }
  c.header("Cache-Control", `public, max-age=${BROWSER_CACHE_SECONDS}`);
  return c.json({ releases: await getReleases(c.var.db) });
});
