import React, { useState } from "react";
import styles from "./Main.module.css";
import Button from "../../components/Button/Button";

export default function Main() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // adicionar logica depois
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h3>CodeLeap Network</h3>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h4>What's on your mind?</h4>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className={styles.titleInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className={styles.contentInput}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className={styles.buttonContainer}>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
