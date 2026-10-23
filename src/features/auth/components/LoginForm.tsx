import { LogIn } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAuthSubmit } from "../hooks/useAuthSubmit";

export function LoginForm() {
  const { login } = useAuth();
  const { submit, error, isSubmitting } = useAuthSubmit(login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submit({ email, password });
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
      <button type="submit" disabled={isSubmitting}>
        <LogIn aria-hidden />
        {isSubmitting ? "Accesso in corso…" : "Accedi"}
      </button>
    </form>
  );
}
