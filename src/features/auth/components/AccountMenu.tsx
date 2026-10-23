import { CircleUserRound, LogOut } from "lucide-react";
import { Link } from "react-router";
import { PATHS } from "../../../app/paths";
import { useAuth } from "../hooks/useAuth";

export function AccountMenu() {
  const { user, status, logout } = useAuth();

  if (status === "loading") return null;

  if (!user) {
    return (
      <Link to={PATHS.login} aria-label="Accedi" title="Accedi">
        <CircleUserRound aria-hidden />
      </Link>
    );
  }

  return (
    <div>
      <Link to={PATHS.account} title="Il tuo account">
        <CircleUserRound aria-hidden />
        {user.name}
      </Link>
      <button type="button" onClick={logout} aria-label="Esci" title="Esci">
        <LogOut aria-hidden />
      </button>
    </div>
  );
}
