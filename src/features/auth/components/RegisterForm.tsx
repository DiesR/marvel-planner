import { UserPlus } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { MIN_PASSWORD_LENGTH } from "../constants";
import { useAuth } from "../hooks/useAuth";
import { useAuthAction } from "../hooks/useAuthAction";

export function RegisterForm() {
  const { register } = useAuth();
  const { run, error, isPending } = useAuthAction(register);
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
        Nome
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
          autoComplete="new-password"
          required
          minLength={MIN_PASSWORD_LENGTH}
          aria-describedby={passwordHintId}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <p id={passwordHintId}>Almeno {MIN_PASSWORD_LENGTH} caratteri.</p>
      {error && <p role="alert">{error}</p>}
      <button type="submit" disabled={isPending}>
        <UserPlus aria-hidden />
        {isPending ? "Registrazione in corso…" : "Crea account"}
      </button>
    </form>
  );
}
