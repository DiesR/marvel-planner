import { X } from "lucide-react";
import { useId, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../../../i18n/useI18n";
import { Button } from "../Button";
import { useDialog } from "../useDialog";

interface ModalProps {
  isOpen: boolean;
  title: string;
  titleLang?: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, title, titleLang, onClose, children }: ModalProps) {
  const { t } = useI18n();
  const dialogRef = useDialog(isOpen);
  const titleId = useId();

  return createPortal(
    <dialog
      ref={dialogRef}
      className="dialog"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <header className="dialog__header">
        <h2 id={titleId} lang={titleLang}>
          {title}
        </h2>
        <Button
          variant="soft"
          icon={<X aria-hidden />}
          aria-label={t("common.close")}
          onClick={onClose}
        />
      </header>
      {isOpen && <div className="dialog__body">{children}</div>}
    </dialog>,
    document.body,
  );
}
