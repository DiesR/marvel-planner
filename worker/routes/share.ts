import { Hono } from "hono";
import { z } from "zod";
import { SHARE_CODE_PATTERN } from "../../shared/share";
import { requireUser } from "../middleware/requireUser";
import { getActiveShare, getSharedPlanner, revokeShare, saveShare } from "../services/share";
import type { AppEnv } from "../types";

const saveSchema = z.object({
  days: z.union([z.literal(7), z.literal(30), z.null()]),
  regenerate: z.boolean().default(false),
});

export const shareRoutes = new Hono<AppEnv>()
  .use(requireUser)

  .get("/", async (c) => {
    c.header("Cache-Control", "no-store");
    return c.json({ link: await getActiveShare(c.var.db, c.var.user.id) });
  })

  .post("/", async (c) => {
    const parsed = saveSchema.safeParse(await c.req.json().catch(() => null));
    if (!parsed.success) return c.json({ error: "invalid_body" }, 400);

    const link = await saveShare(c.var.db, c.var.user.id, parsed.data.days, parsed.data.regenerate);
    c.header("Cache-Control", "no-store");
    return c.json({ link });
  })

  .delete("/", async (c) => {
    await revokeShare(c.var.db, c.var.user.id);
    return c.body(null, 204);
  });

export const sharedRoutes = new Hono<AppEnv>().get("/:code", async (c) => {
  const code = c.req.param("code");
  c.header("Cache-Control", "no-store");
  c.header("X-Robots-Tag", "noindex, nofollow");
  if (!SHARE_CODE_PATTERN.test(code)) return c.json({ error: "not_found" }, 404);

  const planner = await getSharedPlanner(c.var.db, code);
  if (!planner) return c.json({ error: "not_found" }, 404);
  return c.json(planner);
});
