import { useCallback, useMemo, useState, type ReactNode } from "react";
import {
  AuthDialogContext,
  type AuthDialogContextValue,
  type AuthDialogView,
} from "./AuthDialogContext";

interface AuthDialogProviderProps {
  children: ReactNode;
}

export function AuthDialogProvider({ children }: AuthDialogProviderProps) {
  const [view, setView] = useState<AuthDialogView | null>(null);

  const open = useCallback((next: AuthDialogView) => setView(next), []);
  const close = useCallback(() => setView(null), []);

  const value = useMemo<AuthDialogContextValue>(() => ({ view, open, close }), [view, open, close]);

  return <AuthDialogContext value={value}>{children}</AuthDialogContext>;
}
