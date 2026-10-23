import { KeyRound } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { MIN_PASSWORD_LENGTH } from "../../auth/constants";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthAction } from "../../auth/hooks/useAuthAction";

const EMPTY_FORM = { currentPassword: "", newPassword: "", confirmation: "" };

export function PasswordSection() {
  const { t } = useI18n();
  const { changePassword } = useAuth();
  const [form, setForm] = useState(EMPTY_FORM);
  const { run, error, isPending, isDone } = useAuthAction(changePassword, () =>
    setForm(EMPTY_FORM),
  );
  const headingId = useId();
  const hintId = useId();

  const isMismatch = form.confirmation !== "" && form.confirmation !== form.newPassword;

  const update = (field: keyof typeof EMPTY_FORM) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isMismatch) return;
    void run({ currentPassword: form.currentPassword, newPassword: form.newPassword });
  };

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("account.password.heading")}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {t("account.password.current")}
          <input
            type="password"
            name="current-password"
            autoComplete="current-password"
            required
            value={form.currentPassword}
            onChange={(event) => update("currentPassword")(event.target.value)}
          />
        </label>
        <label>
          {t("account.password.next")}
          <input
            type="password"
            name="new-password"
            autoComplete="new-password"
            required
            minLength={MIN_PASSWORD_LENGTH}
            aria-describedby={hintId}
            value={form.newPassword}
            onChange={(event) => update("newPassword")(event.target.value)}
          />
        </label>
        <label>
          {t("account.password.confirm")}
          <input
            type="password"
            name="confirm-password"
            autoComplete="new-password"
            required
            aria-invalid={isMismatch}
            value={form.confirmation}
            onChange={(event) => update("confirmation")(event.target.value)}
          />
        </label>
        <p id={hintId}>{t("account.password.hint", { min: MIN_PASSWORD_LENGTH })}</p>
        {isMismatch && <p role="alert">{t("account.password.mismatch")}</p>}
        {error && <p role="alert">{error}</p>}
        {isDone && <p role="status">{t("account.password.changed")}</p>}
        <button type="submit" disabled={isPending || isMismatch}>
          <KeyRound aria-hidden />
          {isPending ? t("account.password.changing") : t("account.password.change")}
        </button>
      </form>
    </section>
  );
}
