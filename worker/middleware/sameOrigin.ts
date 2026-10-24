import { createMiddleware } from "hono/factory";
import type { AppEnv } from "../types";

const SAFE_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

export const sameOrigin = createMiddleware<AppEnv>(async (c, next) => {
  if (SAFE_METHODS.has(c.req.method)) return next();

  const origin = c.req.header("origin");
  const isCrossOrigin = origin !== undefined && origin !== new URL(c.req.url).origin;
  const isCrossSite = c.req.header("sec-fetch-site") === "cross-site";
  if (isCrossOrigin || isCrossSite) return c.json({ error: "forbidden_origin" }, 403);

  return next();
});
