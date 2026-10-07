import CloseIcon from "@/components/icons/CloseIcon/CloseIcon";
import { type KeyboardEvent, type ReactNode, useEffect, useRef } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  closeLabel: string;
  className: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLDialogElement>) => void;
  children: ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  closeLabel,
  className,
  ariaLabel,
  ariaLabelledBy,
  onKeyDown,
  children,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${className}`}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      onClose={onClose}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className={styles.close}
        aria-label={closeLabel}
        onClick={onClose}
      >
        <CloseIcon />
      </button>
      {children}
    </dialog>
  );
};

export default Modal;
