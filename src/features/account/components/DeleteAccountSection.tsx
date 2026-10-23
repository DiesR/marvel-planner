import { Trash2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthAction } from "../../auth/hooks/useAuthAction";

export function DeleteAccountSection() {
  const { t } = useI18n();
  const { deleteAccount } = useAuth();
  const { run, error, isPending } = useAuthAction(deleteAccount);
  const [password, setPassword] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const headingId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void run(password);
  };

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("account.delete.heading")}</h2>
      <p>{t("account.delete.warning")}</p>
      <form onSubmit={handleSubmit}>
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
        <label>
          <input
            type="checkbox"
            required
            checked={isConfirmed}
            onChange={(event) => setIsConfirmed(event.target.checked)}
          />
          {t("account.delete.confirm")}
        </label>
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={isPending || !isConfirmed}>
          <Trash2 aria-hidden />
          {isPending ? t("account.delete.pending") : t("account.delete.button")}
        </button>
      </form>
    </section>
  );
}
