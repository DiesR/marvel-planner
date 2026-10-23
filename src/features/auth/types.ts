export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface Registration extends Credentials {
  name: string;
}

export type AuthStatus = "loading" | "authenticated" | "anonymous";
