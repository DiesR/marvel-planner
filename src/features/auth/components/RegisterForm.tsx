import { UserPlus } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { PATHS } from "../../../app/paths";
import { useI18n } from "../../../i18n/useI18n";
import { MIN_PASSWORD_LENGTH } from "../constants";
import { useAuth } from "../hooks/useAuth";
import { useAuthAction } from "../hooks/useAuthAction";

export function RegisterForm() {
  const { t } = useI18n();
  const { register } = useAuth();
  const navigate = useNavigate();
  const { run, error, isPending } = useAuthAction(register, () => navigate(PATHS.home));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordHintId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void run({ name: name.trim(), email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {t("auth.name")}
        <input
          type="text"
          name="name"
          autoComplete="nickname"
          required
          maxLength={60}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
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
          autoComplete="new-password"
          required
          minLength={MIN_PASSWORD_LENGTH}
          aria-describedby={passwordHintId}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <p id={passwordHintId}>{t("auth.passwordHint", { min: MIN_PASSWORD_LENGTH })}</p>
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={isPending}>
        <UserPlus aria-hidden />
        {isPending ? t("auth.register.pending") : t("auth.register.button")}
      </button>
    </form>
  );
}
