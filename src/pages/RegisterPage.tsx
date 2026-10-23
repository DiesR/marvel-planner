import { Link, Navigate } from "react-router";
import { PATHS } from "../app/paths";
import { RegisterForm } from "../features/auth/components/RegisterForm";
import { useAuth } from "../features/auth/hooks/useAuth";

export function RegisterPage() {
  const { user } = useAuth();

  if (user) return <Navigate to={PATHS.home} replace />;

  return (
    <section aria-labelledby="register-title">
      <h1 id="register-title">Crea un account</h1>
      <p>I progressi già salvati su questo dispositivo verranno aggiunti al tuo account.</p>
      <RegisterForm />
      <p>
        Hai già un account? <Link to={PATHS.login}>Accedi</Link>
      </p>
    </section>
  );
}
