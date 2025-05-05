import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  type = "button",
  disabled,
}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
