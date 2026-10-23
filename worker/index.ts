import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { secureHeaders } from "hono/secure-headers";
import { withContext } from "./middleware/context";
import { siteGate } from "./middleware/siteGate";
import { progressRoutes } from "./routes/progress";
import type { AppEnv } from "./types";

const api = new Hono<AppEnv>()
  .use(secureHeaders())
  .use(withContext)
  .on(["GET", "POST"], "/auth/*", (c) => c.var.auth.handler(c.req.raw))
  .route("/progress", progressRoutes)
  .all("*", (c) => c.json({ error: "not_found" }, 404));

const app = new Hono<AppEnv>()
  .use(siteGate)
  .route("/api", api)
  .all("*", (c) => c.env.ASSETS.fetch(c.req.raw));

app.onError((error, c) => {
  if (error instanceof HTTPException) return error.getResponse();
  console.error(error);
  return c.json({ error: "internal_error" }, 500);
});

export default app;
