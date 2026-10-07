import MediaCard from "@/components/MediaCard/MediaCard";
import type { Media } from "@/generated/prisma/client";
import styles from "./MediaGallery.module.css";

type MediaGalleryProps = {
  medias: Media[];
};

const MediaGallery = ({ medias }: MediaGalleryProps) => (
  <ul className={styles.gallery}>
    {medias.map((media) => (
      <li key={`media-${media.id}`}>
        <MediaCard media={media} />
      </li>
    ))}
  </ul>
);

export default MediaGallery;
