import type { User } from "../../auth/types";
import { useHasPassword } from "../hooks/useHasPassword";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { PasswordSection } from "./PasswordSection";
import { ProfileSection } from "./ProfileSection";

interface AccountSettingsProps {
  user: User;
}

export function AccountSettings({ user }: AccountSettingsProps) {
  const hasPassword = useHasPassword();

  return (
    <section aria-labelledby="account-title">
      <h1 id="account-title">Il tuo account</h1>
      <ProfileSection user={user} />
      {hasPassword && <PasswordSection />}
      {hasPassword !== null && <DeleteAccountSection requiresPassword={hasPassword} />}
    </section>
  );
}
