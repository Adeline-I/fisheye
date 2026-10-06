import CloseIcon from "@/components/CloseIcon/CloseIcon";
import { useEffect, useRef } from "react";
import styles from "./ContactModal.module.css";

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
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby="contact-title"
      onClose={onClose}
    >
      <h2 id="contact-title" className={styles.title}>
        Contactez-moi
        <br />
        {photographerName}
      </h2>
      <button
        type="button"
        className={styles.close}
        aria-label="Fermer le formulaire de contact"
        onClick={onClose}
      >
        <CloseIcon />
      </button>
      <form className={styles.form} action={handleSubmit}>
        <label htmlFor="contact-first-name" className={styles.label}>
          Prénom
        </label>
        <input
          id="contact-first-name"
          className={styles.field}
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
        />
        <label htmlFor="contact-last-name" className={styles.label}>
          Nom
        </label>
        <input
          id="contact-last-name"
          className={styles.field}
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
        />
        <label htmlFor="contact-email" className={styles.label}>
          Email
        </label>
        <input
          id="contact-email"
          className={styles.field}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <label htmlFor="contact-message" className={styles.label}>
          Votre message
        </label>
        <textarea
          id="contact-message"
          className={`${styles.field} ${styles.message}`}
          name="message"
          rows={4}
          required
        />
        <button type="submit" className={`button ${styles.submit}`}>
          Envoyer
        </button>
      </form>
    </dialog>
  );
};

export default ContactModal;
