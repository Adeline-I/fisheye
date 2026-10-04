import Header from "@/components/Header/Header";
import styles from "./loading.module.css";

const Loading = () => (
  <>
    <Header />
    <main className={styles.main}>
      <div className={styles.status} role="status">
        <span className={styles.spinner} aria-hidden="true" />
        <p className={styles.text}>Chargement…</p>
      </div>
    </main>
  </>
);

export default Loading;
