import Header from "@/components/Header/Header";
import { getAllPhotographers } from "@/lib/prisma-db";

const Home = async () => {
  const photographers = await getAllPhotographers();

  return (
    <>
      <Header title="Nos photographes" />
      <main>
        <ul>
          {photographers.map((photographer) => (
            <li key={photographer.id}>{photographer.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
