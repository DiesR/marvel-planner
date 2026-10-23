import { Navigate } from "react-router";
import { PATHS } from "../app/paths";
import { LoginForm } from "../features/auth/components/LoginForm";
import { useAuth } from "../features/auth/hooks/useAuth";

export function LoginPage() {
  const { user } = useAuth();

  if (user) return <Navigate to={PATHS.home} replace />;

  return (
    <section aria-labelledby="login-title">
      <h1 id="login-title">Accedi</h1>
      <p>Accedi per conservare i tuoi progressi su tutti i dispositivi.</p>
      <LoginForm />
    </section>
  );
}
