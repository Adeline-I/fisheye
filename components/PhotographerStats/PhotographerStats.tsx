import HeartIcon from "@/components/HeartIcon/HeartIcon";
import styles from "./PhotographerStats.module.css";

type PhotographerStatsProps = {
  totalLikes: number;
  price: number;
};

const PhotographerStats = ({ totalLikes, price }: PhotographerStatsProps) => (
  <div className={styles.stats}>
    <p className={styles.likes}>
      {totalLikes.toLocaleString("fr-FR")}
      <HeartIcon />
    </p>
    <p>{`${price}€ / jour`}</p>
  </div>
);

export default PhotographerStats;
