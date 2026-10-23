import { eq } from "drizzle-orm";
import type { TmdbRef } from "../../shared/tmdbRefs";
import type { WatchProviders } from "../../shared/watchProviders";
import type { Database } from "../db/client";
import { titleWatchCache } from "../db/schema";
import { fetchWatchProviders } from "./tmdb";

const TTL_MS = 24 * 60 * 60 * 1000;

async function readCache(db: Database, titleId: string) {
  const [row] = await db.select().from(titleWatchCache).where(eq(titleWatchCache.titleId, titleId));
  if (!row) return null;
  return { providers: JSON.parse(row.data) as WatchProviders, fetchedAt: row.fetchedAt };
}

async function writeCache(db: Database, titleId: string, providers: WatchProviders) {
  const values = { titleId, data: JSON.stringify(providers), fetchedAt: new Date() };
  await db
    .insert(titleWatchCache)
    .values(values)
    .onConflictDoUpdate({
      target: titleWatchCache.titleId,
      set: { data: values.data, fetchedAt: values.fetchedAt },
    });
}

export async function getWatchProviders(
  db: Database,
  token: string,
  titleId: string,
  ref: TmdbRef,
): Promise<WatchProviders> {
  const cached = await readCache(db, titleId);
  if (cached && Date.now() - cached.fetchedAt.getTime() < TTL_MS) return cached.providers;

  try {
    const providers = await fetchWatchProviders(token, ref);
    await writeCache(db, titleId, providers);
    return providers;
  } catch (error) {
    if (cached) return cached.providers;
    throw error;
  }
}
