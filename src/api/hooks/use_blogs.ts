import { useState, useEffect } from "react";
import { firestore } from "../../App";
import { BlogPost } from "../models/blog";

export default function useBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    async function fetchAndSetBlogs() {
      const blogsCollection = firestore.collection("blog_posts");
      const snapshot = await blogsCollection.get();
      const blogArray = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as BlogPost;
      });
      setBlogs(blogArray);
    }

    fetchAndSetBlogs();
  }, []);

  return blogs;
}
