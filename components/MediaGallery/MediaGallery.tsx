"use client";

import Lightbox from "@/components/Lightbox/Lightbox";
import MediaCard from "@/components/MediaCard/MediaCard";
import PhotographerStats from "@/components/PhotographerStats/PhotographerStats";
import type { Media } from "@/generated/prisma/client";
import { saveLikes } from "@/lib/actions";
import { useState } from "react";
import styles from "./MediaGallery.module.css";

type MediaGalleryProps = {
  medias: Media[];
  price: number;
};

const MediaGallery = ({ medias, price }: MediaGalleryProps) => {
  const [mediaList, setMediaList] = useState(medias);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [errorMediaId, setErrorMediaId] = useState<number | null>(null);
  const totalLikes = mediaList.reduce((total, media) => total + media.likes, 0);

  const addLike = async (media: Media) => {
    try {
      const result = await saveLikes(media.id, media.likes + 1);

      if ("error" in result) {
        setErrorMediaId(media.id);
        return;
      }

      setMediaList((list) =>
        list.map((item) =>
          item.id === media.id ? { ...item, likes: result.likes } : item,
        ),
      );
      setErrorMediaId(null);
    } catch {
      setErrorMediaId(media.id);
    }
  };

  return (
    <>
      <ul className={styles.gallery}>
        {mediaList.map((media, index) => (
          <li key={`media-${media.id}`}>
            <MediaCard
              media={media}
              hasError={errorMediaId === media.id}
              onOpen={() => setCurrentIndex(index)}
              onLike={() => addLike(media)}
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
