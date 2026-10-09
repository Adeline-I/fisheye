import type { Media } from "@/generated/prisma/client";

export const SORT_OPTIONS = ["popularity", "date", "title"] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];

const compareMedias: Record<SortOption, (a: Media, b: Media) => number> = {
  popularity: (a, b) => b.likes - a.likes,
  date: (a, b) => b.date.localeCompare(a.date),
  title: (a, b) => a.title.localeCompare(b.title, "fr"),
};

/**
 * Renvoie une copie des médias triée selon l'option choisie.
 * La liste d'origine n'est pas modifiée.
 */
export const sortMedias = (medias: Media[], sortBy: SortOption) =>
  [...medias].sort(compareMedias[sortBy]);
