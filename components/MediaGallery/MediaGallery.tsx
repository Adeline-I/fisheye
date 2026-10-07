"use client";

import Lightbox from "@/components/Lightbox/Lightbox";
import MediaCard from "@/components/MediaCard/MediaCard";
import type { Media } from "@/generated/prisma/client";
import { useState } from "react";
import styles from "./MediaGallery.module.css";

type MediaGalleryProps = {
  medias: Media[];
};

const MediaGallery = ({ medias }: MediaGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <>
      <ul className={styles.gallery}>
        {medias.map((media, index) => (
          <li key={`media-${media.id}`}>
            <MediaCard media={media} onOpen={() => setCurrentIndex(index)} />
          </li>
        ))}
      </ul>
      <Lightbox
        medias={medias}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
        onClose={() => setCurrentIndex(null)}
      />
    </>
  );
};

export default MediaGallery;
