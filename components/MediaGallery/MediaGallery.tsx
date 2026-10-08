"use client";

import Lightbox from "@/components/Lightbox/Lightbox";
import MediaCard from "@/components/MediaCard/MediaCard";
import PhotographerStats from "@/components/PhotographerStats/PhotographerStats";
import type { Media } from "@/generated/prisma/client";
import { useState } from "react";
import styles from "./MediaGallery.module.css";

type MediaGalleryProps = {
  medias: Media[];
  price: number;
};

const MediaGallery = ({ medias, price }: MediaGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const totalLikes = medias.reduce((total, media) => total + media.likes, 0);

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
      <PhotographerStats totalLikes={totalLikes} price={price} />
    </>
  );
};

export default MediaGallery;
