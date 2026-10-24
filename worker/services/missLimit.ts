import { eq } from "drizzle-orm";
import type { Database } from "../db/client";
import { rateLimit } from "../db/schema";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_MISSES = 20;

const keyFor = (scope: string, client: string) => `${scope}:${client}`;

export async function isBlocked(
  db: Database,
  scope: string,
  client: string,
  now = Date.now(),
): Promise<boolean> {
  const [row] = await db
    .select({ count: rateLimit.count, lastRequest: rateLimit.lastRequest })
    .from(rateLimit)
    .where(eq(rateLimit.key, keyFor(scope, client)));
  return Boolean(row) && now - row.lastRequest < WINDOW_MS && row.count >= MAX_MISSES;
}

export async function recordMiss(
  db: Database,
  scope: string,
  client: string,
  now = Date.now(),
): Promise<void> {
  const key = keyFor(scope, client);
  const [row] = await db
    .select({ count: rateLimit.count, lastRequest: rateLimit.lastRequest })
    .from(rateLimit)
    .where(eq(rateLimit.key, key));
  const isCurrent = Boolean(row) && now - row.lastRequest < WINDOW_MS;
  const count = isCurrent ? row.count + 1 : 1;

  await db
    .insert(rateLimit)
    .values({ id: key, key, count, lastRequest: now })
    .onConflictDoUpdate({ target: rateLimit.key, set: { count, lastRequest: now } });
}
