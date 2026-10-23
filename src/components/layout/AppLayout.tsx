import { useEffect, useRef } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { AuthDialogs } from "../../features/auth/components/AuthDialogs";
import { PrivacySettingsDialog } from "../../features/privacy/components/PrivacySettingsDialog";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { MAIN_CONTENT_ID, SkipLink } from "./SkipLink";

export function AppLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <>
      <SkipLink />
      <AppHeader />
      <main id={MAIN_CONTENT_ID} ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <AppFooter />
      <AuthDialogs />
      <PrivacySettingsDialog />
      <ScrollRestoration />
    </>
  );
}
