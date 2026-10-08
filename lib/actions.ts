"use server";

import { incrementNumberOfLikes } from "@/lib/prisma-db";
import { refresh } from "next/cache";

/**
 * Ajoute un like à un média et met à jour la page.
 * Renvoie le nombre enregistré, ou un message d'erreur si l'enregistrement échoue.
 */
export const likeMedia = async (mediaId: number) => {
  try {
    const media = await incrementNumberOfLikes(mediaId);

    refresh();

    return { likes: media.likes };
  } catch (error) {
    console.error(error);

    return { error: "Le j'aime n'a pas pu être enregistré." };
  }
};
