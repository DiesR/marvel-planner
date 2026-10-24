import { createMiddleware } from "hono/factory";
import { isAdminUser } from "../services/admin";
import type { AppEnv } from "../types";

export const requireAdmin = createMiddleware<AppEnv>(async (c, next) => {
  if (!isAdminUser(c.env, c.var.user.id)) return c.json({ error: "forbidden" }, 403);
  await next();
});
