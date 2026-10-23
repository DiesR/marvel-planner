import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { AuthService } from "../services/authService";
import { mockAuthService } from "../services/mockAuthService";
import type { AuthStatus, Credentials, User } from "../types";
import { AuthContext, type AuthContextValue } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
  service?: AuthService;
}

export function AuthProvider({ children, service = mockAuthService }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    let isActive = true;
    service.getCurrentUser().then((currentUser) => {
      if (!isActive) return;
      setUser(currentUser);
      setStatus(currentUser ? "authenticated" : "anonymous");
    });
    return () => {
      isActive = false;
    };
  }, [service]);

  const login = useCallback(
    async (credentials: Credentials) => {
      const loggedUser = await service.login(credentials);
      setUser(loggedUser);
      setStatus("authenticated");
    },
    [service],
  );

  const logout = useCallback(async () => {
    await service.logout();
    setUser(null);
    setStatus("anonymous");
  }, [service]);

  const value = useMemo<AuthContextValue>(
    () => ({ user, status, login, logout }),
    [user, status, login, logout],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
}
