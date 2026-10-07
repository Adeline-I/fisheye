import ArrowIcon from "@/components/icons/ArrowIcon/ArrowIcon";
import Modal from "@/components/Modal/Modal";
import type { Media } from "@/generated/prisma/client";
import Image from "next/image";
import type { KeyboardEvent } from "react";
import styles from "./Lightbox.module.css";

type LightboxProps = {
  medias: Media[];
  currentIndex: number | null;
  onNavigate: (index: number) => void;
  onClose: () => void;
};

const Lightbox = ({
  medias,
  currentIndex,
  onNavigate,
  onClose,
}: LightboxProps) => {
  const media = currentIndex === null ? undefined : medias[currentIndex];

  const showPrevious = () => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + medias.length) % medias.length);
  };

  const showNext = () => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % medias.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.target instanceof HTMLVideoElement) return;

    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  return (
    <Modal
      isOpen={media !== undefined}
      onClose={onClose}
      closeLabel="Fermer la vue agrandie"
      className={styles.lightbox}
      ariaLabel="Vue agrandie du média"
      onKeyDown={handleKeyDown}
    >
      {media && (
        <div className={styles.content}>
          <button
            type="button"
            className={`${styles.nav} ${styles.previous}`}
            aria-label="Média précédent"
            onClick={showPrevious}
          >
            <ArrowIcon direction="previous" />
          </button>
          {media.image ? (
            <Image
              src={`/assets/${media.image}`}
              alt={media.title}
              width={0}
              height={0}
              sizes="100vw"
              className={styles.media}
            />
          ) : (
            <video
              src={`/assets/${media.video}`}
              aria-label={media.title}
              controls
              className={styles.media}
            />
          )}
          <p className={styles.title}>{media.title}</p>
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            aria-label="Média suivant"
            onClick={showNext}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Lightbox;
