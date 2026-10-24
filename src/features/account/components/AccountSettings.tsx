import type { User } from "../../auth/types";
import { DeleteAccountSection } from "./DeleteAccountSection";
import { ExportSection } from "./ExportSection";
import { ProgressStatsSection } from "./ProgressStatsSection";
import { PasswordSection } from "./PasswordSection";
import { ProfileSection } from "./ProfileSection";

interface AccountSettingsProps {
  user: User;
}

export function AccountSettings({ user }: AccountSettingsProps) {
  return (
    <>
      <ProgressStatsSection />
      <ProfileSection user={user} />
      <PasswordSection />
      <ExportSection />
      <DeleteAccountSection />
    </>
  );
}
