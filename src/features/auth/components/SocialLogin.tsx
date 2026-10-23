import { SOCIAL_PROVIDER_LABELS } from "../constants";
import { useAuth } from "../hooks/useAuth";
import { useAuthAction } from "../hooks/useAuthAction";
import { useSocialProviders } from "../hooks/useSocialProviders";

export function SocialLogin() {
  const { loginWithProvider } = useAuth();
  const providers = useSocialProviders();
  const { run, error, isPending } = useAuthAction(loginWithProvider);

  if (providers.length === 0) return null;

  return (
    <div role="group" aria-label="Accedi con un altro servizio">
      <p>oppure</p>
      {providers.map((provider) => (
        <button key={provider} type="button" disabled={isPending} onClick={() => run(provider)}>
          Continua con {SOCIAL_PROVIDER_LABELS[provider]}
        </button>
      ))}
      {error && <p role="alert">{error}</p>}
    </div>
  );
}
