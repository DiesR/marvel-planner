import { CircleUserRound, LogOut } from "lucide-react";
import { Link } from "react-router";
import { PATHS } from "../../../app/paths";
import { useI18n } from "../../../i18n/useI18n";
import { useAuth } from "../hooks/useAuth";

export function AccountMenu() {
  const { t } = useI18n();
  const { user, status, logout } = useAuth();

  if (status === "loading") return null;

  if (!user) {
    return (
      <Link to={PATHS.login} aria-label={t("nav.login")} title={t("nav.login")}>
        <CircleUserRound aria-hidden />
      </Link>
    );
  }

  return (
    <div>
      <Link to={PATHS.account} title={t("nav.account")}>
        <CircleUserRound aria-hidden />
        {user.name}
      </Link>
      <button type="button" onClick={logout} aria-label={t("nav.logout")} title={t("nav.logout")}>
        <LogOut aria-hidden />
      </button>
    </div>
  );
}
