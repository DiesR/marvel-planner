import { createMiddleware } from "hono/factory";
import type { AppEnv } from "../types";

export const requireAdmin = createMiddleware<AppEnv>(async (c, next) => {
  const adminId = c.env.ADMIN_USER_ID;
  if (!adminId || c.var.user.id !== adminId) return c.json({ error: "forbidden" }, 403);
  await next();
});
