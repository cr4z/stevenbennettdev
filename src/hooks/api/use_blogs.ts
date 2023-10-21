import { useState, useEffect } from "react";
import { firestore } from "../../App";

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: Date;
  category: string;
  content: string;
}

export default function useBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

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
