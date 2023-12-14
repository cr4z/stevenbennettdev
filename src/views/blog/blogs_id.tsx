import { Box, Container, ThemeProvider, Typography, useTheme } from "@mui/material";
import DOMPurify from "dompurify";
import { useNavigate, useParams } from "react-router";
import useBlogByID from "../../api/hooks/use_blog_by_id";
import { SBDBack } from "../../sbd_development_kit/components/button_back";
import { blogTheme } from "../../design_system/themes/blog";
import { LoadingScreen } from "../../components/loading_screen";
import { BlogTextDateAndCategory } from "./components/text_date_category";
import BlogPFPPng from "../../img/headshot_natural.png";
import { BlogPost } from "../../api/models/blog";
import { FooterLayout } from "../../layouts/footer";
import hljs from "highlight.js";
import { useEffect } from "react";
import TechBackground from "../../img/tech-background-dark.png";

export default function BlogByID() {
  const { blogID } = useParams();
  const blog = useBlogByID(blogID ?? "");

  useEffect(() => {
    hljs.highlightAll();

    const highlightCode = () => {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    };

    document.addEventListener("DOMContentLoaded", highlightCode);

    return () => {
      document.removeEventListener("DOMContentLoaded", highlightCode);
    };
  }, [blog]);

  return (
    <ThemeProvider theme={blogTheme}>
      {!blog ? (
        <LoadingScreen feedback="Loading blog" />
      ) : (
        <FooterLayout pb="8rem">
          <BlogHeader blog={blog} />

          <Container
            maxWidth="md"
            sx={{
              pt: "6rem",
              pre: {
                boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                my: "2rem",
              },
            }}
          >
            {blog && (
              <Box
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

function BlogHeader(props: { blog: BlogPost }) {
  const navigate = useNavigate();
  const { blog } = props;

  return (
    <Box
      sx={{
        backgroundImage: `url(${TechBackground})`,
        backgroundSize: "cover",
        position: "relative",
        minHeight: "20rem",
        height: "min-content",
        py: "4rem",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderBottom: "2px solid #575757",
      }}
    >
      <Box sx={{ position: "absolute", left: "1rem", top: "1rem" }}>
        <SBDBack onClick={() => navigate("/blogs")} />
      </Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <BlogTextDateAndCategory blog={blog} />

        <Typography variant="h4" sx={{ width: "100%", textAlign: "center" }}>
          {blog.title}
        </Typography>
      </Container>
      <Box sx={{ position: "absolute", bottom: "-2rem", zIndex: 99 }}>
        <NameBadge />
      </Box>
    </Box>
  );
}

function NameBadge() {
  const { palette } = useTheme();

  const heightRem = 1;
  const imgSizeOffset = 1.375;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: `calc(${imgSizeOffset - heightRem}rem + 2px)`,
          left: "1.5rem",
          bgcolor: palette.background.default,
          height: imgSizeOffset + heightRem + "rem",
          width: "14rem",
          borderRadius: "1rem 1rem 0 0",
          border: "2px solid #575757",
          borderBottom: 0,
          zIndex: -1,
        }}
      />

      <BlogPFP />
      <Box>
        <Typography variant="body1">
          <b>Steven Bennett</b>
        </Typography>
        <Typography variant="body2">Front End Team Lead</Typography>
      </Box>
    </Box>
  );

  function BlogPFP() {
    const size = "4.75rem";

    return (
      <Box
        component="img"
        draggable={false}
        src={BlogPFPPng}
        sx={{ width: size, height: size, border: "2px solid #575757" }}
        borderRadius="100%"
      />
    );
  }
}
