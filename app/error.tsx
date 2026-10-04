"use client";

import Header from "@/components/Header/Header";
import styles from "./error.module.css";

type ErrorProps = {
  retry: () => void;
};

const Error = ({ retry }: ErrorProps) => (
  <>
    <title>Erreur | FishEye</title>
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>Une erreur est survenue</h1>
      <p className={styles.text}>
        Les informations n’ont pas pu être chargées. Veuillez réessayer.
      </p>
      <button type="button" className="button" onClick={retry}>
        Réessayer
      </button>
    </main>
  </>
);

export default Error;
