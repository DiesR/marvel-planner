import { Link, Navigate } from "react-router";
import { PATHS } from "../app/paths";
import { LoginForm } from "../features/auth/components/LoginForm";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useI18n } from "../i18n/useI18n";

export function LoginPage() {
  const { t, rich } = useI18n();
  const { user } = useAuth();

  if (user) return <Navigate to={PATHS.home} replace />;

  return (
    <section aria-labelledby="login-title">
      <h1 id="login-title">{t("auth.login.title")}</h1>
      <p>{t("auth.login.intro")}</p>
      <LoginForm />
      <p>
        {rich("auth.login.noAccount", {
          link: <Link to={PATHS.register}>{t("auth.login.registerLink")}</Link>,
        })}
      </p>
    </section>
  );
}
