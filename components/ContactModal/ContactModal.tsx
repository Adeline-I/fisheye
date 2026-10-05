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

  const handleSubmit = (formData: FormData) => {
    console.log(Object.fromEntries(formData));
    onClose();
  };

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
      <form action={handleSubmit}>
        <label htmlFor="contact-first-name">Prénom</label>
        <input
          id="contact-first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
        />
        <label htmlFor="contact-last-name">Nom</label>
        <input
          id="contact-last-name"
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
        />
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <label htmlFor="contact-message">Votre message</label>
        <textarea id="contact-message" name="message" rows={5} required />
        <button type="submit" className="button">
          Envoyer
        </button>
      </form>
    </dialog>
  );
};

export default ContactModal;
