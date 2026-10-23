import { Link } from "react-router";
import { PATHS } from "../../app/paths";
import { SITE } from "../../app/site";
import { AccountMenu } from "../../features/auth/components/AccountMenu";
import { useI18n } from "../../i18n/useI18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function AppHeader() {
  const { t } = useI18n();

  return (
    <header>
      <nav aria-label={t("nav.main")}>
        <Link to={PATHS.home}>{SITE.name}</Link>
        <LanguageSwitcher />
        <AccountMenu />
      </nav>
    </header>
  );
}
