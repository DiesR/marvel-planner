import { ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { PATHS } from "../../app/paths";
import { usePrivacySettings } from "../../features/privacy/hooks/usePrivacySettings";
import { useI18n } from "../../i18n/useI18n";
import { CoffeeLink } from "./CoffeeLink";

export function AppFooter() {
  const { t } = useI18n();
  const { open } = usePrivacySettings();

  return (
    <footer>
      <CoffeeLink />
      <p>{t("footer.disclaimer")}</p>
      <p>
        This product uses the TMDB API but is not endorsed or certified by{" "}
        <a href="https://www.themoviedb.org" rel="noreferrer">
          TMDB
        </a>
        .
      </p>
      <nav aria-label={t("footer.legal")}>
        <Link to={PATHS.privacy}>{t("footer.privacy")}</Link>
        <button type="button" aria-haspopup="dialog" onClick={open}>
          <ShieldCheck aria-hidden />
          {t("footer.privacySettings")}
        </button>
      </nav>
    </footer>
  );
}
