import { RouterProvider } from "react-router";
import { AuthDialogProvider } from "../features/auth/context/AuthDialogProvider";
import { AuthProvider } from "../features/auth/context/AuthProvider";
import { PrivacySettingsProvider } from "../features/privacy/context/PrivacySettingsProvider";
import { I18nProvider } from "../i18n/I18nProvider";
import { router } from "./router";

export function App() {
  return (
    <I18nProvider>
      <AuthProvider>
        <AuthDialogProvider>
          <PrivacySettingsProvider>
            <RouterProvider router={router} />
          </PrivacySettingsProvider>
        </AuthDialogProvider>
      </AuthProvider>
    </I18nProvider>
  );
}
