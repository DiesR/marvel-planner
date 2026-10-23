import { Save } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthAction } from "../../auth/hooks/useAuthAction";
import type { User } from "../../auth/types";

interface ProfileSectionProps {
  user: User;
}

export function ProfileSection({ user }: ProfileSectionProps) {
  const { t } = useI18n();
  const { updateName } = useAuth();
  const { run, error, isPending, isDone } = useAuthAction(updateName);
  const [name, setName] = useState(user.name);
  const headingId = useId();

  const trimmedName = name.trim();
  const hasChanges = trimmedName !== user.name;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void run(trimmedName);
  };

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("account.profile.heading")}</h2>
      <dl>
        <dt>{t("account.profile.email")}</dt>
        <dd>{user.email}</dd>
      </dl>
      <form onSubmit={handleSubmit}>
        <label>
          {t("auth.name")}
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
        {error && <p role="alert">{error}</p>}
        {isDone && !hasChanges && <p role="status">{t("account.profile.saved")}</p>}
        <button type="submit" disabled={isPending || !hasChanges || !trimmedName}>
          <Save aria-hidden />
          {isPending ? t("account.profile.saving") : t("account.profile.save")}
        </button>
      </form>
    </section>
  );
}
