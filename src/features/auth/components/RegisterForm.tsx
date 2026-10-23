import { UserPlus } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PasswordField, TextField } from "../../../components/ui/Field";
import { useI18n } from "../../../i18n/useI18n";
import {
  focusFirstInvalidField,
  hasErrors,
  isValidEmail,
  type FieldErrors,
} from "../../../lib/validation";
import { MIN_PASSWORD_LENGTH } from "../constants";
import { useAuth } from "../hooks/useAuth";
import { useAuthAction } from "../hooks/useAuthAction";
import { useAuthDialog } from "../hooks/useAuthDialog";

type RegisterField = "name" | "email" | "password";

export function RegisterForm() {
  const { t } = useI18n();
  const { register } = useAuth();
  const { close } = useAuthDialog();
  const { run, error, isPending } = useAuthAction(register, close);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors<RegisterField>>({});

  const validate = (): FieldErrors<RegisterField> => ({
    ...(!name.trim() ? { name: "auth.errors.required" as const } : {}),
    ...(!email.trim()
      ? { email: "auth.errors.required" as const }
      : !isValidEmail(email)
        ? { email: "auth.errors.invalidEmail" as const }
        : {}),
    ...(!password
      ? { password: "auth.errors.required" as const }
      : password.length < MIN_PASSWORD_LENGTH
        ? { password: "auth.errors.passwordShort" as const }
        : {}),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (hasErrors(found)) return focusFirstInvalidField(event.currentTarget, found);
    void run({ name: name.trim(), email: email.trim(), password });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label={t("auth.name")}
        name="name"
        autoComplete="nickname"
        required
        maxLength={30}
        value={name}
        onChange={setName}
        hint={t("auth.nameHint")}
        error={errors.name && t(errors.name)}
      />
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
        autoComplete="new-password"
        required
        minLength={MIN_PASSWORD_LENGTH}
        value={password}
        onChange={setPassword}
        hint={t("auth.passwordHint", { min: MIN_PASSWORD_LENGTH })}
        error={errors.password && t(errors.password, { min: MIN_PASSWORD_LENGTH })}
      />
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={isPending}>
        <UserPlus aria-hidden />
        {isPending ? t("auth.register.pending") : t("auth.register.button")}
      </button>
    </form>
  );
}
