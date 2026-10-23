import { createContext } from "react";

export type AuthDialogView = "login" | "register" | "account";

export interface AuthDialogContextValue {
  view: AuthDialogView | null;
  open(view: AuthDialogView): void;
  close(): void;
}

export const AuthDialogContext = createContext<AuthDialogContextValue | null>(null);
