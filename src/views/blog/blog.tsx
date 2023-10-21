import { Box, Button, Container, ThemeProvider, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import useBlogs from "../../hooks/api/use_blogs";
import { blogTheme } from "../../design_system/themes/blog";

export default function Blog() {
  const navigate = useNavigate();
  const blogs = useBlogs();

  return (
    <ThemeProvider theme={blogTheme}>
      <Container maxWidth="md" sx={{ pt: "8rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", bgcolor: "#FFF", height: "1px" }} />
          <Typography variant="h4" sx={{ whiteSpace: "nowrap", mx: "2rem" }}>
            Practical Perpsectives
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "#FFF", height: "1px" }} />
        </Box>

        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", my: "4rem", mb: "6rem" }}
        >
          As a developer, team leader, and perpetual student of technology, I
          constantly strive to bridge the gap between innovation and real-world
          impact. This blog serves as both a canvas for my intellectual
          curiosity and a showcase for my ongoing discoveries within the rapidly
          evolving tech landscape. With a keen interest in scalable,
          user-centric solutions, I delve into the challenges and triumphs that
          define the industry today. Whether you're a fellow technophile or
          simply curious, I invite you to join me on this journey of
          exploration. If we share a commitment to knowledge, creativity, and
          making a meaningful difference, then you've come to the right place.
        </Typography>

        {/* {blogs.map((blog, index) => {
          return (
            <Button key={index} onClick={() => navigate("/blog/" + blog.id)}>
              {blog.title}
            </Button>
          );
        })} */}

        <BlogSnippet />
      </Container>
    </ThemeProvider>
  );
}

function BlogSnippet() {
  return (
    <Box>
      <Typography display="inline" variant="body2">
        October 2023{" "}
      </Typography>
      <Typography display="inline">
        • <b>AI</b>
      </Typography>
      <Typography variant="h5">
        Unlocking the AI Paradox: Boost your brain without losing critical
        thinking
      </Typography>
    </Box>
  );
}
