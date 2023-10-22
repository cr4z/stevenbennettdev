import { Container } from "@mui/material";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router";
import useBlogByID from "../../api/hooks/use_blog_by_id";
import { BackButton } from "../../components/button_back";

export default function BlogByID() {
  const { blogID } = useParams();
  const blog = useBlogByID(blogID ?? "");
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate("/blogs")} />
      {blog && (
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.html) }}
        />
      )}
    </Container>
  );
}
