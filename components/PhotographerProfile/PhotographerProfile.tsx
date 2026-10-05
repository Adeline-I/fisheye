import ContactButton from "@/components/ContactButton/ContactButton";
import Portrait from "@/components/Portrait/Portrait";
import type { Photographer } from "@/generated/prisma/client";
import styles from "./PhotographerProfile.module.css";

type PhotographerProfileProps = {
  photographer: Photographer;
};

const PhotographerProfile = ({ photographer }: PhotographerProfileProps) => {
  const { name, city, country, tagline, portrait } = photographer;

  return (
    <section className={styles.profile} aria-labelledby="photographer-name">
      <div>
        <h1 id="photographer-name" className={styles.name}>
          {name}
        </h1>
        <p className={styles.location}>{`${city}, ${country}`}</p>
        <p className={styles.tagline}>{tagline}</p>
      </div>
      <ContactButton photographerName={name} className={styles.contact} />
      <Portrait fileName={portrait} alt={name} />
    </section>
  );
};

export default PhotographerProfile;
