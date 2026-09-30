import Header from "@/components/Header/Header";
import PhotographerCard from "@/components/PhotographerCard/PhotographerCard";
import { getAllPhotographers } from "@/lib/prisma-db";
import styles from "./page.module.css";

const Home = async () => {
  const photographers = await getAllPhotographers();

  return (
    <>
      <Header title="Nos photographes" />
      <main className={styles.main}>
        <ul className={styles.list}>
          {photographers.map((photographer) => (
            <li key={photographer.id}>
              <PhotographerCard photographer={photographer} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
