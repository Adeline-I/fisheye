import HeartIcon from "@/components/icons/HeartIcon/HeartIcon";
import type { Media } from "@/generated/prisma/client";
import Image from "next/image";
import styles from "./MediaCard.module.css";

type MediaCardProps = {
  media: Media;
  onOpen: () => void;
};

const MediaCard = ({ media, onOpen }: MediaCardProps) => {
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
          <HeartIcon />
        </p>
      </div>
    </article>
  );
};

export default MediaCard;
