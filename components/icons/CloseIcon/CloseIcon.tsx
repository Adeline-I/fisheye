import styles from "./CloseIcon.module.css";

const CloseIcon = () => (
  <svg
    viewBox="0 0 42 42"
    aria-hidden="true"
    focusable="false"
    className={styles.close}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
      fill="currentColor"
    />
  </svg>
);

export default CloseIcon;
