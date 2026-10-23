import { Link } from "react-router";
import { PATHS } from "../app/paths";
import { useI18n } from "../i18n/useI18n";

export function NotFoundPage() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="not-found-title">
      <h1 id="not-found-title">{t("notFound.title")}</h1>
      <Link to={PATHS.home}>{t("notFound.back")}</Link>
    </section>
  );
}
