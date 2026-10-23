import { LogIn } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { PATHS } from "../../../app/paths";
import { useI18n } from "../../../i18n/useI18n";
import { useAuth } from "../hooks/useAuth";
import { useAuthAction } from "../hooks/useAuthAction";

export function LoginForm() {
  const { t } = useI18n();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { run, error, isPending } = useAuthAction(login, () => navigate(PATHS.home));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void run({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {t("auth.email")}
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        {t("auth.password")}
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={isPending}>
        <LogIn aria-hidden />
        {isPending ? t("auth.login.pending") : t("auth.login.button")}
      </button>
    </form>
  );
}
