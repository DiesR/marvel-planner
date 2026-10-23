import { createContext } from "react";
import type {
  AuthStatus,
  Credentials,
  PasswordChange,
  Registration,
  SocialProvider,
  User,
} from "../types";

export interface AuthContextValue {
  user: User | null;
  status: AuthStatus;
  login(credentials: Credentials): Promise<void>;
  loginWithProvider(provider: SocialProvider): Promise<void>;
  getSocialProviders(): Promise<SocialProvider[]>;
  register(registration: Registration): Promise<void>;
  logout(): Promise<void>;
  updateName(name: string): Promise<void>;
  changePassword(change: PasswordChange): Promise<void>;
  deleteAccount(password?: string): Promise<void>;
  hasPassword(): Promise<boolean>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
