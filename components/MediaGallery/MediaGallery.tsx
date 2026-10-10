"use client";

import Lightbox from "@/components/Lightbox/Lightbox";
import MediaCard from "@/components/MediaCard/MediaCard";
import PhotographerStats from "@/components/PhotographerStats/PhotographerStats";
import SortMenu from "@/components/SortMenu/SortMenu";
import type { Media } from "@/generated/prisma/client";
import { likeMedia } from "@/lib/actions";
import { sortMedias, type SortOption } from "@/lib/sort-medias";
import { useState } from "react";
import styles from "./MediaGallery.module.css";

const DEFAULT_SORT: SortOption = "popularity";

type MediaGalleryProps = {
  medias: Media[];
  price: number;
};

const MediaGallery = ({ medias, price }: MediaGalleryProps) => {
  const [sortBy, setSortBy] = useState<SortOption>(DEFAULT_SORT);
  const [mediaList, setMediaList] = useState(() =>
    sortMedias(medias, DEFAULT_SORT),
  );
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [errorMediaId, setErrorMediaId] = useState<number | null>(null);
  const totalLikes = mediaList.reduce((total, media) => total + media.likes, 0);

  const changeSort = (option: SortOption) => {
    setSortBy(option);
    setMediaList((list) => sortMedias(list, option));
  };

  const addLike = async (mediaId: number) => {
    try {
      const result = await likeMedia(mediaId);

      if ("error" in result) {
        setErrorMediaId(mediaId);
        return;
      }

      setMediaList((list) =>
        list.map((media) =>
          media.id === mediaId ? { ...media, likes: result.likes } : media,
        ),
      );
      setErrorMediaId((id) => (id === mediaId ? null : id));
    } catch {
      setErrorMediaId(mediaId);
    }
  };

  return (
    <>
      <SortMenu sortBy={sortBy} onSort={changeSort} />
      <ul className={styles.gallery}>
        {mediaList.map((media, index) => (
          <li key={`media-${media.id}`}>
            <MediaCard
              media={media}
              hasError={errorMediaId === media.id}
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
