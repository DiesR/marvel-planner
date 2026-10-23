import { betterAuth, type BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { APIError } from "better-auth/api";
import type { Database } from "./db/client";
import * as schema from "./db/schema";
import type { Env } from "./env";

const MIN_PASSWORD_LENGTH = 10;
const MAX_NAME_LENGTH = 60;

function normalizeName(name: unknown): string {
  const normalized = typeof name === "string" ? name.trim().replace(/\s+/g, " ") : "";
  if (!normalized) {
    throw new APIError("BAD_REQUEST", { code: "INVALID_NAME", message: "Invalid name" });
  }
  return normalized.slice(0, MAX_NAME_LENGTH);
}

function socialProviders(env: Env): BetterAuthOptions["socialProviders"] {
  return {
    ...(env.GOOGLE_CLIENT_ID &&
      env.GOOGLE_CLIENT_SECRET && {
        google: { clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET },
      }),
    ...(env.DISCORD_CLIENT_ID &&
      env.DISCORD_CLIENT_SECRET && {
        discord: { clientId: env.DISCORD_CLIENT_ID, clientSecret: env.DISCORD_CLIENT_SECRET },
      }),
  };
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
    socialProviders: socialProviders(env),
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
