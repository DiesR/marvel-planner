import { Trash2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthAction } from "../../auth/hooks/useAuthAction";

export function DeleteAccountSection() {
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
      <h2 id={headingId}>Elimina account</h2>
      <p>
        L'account, i progressi salvati e tutte le sessioni attive verranno cancellati in modo
        definitivo. L'operazione non può essere annullata.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Password
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
          Ho capito che l'eliminazione è definitiva
        </label>
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={isPending || !isConfirmed}>
          <Trash2 aria-hidden />
          {isPending ? "Eliminazione…" : "Elimina definitivamente"}
        </button>
      </form>
    </section>
  );
}
