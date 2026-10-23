import { Hono } from "hono";
import { secureHeaders } from "hono/secure-headers";
import { withContext } from "./middleware/context";
import { configRoutes } from "./routes/config";
import { progressRoutes } from "./routes/progress";
import type { AppEnv } from "./types";

const app = new Hono<AppEnv>().basePath("/api");

app.use(secureHeaders());
app.use(withContext);

app.on(["GET", "POST"], "/auth/*", (c) => c.var.auth.handler(c.req.raw));
app.route("/config", configRoutes);
app.route("/progress", progressRoutes);

app.notFound((c) => c.json({ error: "not_found" }, 404));
app.onError((error, c) => {
  console.error(error);
  return c.json({ error: "internal_error" }, 500);
});

export default app;
