import CloseIcon from "@/components/CloseIcon/CloseIcon";
import { useEffect, useRef } from "react";

type ContactModalProps = {
  photographerName: string;
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({
  photographerName,
  isOpen,
  onClose,
}: ContactModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} aria-labelledby="contact-title" onClose={onClose}>
      <h2 id="contact-title">
        Contactez-moi
        <br />
        {photographerName}
      </h2>
      <button
        type="button"
        aria-label="Fermer le formulaire de contact"
        onClick={onClose}
      >
        <CloseIcon />
      </button>
    </dialog>
  );
};

export default ContactModal;
