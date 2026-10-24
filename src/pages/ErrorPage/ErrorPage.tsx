import { PATHS } from "../../app/paths";
import { useI18n } from "../../i18n/useI18n";
import { usePageTitle } from "../../i18n/usePageTitle";

export function ErrorPage() {
  const { t } = useI18n();
  usePageTitle("error.title");

  return (
    <main className="error-page">
      <h1>{t("error.title")}</h1>
      <p>{t("error.body")}</p>
      <a href={PATHS.home}>{t("error.home")}</a>
    </main>
  );
}
