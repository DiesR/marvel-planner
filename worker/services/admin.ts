import type { Env } from "../env";

export function isAdminUser(env: Env, userId: string): boolean {
  return Boolean(env.ADMIN_USER_ID) && env.ADMIN_USER_ID === userId;
}
