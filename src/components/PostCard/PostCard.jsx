import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

export default function PostCard({ post, onUpvote }) {
  const [votes, setVotes] = useState(post.upvotes || 0);
  const tagsArray = useMemo(
    () => post.tags?.split(",").map(t => t.trim()) || [],
    [post.tags]
  );

  const handleUpvote = (e) => {
    e.stopPropagation(); // prevent navigating when clicking upvote
    setVotes(votes + 1);
    onUpvote?.(post.id);
  };

  return (
    <Link to={`/post/${post.id}`} className={styles.cardLink} style={{ textDecoration: "none" }}>
      <div className={styles.card}>
        <h3 className={styles.title}>{post.title}</h3>
        <div className={styles.date}>{new Date(post.created_at).toLocaleDateString()}</div>

        {post.imageURL && post.imageURL !== "NULL" ? (
          <img src={post.imageURL} alt="post" className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>No image</div>
        )}

        <div className={styles.meta}>
          <div className={styles.content}><p>{post.content}</p></div>

          {tagsArray.length > 0 && (
            <div className={styles.tags}>
              {tagsArray.slice(0, 3).map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}

          <div className={styles.footer}>
            <button className={styles.upvoteButton} onClick={handleUpvote} aria-label={`Upvote ${post.title}`}>
              ⬆ {votes}
            </button>
            <div className={styles.commentsCount}>💬 {post.comments?.length ?? 0}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
