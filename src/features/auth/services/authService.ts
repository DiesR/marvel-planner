import type { Credentials, PasswordChange, Registration, User } from "../types";

export interface AuthService {
  getCurrentUser(): Promise<User | null>;
  login(credentials: Credentials): Promise<User>;
  register(registration: Registration): Promise<User>;
  logout(): Promise<void>;
  updateName(name: string): Promise<User>;
  changePassword(change: PasswordChange): Promise<void>;
  deleteAccount(password?: string): Promise<void>;
  hasPassword(): Promise<boolean>;
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}
