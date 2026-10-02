import Portrait from "@/components/Portrait/Portrait";
import type { Photographer } from "@/generated/prisma/client";
import Link from "next/link";
import styles from "./PhotographerCard.module.css";

type PhotographerCardProps = {
  photographer: Photographer;
};

const PhotographerCard = ({ photographer }: PhotographerCardProps) => {
  const { id, name, city, country, tagline, price, portrait } = photographer;

  return (
    <article className={styles.card}>
      <Link href={`/photographe/${id}`} className={styles.link}>
        <Portrait fileName={portrait} alt="" />
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <p className={styles.location}>{`${city}, ${country}`}</p>
      <p className={styles.tagline}>{tagline}</p>
      <p className={styles.price}>{`${price}€/jour`}</p>
    </article>
  );
};

export default PhotographerCard;
