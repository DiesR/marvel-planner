import { KeyRound } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { MIN_PASSWORD_LENGTH } from "../../auth/constants";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthAction } from "../../auth/hooks/useAuthAction";

const EMPTY_FORM = { currentPassword: "", newPassword: "", confirmation: "" };

export function PasswordSection() {
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
      <h2 id={headingId}>Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password attuale
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
          Nuova password
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
          Conferma nuova password
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
        <p id={hintId}>
          Almeno {MIN_PASSWORD_LENGTH} caratteri. Dopo il cambio verrai disconnesso dagli altri
          dispositivi.
        </p>
        {isMismatch && <p role="alert">Le due password non coincidono.</p>}
        {error && <p role="alert">{error}</p>}
        {isDone && <p role="status">Password aggiornata.</p>}
        <button type="submit" disabled={isPending || isMismatch}>
          <KeyRound aria-hidden />
          {isPending ? "Aggiornamento…" : "Cambia password"}
        </button>
      </form>
    </section>
  );
}
