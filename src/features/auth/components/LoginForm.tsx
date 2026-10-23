import { LogIn } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PasswordField, TextField } from "../../../components/ui/Field";
import { useI18n } from "../../../i18n/useI18n";
import {
  focusFirstInvalidField,
  hasErrors,
  isValidEmail,
  type FieldErrors,
} from "../../../lib/validation";
import { useAuth } from "../hooks/useAuth";
import { useAuthAction } from "../hooks/useAuthAction";
import { useAuthDialog } from "../hooks/useAuthDialog";

type LoginField = "email" | "password";

export function LoginForm() {
  const { t } = useI18n();
  const { login } = useAuth();
  const { close } = useAuthDialog();
  const { run, error, isPending } = useAuthAction(login, close);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors<LoginField>>({});

  const validate = (): FieldErrors<LoginField> => ({
    ...(!email.trim()
      ? { email: "auth.errors.required" as const }
      : !isValidEmail(email)
        ? { email: "auth.errors.invalidEmail" as const }
        : {}),
    ...(!password ? { password: "auth.errors.required" as const } : {}),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (hasErrors(found)) return focusFirstInvalidField(event.currentTarget, found);
    void run({ email: email.trim(), password });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label={t("auth.email")}
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={setEmail}
        error={errors.email && t(errors.email)}
      />
      <PasswordField
        label={t("auth.password")}
        name="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={setPassword}
        error={errors.password && t(errors.password)}
      />
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={isPending}>
        <LogIn aria-hidden />
        {isPending ? t("auth.login.pending") : t("auth.login.button")}
      </button>
    </form>
  );
}
