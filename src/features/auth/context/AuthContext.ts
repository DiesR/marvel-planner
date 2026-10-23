import { createContext } from "react";
import type { AuthStatus, Credentials, Registration, User } from "../types";

export interface AuthContextValue {
  user: User | null;
  status: AuthStatus;
  login(credentials: Credentials): Promise<void>;
  register(registration: Registration): Promise<void>;
  logout(): Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
