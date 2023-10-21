import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import useBlogs from "../../hooks/api/use_blogs";

export default function Blog() {
  const navigate = useNavigate();
  const blogs = useBlogs();

  return (
    <Box>
      {blogs.map((blog, index) => {
        return (
          <Button key={index} onClick={() => navigate("/blog/" + blog.id)}>
            {blog.title}
          </Button>
        );
      })}
    </Box>
  );
}
