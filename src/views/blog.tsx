import { useEffect, useState } from "react";
import { firestore } from "../App";
import { Box } from "@mui/material";
import DOMPurify from "dompurify";

const sanitize = DOMPurify.sanitize;

export default function Blog() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAndSetBlogs() {
      const blogsCollection = firestore.collection("blog_posts");
      const snapshot = await blogsCollection.get();
      const blogArray = snapshot.docs.map((doc) => doc.data());
      setBlogs(blogArray);
    }

    fetchAndSetBlogs();
  }, []);

  return (
    <Box>
      {blogs.map((blog, index) => {
        return (
          <Box key={index}>
            <h2>{blog.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(blog.html),
              }}
            ></div>
            {/* Render other fields as needed */}
          </Box>
        );
      })}
    </Box>
  );
}
