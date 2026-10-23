import { basicAuth } from "hono/basic-auth";
import { createMiddleware } from "hono/factory";
import type { AppEnv } from "../types";

const SITE_USERNAME = "marvel";
const REALM = "Marvel Planner";

export const siteGate = createMiddleware<AppEnv>(async (c, next) => {
  const password = c.env.SITE_PASSWORD;
  if (!password) return next();
  return basicAuth({ username: SITE_USERNAME, password, realm: REALM })(c, next);
});
