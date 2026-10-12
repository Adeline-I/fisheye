import Image from "next/image";
import styles from "./Portrait.module.css";

type PortraitProps = {
  fileName: string;
  alt: string;
  isPriority?: boolean;
};

const Portrait = ({ fileName, alt, isPriority = false }: PortraitProps) => (
  <Image
    src={`/assets/${fileName}`}
    alt={alt}
    width={200}
    height={200}
    loading={isPriority ? "eager" : "lazy"}
    fetchPriority={isPriority ? "high" : "auto"}
    className={styles.portrait}
  />
);

export default Portrait;
