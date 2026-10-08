import { updateNumberOfLikes } from "@/lib/prisma-db";

type Context = {
  params: Promise<{ id: string }>;
};

export const POST = async (request: Request, { params }: Context) => {
  try {
    const { id } = await params;
    const { likes } = await request.json();
    const media = await updateNumberOfLikes(Number(id), likes);

    return Response.json({ likes: media.likes });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Le j'aime n'a pas pu être enregistré." },
      { status: 500 },
    );
  }
};
