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
  const [mediaList, setMediaList] = useState(medias);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const totalLikes = mediaList.reduce((total, media) => total + media.likes, 0);

  const addLike = (mediaId: number) => {
    setMediaList((list) =>
      list.map((media) =>
        media.id === mediaId ? { ...media, likes: media.likes + 1 } : media,
      ),
    );
  };

  return (
    <>
      <ul className={styles.gallery}>
        {mediaList.map((media, index) => (
          <li key={`media-${media.id}`}>
            <MediaCard
              media={media}
              onOpen={() => setCurrentIndex(index)}
              onLike={() => addLike(media.id)}
            />
          </li>
        ))}
      </ul>
      <Lightbox
        medias={mediaList}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
        onClose={() => setCurrentIndex(null)}
      />
      <PhotographerStats totalLikes={totalLikes} price={price} />
    </>
  );
};

export default MediaGallery;
