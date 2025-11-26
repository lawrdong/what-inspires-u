import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function CommentSection({ postId, initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState("");

  const handleAddComment = async () => {
    if (!text.trim()) return;

    // insert comment in Supabase
    const { data, error } = await supabase
      .from("Comments")
      .insert([{ text, postId }])
      .select()
      .single();

    if (error) {
      console.error(error);
    } else {
      setComments(prev => [...prev, data]);
      setText("");
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments ({comments.length})</h3>
      <div className="comments-list">
        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map(({ id, text, created_at }) => (
            <div key={id} className="comment-item">
              <p>{text}</p>
              <span className="comment-date">{new Date(created_at).toLocaleTimeString()}</span>
            </div>
          ))

        )}
      </div>

      <div className="comment-input-box">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment}>Send</button>
      </div>
    </div>
  );
}
