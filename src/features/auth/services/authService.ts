import type { Credentials, Registration, User } from "../types";

export interface AuthService {
  getCurrentUser(): Promise<User | null>;
  login(credentials: Credentials): Promise<User>;
  register(registration: Registration): Promise<User>;
  logout(): Promise<void>;
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}
