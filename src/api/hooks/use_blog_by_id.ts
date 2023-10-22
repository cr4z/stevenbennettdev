import { useEffect, useState } from "react";
import { firestore } from "../../App";
import { BlogPost } from "../models/blog";

export default function useBlogByID(blogID: string) {
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const blogRef = firestore.collection("blog_posts").doc(blogID);
        const blogData = await blogRef.get();
        if (blogData.exists) {
          setBlog(blogData.data() as BlogPost);
        } else {
          console.log("No such blog post!");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    }
    fetchBlog();
  }, []);

  return blog;
}
