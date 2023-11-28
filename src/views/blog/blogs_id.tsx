import {
  Box,
  Container,
  Divider,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router";
import useBlogByID from "../../api/hooks/use_blog_by_id";
import { BackButton } from "../../components/button_back";
import { blogTheme } from "../../design_system/themes/blog";
import { LoadingScreen } from "../../components/loading_screen";
import { BlogTextDateAndCategory } from "./components/text_date_category";
import BlogPFPPng from "../../img/blog_pfp.jpg";
import { BlogPost } from "../../api/models/blog";
import { FooterLayout } from "../../layouts/footer";
import hljs from "highlight.js";
import { useEffect } from "react";

export default function BlogByID() {
  const { blogID } = useParams();
  const blog = useBlogByID(blogID ?? "");

  useEffect(() => {
    hljs.highlightAll();
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    });
  }, [blog]);

  return (
    <ThemeProvider theme={blogTheme}>
      {!blog ? (
        <LoadingScreen feedback="Loading blog" />
      ) : (
        <FooterLayout pb="8rem" pt="3rem">
          <Container maxWidth="lg">
            <BlogByIDHeader blog={blog} />
          </Container>

          <Container
            maxWidth="md"
            sx={{
              pt: "6rem",
              pre: {
                boxShadow: 3,
              },
            }}
          >
            {blog && (
              <Box
                sx={{ overflow: "hidden" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.html),
                }}
              />
            )}
          </Container>
        </FooterLayout>
      )}
    </ThemeProvider>
  );
}

function BlogByIDHeader(props: { blog: BlogPost }) {
  const navigate = useNavigate();
  const { blog } = props;

  return (
    <>
      <BackButton onClick={() => navigate("/blogs")} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: "1rem",
          mt: "2rem",
        }}
      >
        <BlogTextDateAndCategory blog={blog} />
      </Box>

      <Typography
        variant="h4"
        sx={{ width: "100%", textAlign: "center", mb: "2rem" }}
      >
        {blog.title}
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            margin: "2.5rem 0 2rem .5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <BlogPFP />
          <Box>
            <Typography variant="body1">
              <b>Steven Bennett</b>
            </Typography>
            <Typography variant="body2">Front End Team Lead</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

function BlogPFP() {
  const size = "2.7rem";

  return (
    <Box
      component="img"
      draggable={false}
      src={BlogPFPPng}
      sx={{ width: size, height: size, border: "2px solid #777" }}
      borderRadius="100%"
    />
  );
}
