import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

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
    <Link to={`/post/${post.id}`} className="post-card-link" style={{ textDecoration: "none" }}>
      <div className="post-card">
        <h3 className="post-title">{post.title}</h3>
        <div className="date-created">{new Date(post.created_at).toLocaleDateString()}</div>

        {post.imageURL && post.imageURL !== "NULL" ? (
          <img src={post.imageURL} alt="post" className="post-image" />
        ) : (
          <div className="post-image-placeholder">No image</div>
        )}

        <div className="post-meta">
          <div className="post-content"><p>{post.content}</p></div>

          {tagsArray.length > 0 && (
            <div className="post-tags">
              {tagsArray.slice(0, 3).map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}

          <div className="post-footer">
            <button className="upvote-btn" onClick={handleUpvote} aria-label={`Upvote ${post.title}`}>
              ⬆ {votes}
            </button>
            <div className="comments-count">💬 {post.comments?.length ?? 0}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
