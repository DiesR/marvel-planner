import { LogIn } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAuthAction } from "../hooks/useAuthAction";

export function LoginForm() {
  const { login } = useAuth();
  const { run, error, isPending } = useAuthAction(login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void run({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
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
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={isPending}>
        <LogIn aria-hidden />
        {isPending ? "Accesso in corso…" : "Accedi"}
      </button>
    </form>
  );
}
