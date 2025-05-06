import { useState } from "react";
import styles from "./Main.module.css";
import Button from "../../components/Button/Button";
import useUser from "../../hooks/user/useUser";
import { useGetPosts } from "../../hooks/postService/useGetPosts";
import { useCreatePost } from "../../hooks/postService/useCreatePost";
import { useDeletePost } from "../../hooks/postService/useDeletePost";
import { useEditPost } from "../../hooks/postService/useEditPost";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { BiEdit } from "react-icons/bi";

export default function Main() {
  const { username } = useUser();
  const { data } = useGetPosts();
  const createPostMutation = useCreatePost();
  const deletePostMutation = useDeletePost();
  const editPostMutation = useEditPost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postToDelete, setPostToDelete] = useState(null);
  const [postToEdit, setPostToEdit] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

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

  const handleDeleteClick = (post) => {
    setPostToDelete(post);
  };

  const confirmDelete = async () => {
    try {
      await deletePostMutation.mutateAsync(postToDelete.id);
      setPostToDelete(null);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEditClick = (post) => {
    setPostToEdit(post);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const saveEdit = async () => {
    try {
      await editPostMutation.mutateAsync({
        id: postToEdit.id,
        title: editTitle,
        content: editContent,
      });
      setPostToEdit(null);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2>CodeLeap Network</h2>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>What's on your mind?</h2>
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
                  <DeleteForeverIcon
                    style={{ fontSize: 32, cursor: "pointer" }}
                    onClick={() => handleDeleteClick(post)}
                  />
                  <BiEdit
                    size={32}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEditClick(post)}
                  />
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

        {postToDelete && (
          <div onClose={() => setPostToDelete(null)}>
            <h3>Are you sure you want to delete this post?</h3>
            <p>This action cannot be undone.</p>
            <div className={styles.modalButtons}>
              <Button onClick={() => setPostToDelete(null)}>Cancel</Button>
              <Button
                onClick={confirmDelete}
                style={{ backgroundColor: "#FF5151", color: "white" }}
              >
                Delete
              </Button>
            </div>
          </div>
        )}

        {/* Edit Post div */}
        {postToEdit && (
          <div onClose={() => setPostToEdit(null)}>
            <h3>Edit Post</h3>
            <label htmlFor="edit-title">Title</label>
            <input
              type="text"
              id="edit-title"
              className={styles.titleInput}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
            <label htmlFor="edit-content">Content</label>
            <textarea
              id="edit-content"
              className={styles.contentInput}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              required
            />
            <div className={styles.modalButtons}>
              <Button onClick={() => setPostToEdit(null)}>Cancel</Button>
              <Button onClick={saveEdit} disabled={!editTitle || !editContent}>
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
