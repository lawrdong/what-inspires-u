import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("Posts")
      .select("*, Comments(id)")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else {
      const formatted = data.map(post => ({
        ...post,
        Comments: Array.isArray(post.Comments) ? post.Comments : [],
        commentCount: Array.isArray(post.Comments) ? post.Comments.length : 0
      }));
      setPosts(formatted);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async ({ title, content, imageURL, tags }) => {
    const { data, error } = await supabase
      .from("Posts")
      .insert([{ title, content: content || "", imageURL: imageURL || "", tags: tags || "" }])
      .select()
      .single();

    if (error) throw error;

    setPosts(prev => [{ ...data, Comments: [], commentCount: 0 }, ...prev]);
    return data;
  };

  return (
    <PostsContext.Provider value={{ posts, createPost, fetchPosts, loading }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
