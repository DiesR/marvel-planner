import type { Auth, SessionUser } from "./auth";
import type { Database } from "./db/client";
import type { Env } from "./env";

export interface AppEnv {
  Bindings: Env;
  Variables: {
    db: Database;
    auth: Auth;
    user: SessionUser;
  };
}
