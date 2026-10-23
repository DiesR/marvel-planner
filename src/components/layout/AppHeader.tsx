import { Link } from "react-router";
import { PATHS } from "../../app/paths";
import { AccountMenu } from "../../features/auth/components/AccountMenu";

export function AppHeader() {
  return (
    <header>
      <nav aria-label="Principale">
        <Link to={PATHS.home}>MCU · Planner di visione</Link>
        <AccountMenu />
      </nav>
    </header>
  );
}
