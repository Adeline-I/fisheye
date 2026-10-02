import Header from "@/components/Header/Header";
import MediaCard from "@/components/MediaCard/MediaCard";
import PhotographerProfile from "@/components/PhotographerProfile/PhotographerProfile";
import PhotographerStats from "@/components/PhotographerStats/PhotographerStats";
import { getAllMediasForPhotographer, getPhotographer } from "@/lib/prisma-db";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

const DIGITS_ONLY = /^\d+$/;
const MAX_DB_ID = 2147483647;

const findPhotographer = cache(async (id: string) => {
  if (!DIGITS_ONLY.test(id)) notFound();

  const photographerId = Number(id);
  if (photographerId > MAX_DB_ID) notFound();

  const photographer = await getPhotographer(photographerId);
  if (!photographer) notFound();

  return photographer;
});

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  const photographer = await findPhotographer(id);

  return { title: photographer.name };
};

const PhotographerPage = async ({ params }: Props) => {
  const { id } = await params;
  const photographer = await findPhotographer(id);
  const medias = await getAllMediasForPhotographer(photographer.id);
  const totalLikes = medias.reduce((total, media) => total + media.likes, 0);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <PhotographerProfile photographer={photographer} />
        <ul className={styles.gallery}>
          {medias.map((media) => (
            <li key={`media-${media.id}`}>
              <MediaCard media={media} />
            </li>
          ))}
        </ul>
        <PhotographerStats totalLikes={totalLikes} price={photographer.price} />
      </main>
    </>
  );
};

export default PhotographerPage;
