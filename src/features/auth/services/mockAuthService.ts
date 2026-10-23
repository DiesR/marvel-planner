import { readJson, removeKey, writeJson } from "../../../lib/storage";
import type { User } from "../types";
import { AuthError, type AuthService } from "./authService";

const SESSION_KEY = "mcu-planner-session";

export const mockAuthService: AuthService = {
  getCurrentUser: async () => readJson<User | null>(SESSION_KEY, null),

  login: async ({ email, password }) => {
    if (!email.trim() || !password) {
      throw new AuthError("Inserisci email e password.");
    }
    const user: User = {
      id: email.trim().toLowerCase(),
      email: email.trim(),
      displayName: email.split("@")[0],
    };
    writeJson(SESSION_KEY, user);
    return user;
  },

  logout: async () => removeKey(SESSION_KEY),
};
