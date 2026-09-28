import { getAllPhotographers } from "@/lib/prisma-db";

/** Page temporaire : vérifie la connexion à la base (remplacée à l'issue #3). */
const Home = async () => {
  const photographers = await getAllPhotographers();

  return (
    <main>
      <h1>Photographes</h1>
      <ul>
        {photographers.map((photographer) => (
          <li key={photographer.id}>{photographer.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
