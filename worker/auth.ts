import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { APIError } from "better-auth/api";
import type { Database } from "./db/client";
import * as schema from "./db/schema";
import type { Env } from "./env";

const MIN_PASSWORD_LENGTH = 10;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 30;

function normalizeName(name: unknown): string {
  const normalized = typeof name === "string" ? name.trim().replace(/\s+/g, " ") : "";
  if (normalized.length < MIN_NAME_LENGTH) {
    throw new APIError("BAD_REQUEST", { code: "INVALID_NAME", message: "Invalid name" });
  }
  return normalized.slice(0, MAX_NAME_LENGTH);
}

export function createAuth(env: Env, db: Database) {
  return betterAuth({
    baseURL: env.BETTER_AUTH_URL,
    basePath: "/api/auth",
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, { provider: "sqlite", schema }),
    emailAndPassword: {
      enabled: true,
      minPasswordLength: MIN_PASSWORD_LENGTH,
    },
    user: {
      deleteUser: { enabled: true },
    },
    databaseHooks: {
      user: {
        create: {
          before: async (user) => ({ data: { ...user, name: normalizeName(user.name) } }),
        },
        update: {
          before: async (user) =>
            "name" in user ? { data: { ...user, name: normalizeName(user.name) } } : undefined,
        },
      },
    },
    rateLimit: {
      enabled: true,
      storage: "database",
    },
    advanced: {
      ipAddress: { ipAddressHeaders: ["cf-connecting-ip"] },
    },
  });
}

export type Auth = ReturnType<typeof createAuth>;
export type SessionUser = Auth["$Infer"]["Session"]["user"];
