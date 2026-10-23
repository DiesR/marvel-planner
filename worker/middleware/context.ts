import { createMiddleware } from "hono/factory";
import { createAuth } from "../auth";
import { createDb } from "../db/client";
import type { AppEnv } from "../types";

export const withContext = createMiddleware<AppEnv>(async (c, next) => {
  const db = createDb(c.env.DB);
  c.set("db", db);
  c.set("auth", createAuth(c.env, db));
  await next();
});
