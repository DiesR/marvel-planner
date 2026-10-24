import { and, eq, gt, isNull, or } from "drizzle-orm";
import type { ShareDuration, ShareLinkInfo, SharedPlanner } from "../../shared/share";
import { TMDB_REFS } from "../../shared/tmdbRefs";
import type { Database } from "../db/client";
import { shareLink, user, watchedTitle } from "../db/schema";

const DAY_MS = 24 * 60 * 60 * 1000;
const CODE_BYTES = 16;

export function generateShareCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(CODE_BYTES));
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

const isActive = (now: Date) => or(isNull(shareLink.expiresAt), gt(shareLink.expiresAt, now));

const toInfo = (row: { code: string; expiresAt: Date | null }): ShareLinkInfo => ({
  code: row.code,
  expiresAt: row.expiresAt?.toISOString() ?? null,
});

export async function getActiveShare(
  db: Database,
  userId: string,
  now = new Date(),
): Promise<ShareLinkInfo | null> {
  const [row] = await db
    .select({ code: shareLink.code, expiresAt: shareLink.expiresAt })
    .from(shareLink)
    .where(and(eq(shareLink.userId, userId), isActive(now)));
  return row ? toInfo(row) : null;
}

export async function saveShare(
  db: Database,
  userId: string,
  duration: ShareDuration,
  regenerate: boolean,
  now = new Date(),
): Promise<ShareLinkInfo> {
  if (!regenerate) {
    const current = await getActiveShare(db, userId, now);
    if (current) return current;
  }

  const values = {
    userId,
    code: generateShareCode(),
    createdAt: now,
    expiresAt: duration === null ? null : new Date(now.getTime() + duration * DAY_MS),
  };
  await db
    .insert(shareLink)
    .values(values)
    .onConflictDoUpdate({
      target: shareLink.userId,
      set: { code: values.code, createdAt: values.createdAt, expiresAt: values.expiresAt },
    });
  return toInfo(values);
}

export async function revokeShare(db: Database, userId: string): Promise<void> {
  await db.delete(shareLink).where(eq(shareLink.userId, userId));
}

export async function getSharedPlanner(
  db: Database,
  code: string,
  now = new Date(),
): Promise<SharedPlanner | null> {
  const [owner] = await db
    .select({ userId: shareLink.userId, name: user.name, expiresAt: shareLink.expiresAt })
    .from(shareLink)
    .innerJoin(user, eq(user.id, shareLink.userId))
    .where(and(eq(shareLink.code, code), isActive(now)));
  if (!owner) return null;

  const rows = await db
    .select({ titleId: watchedTitle.titleId })
    .from(watchedTitle)
    .where(eq(watchedTitle.userId, owner.userId));
  return {
    name: owner.name,
    titleIds: rows.map((row) => row.titleId).filter((id) => Object.hasOwn(TMDB_REFS, id)),
    expiresAt: owner.expiresAt?.toISOString() ?? null,
  };
}
