import styles from "./ChevronIcon.module.css";

type ChevronIconProps = {
  direction: "up" | "down";
};

const PATHS = {
  up: "M14.12 9.88L8 3.77333L1.88 9.88L0 8L8 0L16 8L14.12 9.88Z",
  down: "M14.12 0L8 6.10667L1.88 0L0 1.88L8 9.88L16 1.88L14.12 0Z",
};

const ChevronIcon = ({ direction }: ChevronIconProps) => (
  <svg
    viewBox="0 0 16 10"
    aria-hidden="true"
    focusable="false"
    className={styles.chevron}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={PATHS[direction]} fill="currentColor" />
  </svg>
);

export default ChevronIcon;
