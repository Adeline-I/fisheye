"use client";

import ContactModal from "@/components/ContactModal/ContactModal";
import { useState } from "react";

type ContactButtonProps = {
  photographerName: string;
  className: string;
};

const ContactButton = ({ photographerName, className }: ContactButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`button ${className}`}
        onClick={() => setIsOpen(true)}
      >
        Contactez-moi
      </button>
      <ContactModal
        photographerName={photographerName}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ContactButton;
