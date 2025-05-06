import { useState, useEffect } from "react";
import styles from "./Main.module.css";
import Button from "../../components/Button/Button";
import useUser from "../../hooks/user/useUser";
import { useGetPosts } from "../../hooks/postService/useGetPosts";

export default function Main() {
  const { username } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data } = useGetPosts();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  // temporary for debugging
  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2>CodeLeap Network</h2>
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

        {data?.results?.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <div className={styles.postHeader}>
              <h2>{post.title}</h2>
              <div className={styles.postIcons}>😂😂</div>
            </div>
            <div className={styles.postDetailsContainer}>
              <p className={styles.postDetail}>
                <b>@{post.username}</b>
              </p>
              <p className={styles.postDetail}>{post.created_datetime}</p>
            </div>
            <p className={styles.postContentContainer}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
