import styles from "./ArrowIcon.module.css";

type ArrowIconProps = {
  direction: "previous" | "next";
};

const PATHS = {
  previous: "M29.64 42.36L11.32 24L29.64 5.64L24 0L0 24L24 48L29.64 42.36Z",
  next: "M0 5.64L18.32 24L0 42.36L5.64 48L29.64 24L5.64 0L0 5.64Z",
};

const ArrowIcon = ({ direction }: ArrowIconProps) => (
  <svg
    viewBox="0 0 30 48"
    aria-hidden="true"
    focusable="false"
    className={styles.arrow}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={PATHS[direction]} fill="currentColor" />
  </svg>
);

export default ArrowIcon;
