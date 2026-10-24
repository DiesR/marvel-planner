import { CircleUserRound, LogOut, Settings } from "lucide-react";
import { Link } from "react-router";
import { PATHS } from "../../../app/paths";
import { useI18n } from "../../../i18n/useI18n";
import { useSiteStatus } from "../../site/hooks/useSiteStatus";
import { useAuth } from "../hooks/useAuth";
import { useAuthDialog } from "../hooks/useAuthDialog";

export function AccountMenu() {
  const { t } = useI18n();
  const { user, status, logout } = useAuth();
  const { open } = useAuthDialog();
  const { isAdmin } = useSiteStatus();

  if (status === "loading") return null;

  if (!user) {
    return (
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={t("nav.login")}
        title={t("nav.login")}
        onClick={() => open("login")}
      >
        <CircleUserRound aria-hidden />
      </button>
    );
  }

  return (
    <div>
      <button
        type="button"
        aria-haspopup="dialog"
        title={t("nav.account")}
        onClick={() => open("account")}
      >
        <CircleUserRound aria-hidden />
        {user.name}
      </button>
      {isAdmin && (
        <Link to={PATHS.admin} title={t("nav.admin")}>
          <Settings aria-hidden />
          {t("nav.admin")}
        </Link>
      )}
      <button type="button" onClick={logout} aria-label={t("nav.logout")} title={t("nav.logout")}>
        <LogOut aria-hidden />
      </button>
    </div>
  );
}
