import { LogIn, LogOut, Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { PATHS } from "../../../app/paths";
import { SITE } from "../../../app/site";
import { Button, buttonClass } from "../../ui/Button";
import { useDialog } from "../../ui/useDialog";
import { useAuth } from "../../../features/auth/hooks/useAuth";
import { useAuthDialog } from "../../../features/auth/hooks/useAuthDialog";
import { initials } from "../../../features/auth/utils/initials";
import { useSiteStatus } from "../../../features/site/hooks/useSiteStatus";
import { ThemeChoice } from "../../../features/theme/ThemeChoice";
import { useI18n } from "../../../i18n/useI18n";
import { LanguageSwitcher } from "../LanguageSwitcher";

function MenuAccount({ onNavigate }: { onNavigate: () => void }) {
  const { t } = useI18n();
  const { user, status, logout } = useAuth();
  const { open } = useAuthDialog();
  const { isAdmin } = useSiteStatus();

  if (status === "loading") return null;

  if (!user) {
    return (
      <Button
        variant="primary"
        size="lg"
        icon={<LogIn aria-hidden />}
        onClick={() => {
          onNavigate();
          open("login");
        }}
      >
        {t("nav.login")}
      </Button>
    );
  }

  return (
    <div className="menu-panel__account">
      <button
        type="button"
        className="account-pill account-pill--wide"
        onClick={() => {
          onNavigate();
          open("account");
        }}
      >
        <span className="avatar" aria-hidden="true">
          {initials(user.name)}
        </span>
        <span>{user.name}</span>
      </button>
      {isAdmin && (
        <Link to={PATHS.admin} className={buttonClass("panel", "lg")} onClick={onNavigate}>
          <Settings aria-hidden />
          {t("nav.admin")}
        </Link>
      )}
      <Button variant="panel" size="lg" icon={<LogOut aria-hidden />} onClick={() => void logout()}>
        {t("nav.logout")}
      </Button>
    </div>
  );
}

export function HeaderMenu() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useDialog(isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      <Button
        className="site-header__menu-button"
        variant="panel"
        icon={<Menu aria-hidden />}
        aria-label={t("nav.menu")}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      />
      {createPortal(
        <dialog
          ref={dialogRef}
          className="menu-panel on-panel"
          aria-label={t("nav.menu")}
          onCancel={(event) => {
            event.preventDefault();
            close();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          {isOpen && (
            <div className="menu-panel__body">
              <div className="menu-panel__bar">
                <span className="wordmark">{SITE.name}</span>
                <Button
                  variant="panel"
                  icon={<X aria-hidden />}
                  aria-label={t("common.close")}
                  onClick={close}
                />
              </div>
              <ThemeChoice />
              <div className="menu-panel__language">
                <LanguageSwitcher />
              </div>
              <MenuAccount onNavigate={close} />
            </div>
          )}
        </dialog>,
        document.body,
      )}
    </>
  );
}
