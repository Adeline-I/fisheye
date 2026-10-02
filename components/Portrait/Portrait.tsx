import Image from "next/image";
import styles from "./Portrait.module.css";

type PortraitProps = {
  fileName: string;
  alt: string;
};

const Portrait = ({ fileName, alt }: PortraitProps) => (
  <Image
    src={`/assets/${fileName}`}
    alt={alt}
    width={200}
    height={200}
    className={styles.portrait}
  />
);

export default Portrait;
