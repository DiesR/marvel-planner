import { Trash2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { PasswordField } from "../../../../components/ui/Field";
import { useI18n } from "../../../../i18n/useI18n";
import { focusFirstInvalidField } from "../../../../lib/validation";
import { useAuth } from "../../../auth/hooks/useAuth";
import { useAuthAction } from "../../../auth/hooks/useAuthAction";

export function DeleteAccountSection() {
  const { t } = useI18n();
  const { deleteAccount } = useAuth();
  const { run, error, isPending } = useAuthAction(deleteAccount);
  const [password, setPassword] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isPasswordMissing, setIsPasswordMissing] = useState(false);
  const headingId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isMissing = !password;
    setIsPasswordMissing(isMissing);
    if (isMissing) return focusFirstInvalidField(event.currentTarget, { password: true });
    void run(password);
  };

  return (
    <section className="delete-account" aria-labelledby={headingId}>
      <h3 id={headingId}>{t("account.delete.heading")}</h3>
      <p>{t("account.delete.warning")}</p>
      <form onSubmit={handleSubmit} noValidate>
        <PasswordField
          label={t("auth.password")}
          name="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={setPassword}
          error={isPasswordMissing && !password ? t("auth.errors.required") : null}
        />
        <label>
          <input
            type="checkbox"
            checked={isConfirmed}
            onChange={(event) => setIsConfirmed(event.target.checked)}
          />
          {t("account.delete.confirm")}
        </label>
        {error && <p role="alert">{error}</p>}
        <button
          type="submit"
          className="btn btn--primary btn--lg"
          disabled={isPending || !isConfirmed}
        >
          <Trash2 aria-hidden />
          {isPending ? t("account.delete.pending") : t("account.delete.button")}
        </button>
      </form>
    </section>
  );
}
