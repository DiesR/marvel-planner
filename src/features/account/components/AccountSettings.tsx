import { useI18n } from "../../../i18n/useI18n";
import type { User } from "../../auth/types";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { PasswordSection } from "./PasswordSection";
import { ProfileSection } from "./ProfileSection";

interface AccountSettingsProps {
  user: User;
}

export function AccountSettings({ user }: AccountSettingsProps) {
  const { t } = useI18n();

  return (
    <section aria-labelledby="account-title">
      <h1 id="account-title">{t("account.title")}</h1>
      <ProfileSection user={user} />
      <PasswordSection />
      <DeleteAccountSection />
    </section>
  );
}
