import { Link, Navigate } from "react-router";
import { PATHS } from "../app/paths";
import { RegisterForm } from "../features/auth/components/RegisterForm";
import { SocialLogin } from "../features/auth/components/SocialLogin";
import { useAuth } from "../features/auth/hooks/useAuth";

export function RegisterPage() {
  const { user } = useAuth();

  if (user) return <Navigate to={PATHS.home} replace />;

  return (
    <section aria-labelledby="register-title">
      <h1 id="register-title">Crea un account</h1>
      <p>I progressi già salvati su questo dispositivo verranno aggiunti al tuo account.</p>
      <RegisterForm />
      <SocialLogin />
      <p>
        Creando un account dichiari di aver letto l'
        <Link to={PATHS.privacy}>informativa sulla privacy</Link>.
      </p>
      <p>
        Hai già un account? <Link to={PATHS.login}>Accedi</Link>
      </p>
    </section>
  );
}
