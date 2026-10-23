import { Link, Navigate } from "react-router";
import { PATHS } from "../app/paths";
import { LoginForm } from "../features/auth/components/LoginForm";
import { SocialLogin } from "../features/auth/components/SocialLogin";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useProviderError } from "../features/auth/hooks/useProviderError";

export function LoginPage() {
  const { user } = useAuth();
  const providerError = useProviderError();

  if (user) return <Navigate to={PATHS.home} replace />;

  return (
    <section aria-labelledby="login-title">
      <h1 id="login-title">Accedi</h1>
      <p>Accedi per conservare i tuoi progressi su tutti i dispositivi.</p>
      {providerError && <p role="alert">{providerError}</p>}
      <LoginForm />
      <SocialLogin />
      <p>
        Non hai un account? <Link to={PATHS.register}>Registrati</Link>
      </p>
    </section>
  );
}
