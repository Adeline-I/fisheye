import Header from "@/components/Header/Header";
import { getAllMediasForPhotographer, getPhotographer } from "@/lib/prisma-db";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const findPhotographer = cache(async (id: string) => {
  const photographerId = Number(id);
  if (!Number.isInteger(photographerId)) notFound();

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

  return (
    <>
      <Header />
      <main>
        <h1>{photographer.name}</h1>
        <p>{medias.length} médias</p>
      </main>
    </>
  );
};

export default PhotographerPage;
