import { LogIn } from "lucide-react";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { useAuthDialog } from "../../features/auth/hooks/useAuthDialog";
import { useI18n } from "../../i18n/useI18n";
import { usePageTitle } from "../../i18n/usePageTitle";

export function MaintenancePage() {
  usePageTitle("maintenance.title");
  const { t } = useI18n();
  const { user } = useAuth();
  const { open } = useAuthDialog();

  return (
    <section className="maintenance-page" aria-labelledby="maintenance-title">
      <h1 id="maintenance-title">{t("maintenance.title")}</h1>
      <p>{t("maintenance.body")}</p>
      {!user && (
        <button
          type="button"
          className="btn btn--primary btn--lg"
          aria-haspopup="dialog"
          onClick={() => open("login")}
        >
          <LogIn aria-hidden />
          {t("maintenance.adminLogin")}
        </button>
      )}
    </section>
  );
}
