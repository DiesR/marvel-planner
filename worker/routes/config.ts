import { Hono } from "hono";
import { socialProviders } from "../socialProviders";
import type { AppEnv } from "../types";

export const configRoutes = new Hono<AppEnv>().get("/", (c) =>
  c.json({ socialProviders: Object.keys(socialProviders(c.env)) }),
);
