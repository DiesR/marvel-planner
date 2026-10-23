import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./auth-schema";

export * from "./auth-schema";

export const watchedTitle = sqliteTable(
  "watched_title",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    titleId: text("title_id").notNull(),
    watchedAt: integer("watched_at", { mode: "timestamp_ms" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => [primaryKey({ columns: [table.userId, table.titleId] })],
);

export const titleDetailsCache = sqliteTable(
  "title_details_cache",
  {
    titleId: text("title_id").notNull(),
    language: text("language").notNull(),
    data: text("data").notNull(),
    fetchedAt: integer("fetched_at", { mode: "timestamp_ms" }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.titleId, table.language] })],
);
