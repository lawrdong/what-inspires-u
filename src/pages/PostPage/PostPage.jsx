import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import PostCard from "../../components/PostCard/PostCard";
import CommentSection from "../../components/CommentSection/CommentSection";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      setLoading(true);

      // Fetch post
      const { data: postData, error: postError } = await supabase
        .from("Posts")
        .select("*")
        .eq("id", id)
        .single();

      if (postError) {
        console.error("Error fetching post:", postError);
        setLoading(false);
        return;
      }

      setPost(postData);

      // Fetch comments separately
      const { data: commentsData, error: commentsError } = await supabase
        .from("Comments")
        .select("*")
        .eq("postId", id)
        .order("created_at", { ascending: true });

      if (commentsError) console.error("Error fetching comments:", commentsError);
      setComments(commentsData || []);

      setLoading(false);
    };

    fetchPostAndComments();
  }, [id]);

  if (loading) return <h2>Loading post...</h2>;
  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="post-page">
      <PostCard post={{ ...post, comments }} /> {/* include comments count */}
      <CommentSection postId={post.id} initialComments={comments} />
    </div>
  );
}
