import { Outlet } from "react-router";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";

export function AppLayout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
