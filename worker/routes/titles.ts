import { Hono } from "hono";
import { z } from "zod";
import { LANGUAGES } from "../../shared/languages";
import { TMDB_REFS } from "../../shared/tmdbRefs";
import { getTitleDetails } from "../services/titleDetails";
import type { AppEnv } from "../types";

const BROWSER_CACHE_SECONDS = 60 * 60 * 24;

const querySchema = z.object({ lang: z.enum(LANGUAGES) });

export const titleRoutes = new Hono<AppEnv>().get("/:titleId", async (c) => {
  const titleId = c.req.param("titleId");
  const ref = Object.hasOwn(TMDB_REFS, titleId) ? TMDB_REFS[titleId] : undefined;
  if (!ref) return c.json({ error: "not_found" }, 404);

  const query = querySchema.safeParse({ lang: c.req.query("lang") });
  if (!query.success) return c.json({ error: "invalid_language" }, 400);

  const token = c.env.TMDB_TOKEN;
  if (!token) return c.json({ error: "unavailable" }, 503);

  try {
    const details = await getTitleDetails(c.var.db, token, titleId, ref, query.data.lang);
    c.header("Cache-Control", `public, max-age=${BROWSER_CACHE_SECONDS}`);
    return c.json(details);
  } catch (error) {
    console.error(error);
    return c.json({ error: "upstream_error" }, 502);
  }
});
