import { Container } from "@mui/material";
import DOMPurify from "dompurify";
import { useParams } from "react-router";
import useBlogByID from "../../hooks/api/use_blog_by_id";

export default function BlogByID() {
  const { blogID } = useParams();
  const blog = useBlogByID(blogID ?? "");

  return (
    <Container>
      {blog && (
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.html) }}
        />
      )}
    </Container>
  );
}
