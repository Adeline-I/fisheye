import Header from "@/components/Header/Header";
import Link from "next/link";
import styles from "./not-found.module.css";

const NotFound = () => (
  <>
    <title>Page introuvable | FishEye</title>
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>Page introuvable</h1>
      <p className={styles.text}>
        Désolé, la page que vous cherchez n’existe pas.
      </p>
      <Link href="/" className="button">
        Retour à l’accueil
      </Link>
    </main>
  </>
);

export default NotFound;
