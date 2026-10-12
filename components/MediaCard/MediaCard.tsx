import HeartIcon from "@/components/icons/HeartIcon/HeartIcon";
import type { Media } from "@/generated/prisma/client";
import Image from "next/image";
import styles from "./MediaCard.module.css";

const IMAGE_SIZES = "(max-width: 50rem) 100vw, (max-width: 75rem) 50vw, 33vw";

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
  const { id, title, image, video, likes } = media;
  const likesId = `likes-${id}`;

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
          <span id={likesId} aria-live="polite">
            {likes}
          </span>
          <button
            type="button"
            className={styles.like}
            aria-label={`J'aime ${title}`}
            aria-describedby={likesId}
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
