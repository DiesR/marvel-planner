import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "../../../worker/db/schema";

const MIGRATIONS_DIR = join(import.meta.dirname, "../../../migrations");

type Params = (string | number | null)[];

function createFakeD1(sqlite: DatabaseSync): D1Database {
  const prepare = (sql: string) => {
    let params: Params = [];
    const statement = {
      bind(...values: Params) {
        params = values;
        return statement;
      },
      run: async () => {
        sqlite.prepare(sql).run(...params);
        return { success: true, results: [], meta: {} };
      },
      all: async () => ({ success: true, results: sqlite.prepare(sql).all(...params), meta: {} }),
      raw: async () =>
        sqlite
          .prepare(sql)
          .all(...params)
          .map((row) => Object.values(row)),
    };
    return statement;
  };

  return {
    prepare,
    batch: async (statements: { run: () => Promise<unknown> }[]) =>
      Promise.all(statements.map((statement) => statement.run())),
  } as unknown as D1Database;
}

export function createTestDatabase() {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec("PRAGMA foreign_keys = ON");
  for (const file of readdirSync(MIGRATIONS_DIR)
    .filter((name) => name.endsWith(".sql"))
    .sort()) {
    const sql = readFileSync(join(MIGRATIONS_DIR, file), "utf8");
    for (const statement of sql.split("--> statement-breakpoint")) sqlite.exec(statement);
  }
  return { db: drizzle(createFakeD1(sqlite), { schema }), sqlite };
}
