import React from "react";
import styles from "./Main.module.css";
import Button from "../../components/Button/Button";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h2>CodeLeap Network!</h2>
      </div>
    </div>
  );
}
