import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "../../components/Button/Button";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}!`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.modal}>
        <h2 className={styles.greetings}>Welcome to CodeLeap Network!</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username" className={styles.label}>
            Please enter your username
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="John doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className={styles.buttonContainer}>
            <Button type="submit">ENTER</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
