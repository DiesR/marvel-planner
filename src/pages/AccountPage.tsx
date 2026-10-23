import { Navigate } from "react-router";
import { PATHS } from "../app/paths";
import { AccountSettings } from "../features/account/components/AccountSettings";
import { useAuth } from "../features/auth/hooks/useAuth";

export function AccountPage() {
  const { user, status } = useAuth();

  if (status === "loading") return null;
  if (!user) return <Navigate to={PATHS.home} replace />;

  return <AccountSettings user={user} />;
}
