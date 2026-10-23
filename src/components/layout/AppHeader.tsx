import { Link } from "react-router";
import { PATHS } from "../../app/paths";
import { SITE } from "../../app/site";
import { AccountMenu } from "../../features/auth/components/AccountMenu";

export function AppHeader() {
  return (
    <header>
      <nav aria-label="Principale">
        <Link to={PATHS.home}>{SITE.name}</Link>
        <AccountMenu />
      </nav>
    </header>
  );
}
