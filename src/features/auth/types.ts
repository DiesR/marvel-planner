export interface User {
  id: string;
  email: string;
  displayName: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export type AuthStatus = "loading" | "authenticated" | "anonymous";
