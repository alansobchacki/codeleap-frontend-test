import { useState } from "react";
import styles from "./Main.module.css";
import Button from "../../components/Button/Button";
import useUser from "../../hooks/user/useUser";
import { useGetPosts } from "../../hooks/postService/useGetPosts";
import { useCreatePost } from "../../hooks/postService/useCreatePost";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { BiEdit } from "react-icons/bi";

export default function Main() {
  const { username } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data } = useGetPosts();
  const createPostMutation = useCreatePost();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postPayload = {
      username,
      title,
      content,
    };

    try {
      await createPostMutation.mutateAsync(postPayload);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

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
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className={styles.contentInput}
            placeholder="Content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className={styles.buttonContainer}>
            <Button type="submit" disabled={!title || !content}>
              Create
            </Button>
          </div>
        </form>

        {data?.results?.map((post) => (
          <div key={post.id} className={styles.postContainer}>
            <div className={styles.postHeader}>
              <h2>{post.title}</h2>
              {username === post.username && (
                <div className={styles.postIcons}>
                  <DeleteForeverIcon style={{ fontSize: 32 }} />
                  <BiEdit size={32} />
                </div>
              )}
            </div>
            <div className={styles.postDetailsContainer}>
              <p className={styles.postDetail}>
                <b>@{post.username}</b>
              </p>
              <p className={styles.postDetail}>{post.created_datetime}</p>
            </div>
            <div className={styles.postContentContainer}>
              <p className={styles.postContent}>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
