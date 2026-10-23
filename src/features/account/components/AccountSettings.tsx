import type { User } from "../../auth/types";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { ExportSection } from "./ExportSection";
import { PasswordSection } from "./PasswordSection";
import { ProfileSection } from "./ProfileSection";

interface AccountSettingsProps {
  user: User;
}

export function AccountSettings({ user }: AccountSettingsProps) {
  return (
    <>
      <ProfileSection user={user} />
      <PasswordSection />
      <ExportSection />
      <DeleteAccountSection />
    </>
  );
}
