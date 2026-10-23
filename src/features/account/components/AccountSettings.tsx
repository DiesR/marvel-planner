import type { User } from "../../auth/types";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { PasswordSection } from "./PasswordSection";
import { ProfileSection } from "./ProfileSection";

interface AccountSettingsProps {
  user: User;
}

export function AccountSettings({ user }: AccountSettingsProps) {
  return (
    <section aria-labelledby="account-title">
      <h1 id="account-title">Il tuo account</h1>
      <ProfileSection user={user} />
      <PasswordSection />
      <DeleteAccountSection />
    </section>
  );
}
