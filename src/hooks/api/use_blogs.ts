import { useState, useEffect } from "react";
import { firestore } from "../../App";

export default function useBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAndSetBlogs() {
      const blogsCollection = firestore.collection("blog_posts");
      const snapshot = await blogsCollection.get();
      const blogArray = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setBlogs(blogArray);
    }

    fetchAndSetBlogs();
  }, []);

  return blogs;
}
