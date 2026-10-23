import { lt } from "drizzle-orm";
import type { Database } from "../db/client";
import { rateLimit, session, titleDetailsCache, titleWatchCache, verification } from "../db/schema";

const DAY_MS = 24 * 60 * 60 * 1000;
const RATE_LIMIT_RETENTION_MS = DAY_MS;
const TITLE_CACHE_MAX_AGE_MS = 150 * DAY_MS;

export async function purgeExpiredData(db: Database, now = Date.now()): Promise<void> {
  await db.batch([
    db.delete(session).where(lt(session.expiresAt, new Date(now))),
    db.delete(verification).where(lt(verification.expiresAt, new Date(now))),
    db.delete(rateLimit).where(lt(rateLimit.lastRequest, now - RATE_LIMIT_RETENTION_MS)),
    db
      .delete(titleDetailsCache)
      .where(lt(titleDetailsCache.fetchedAt, new Date(now - TITLE_CACHE_MAX_AGE_MS))),
    db
      .delete(titleWatchCache)
      .where(lt(titleWatchCache.fetchedAt, new Date(now - TITLE_CACHE_MAX_AGE_MS))),
  ]);
}
