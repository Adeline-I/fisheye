import Header from "@/components/Header/Header";
import PhotographerCard from "@/components/PhotographerCard/PhotographerCard";
import { getAllPhotographers } from "@/lib/prisma-db";
import styles from "./page.module.css";

const FIRST_ROW_COUNT = 3;

const Home = async () => {
  const photographers = await getAllPhotographers();

  return (
    <>
      <Header title="Nos photographes" />
      <main className={styles.main}>
        <ul className={styles.list}>
          {photographers.map((photographer, index) => (
            <li key={`photographer-${photographer.id}`}>
              <PhotographerCard
                photographer={photographer}
                isPriority={index < FIRST_ROW_COUNT}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
