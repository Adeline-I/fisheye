import Modal from "@/components/Modal/Modal";
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
  const handleSubmit = (formData: FormData) => {
    console.log(Object.fromEntries(formData));
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeLabel="Fermer le formulaire de contact"
      className={styles.modal}
      ariaLabelledBy="contact-title"
    >
      <h2 id="contact-title" className={styles.title}>
        Contactez-moi
        <br />
        {photographerName}
      </h2>
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
    </Modal>
  );
};

export default ContactModal;
