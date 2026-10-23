import { desc, eq } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod";
import { catalogCandidate } from "../db/schema";
import { requireAdmin } from "../middleware/requireAdmin";
import { requireUser } from "../middleware/requireUser";
import type { AppEnv } from "../types";

const dismissSchema = z.object({ key: z.string().regex(/^(movie|tv):\d+(:s\d+)?$/) });

export const adminRoutes = new Hono<AppEnv>()
  .use(requireUser)
  .use(requireAdmin)

  .get("/candidates", async (c) => {
    const rows = await c.var.db
      .select()
      .from(catalogCandidate)
      .where(eq(catalogCandidate.isDismissed, false))
      .orderBy(desc(catalogCandidate.foundAt));
    return c.json({ candidates: rows });
  })

  .post("/candidates/dismiss", async (c) => {
    const parsed = dismissSchema.safeParse(await c.req.json().catch(() => null));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    await c.var.db
      .update(catalogCandidate)
      .set({ isDismissed: true })
      .where(eq(catalogCandidate.key, parsed.data.key));
    return c.body(null, 204);
  });
