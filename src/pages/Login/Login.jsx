import React, { useState } from "react";
import styles from "./Login.module.css";
import useUser from "../../hooks/user/useUser";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const { setUsername } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputUsername);
    navigate("/main");
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
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
          <div className={styles.buttonContainer}>
            <Button type="submit" disabled={!inputUsername}>
              ENTER
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
