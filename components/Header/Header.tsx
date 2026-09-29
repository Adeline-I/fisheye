import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

type HeaderProps = {
  title?: string;
};

const Header = ({ title }: HeaderProps) => (
  <header className={styles.header} role="banner">
    <Link href="/" className={styles.logoLink}>
      <Image
        src="/images/logo.svg"
        alt="FishEye, page d'accueil"
        width={200}
        height={50}
      />
    </Link>
    {title && <h1 className={styles.title}>{title}</h1>}
  </header>
);

export default Header;
