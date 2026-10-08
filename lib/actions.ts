"use server";

import { updateNumberOfLikes } from "@/lib/prisma-db";

/**
 * Enregistre le nouveau nombre de likes d'un média.
 * Renvoie le nombre enregistré, ou un message d'erreur si l'enregistrement échoue.
 */
export const saveLikes = async (mediaId: number, likes: number) => {
  try {
    const media = await updateNumberOfLikes(mediaId, likes);

    return { likes: media.likes };
  } catch (error) {
    console.error(error);

    return { error: "Le j'aime n'a pas pu être enregistré." };
  }
};
