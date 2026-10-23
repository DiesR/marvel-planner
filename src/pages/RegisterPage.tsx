import { Link, Navigate } from "react-router";
import { PATHS } from "../app/paths";
import { RegisterForm } from "../features/auth/components/RegisterForm";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useI18n } from "../i18n/useI18n";

export function RegisterPage() {
  const { t, rich } = useI18n();
  const { user } = useAuth();

  if (user) return <Navigate to={PATHS.home} replace />;

  return (
    <section aria-labelledby="register-title">
      <h1 id="register-title">{t("auth.register.title")}</h1>
      <p>{t("auth.register.intro")}</p>
      <RegisterForm />
      <p>
        {rich("auth.register.privacyNotice", {
          link: <Link to={PATHS.privacy}>{t("auth.register.privacyLink")}</Link>,
        })}
      </p>
      <p>
        {rich("auth.register.haveAccount", {
          link: <Link to={PATHS.login}>{t("auth.register.loginLink")}</Link>,
        })}
      </p>
    </section>
  );
}
