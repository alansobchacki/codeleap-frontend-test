import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  type = "button",
  disabled,
  style,
  className = "",
}) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
