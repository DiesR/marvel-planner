import { useCallback, useMemo, useState, type ReactNode } from "react";
import { PrivacySettingsContext, type PrivacySettingsContextValue } from "./PrivacySettingsContext";

interface PrivacySettingsProviderProps {
  children: ReactNode;
}

export function PrivacySettingsProvider({ children }: PrivacySettingsProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<PrivacySettingsContextValue>(
    () => ({ isOpen, open, close }),
    [isOpen, open, close],
  );

  return <PrivacySettingsContext value={value}>{children}</PrivacySettingsContext>;
}
