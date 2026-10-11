import HeartIcon from "@/components/icons/HeartIcon/HeartIcon";
import type { Media } from "@/generated/prisma/client";
import Image from "next/image";
import styles from "./MediaCard.module.css";

const IMAGE_SIZES =
  "(max-width: 75rem) calc((100vw - 18.4375rem) / 2), calc((100vw - 24.375rem) / 3)";

type MediaCardProps = {
  media: Media;
  hasError: boolean;
  isPriority: boolean;
  onOpen: () => void;
  onLike: () => void;
};

const MediaCard = ({
  media,
  hasError,
  isPriority,
  onOpen,
  onLike,
}: MediaCardProps) => {
  const { title, image, video, likes } = media;

  return (
    <article>
      <button
        type="button"
        className={styles.open}
        aria-label={`${title}, vue agrandie`}
        onClick={onOpen}
      >
        {image ? (
          <Image
            src={`/assets/${image}`}
            alt={title}
            width={350}
            height={300}
            sizes={IMAGE_SIZES}
            loading={isPriority ? "eager" : "lazy"}
            fetchPriority={isPriority ? "high" : "auto"}
            className={styles.media}
          />
        ) : (
          <video
            src={`/assets/${video}`}
            aria-label={title}
            preload="metadata"
            muted
            className={styles.media}
          />
        )}
      </button>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.likes}>
          {likes}
          <button
            type="button"
            className={styles.like}
            aria-label={`J'aime ${title}`}
            onClick={onLike}
          >
            <HeartIcon decorative />
          </button>
        </p>
      </div>
      {hasError && (
        <p role="alert" className={styles.error}>
          Le j&apos;aime n&apos;a pas pu être enregistré.
        </p>
      )}
    </article>
  );
};

export default MediaCard;
