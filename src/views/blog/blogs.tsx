import {
  Box,
  ButtonBase,
  Container,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";
import { blogTheme } from "../../design_system/themes/blog";
import { BlogPost } from "../../api/models/blog";
import { useBreakpointHelper } from "../../design_system/hooks/useBreakpointHelper";
import { FancyDivider } from "../../components/divider_fancy";
import useBlogs from "../../api/hooks/use_blogs";
import { LoadingScreen } from "../../components/loading_screen";
import { BlogTextDateAndCategory } from "./components/text_date_category";
import { FooterLayout } from "../../layouts/footer";

export default function BlogFeed() {
  const blogs = useBlogs();
  const { isMobile } = useBreakpointHelper();

  return (
    <ThemeProvider theme={blogTheme}>
      {!blogs ? (
        <LoadingScreen feedback="Loading blogs" />
      ) : (
        <FooterLayout pt="8rem">
          <Container maxWidth="md">
            {isMobile ? <MobileHeader /> : <DesktopHeader />}

            <IntroductoryText />

            <Box
              sx={{
                gap: "2rem",
                display: "flex",
                flexDirection: "column",
                mb: "8rem",
              }}
            >
              {blogs.map((blog, i) => {
                return <BlogSnippet key={i} viewData={blog} />;
              })}
            </Box>
          </Container>
        </FooterLayout>
      )}
    </ThemeProvider>
  );
}

function DesktopHeader() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", bgcolor: "#FFF", height: "1px" }} />
      <Typography variant="h4" sx={{ whiteSpace: "nowrap", mx: "2rem" }}>
        Practical Perspectives
      </Typography>
      <Box sx={{ width: "100%", bgcolor: "#FFF", height: "1px" }} />
    </Box>
  );
}

function MobileHeader() {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "min-content" }}>
        <Typography variant="h4" sx={{ whiteSpace: "nowrap" }}>
          Practical Perspectives
        </Typography>

        <FancyDivider bgcolor={palette.background.default} />
      </Box>
    </Box>
  );
}

function BlogSnippet(props: { viewData: BlogPost }) {
  const navigate = useNavigate();
  const blog = props.viewData;

  return (
    <ButtonBase
      sx={{ textAlign: "start", borderRadius: ".5rem", p: ".5rem 1rem" }}
      onClick={() => navigate("/blogs/" + blog.id)}
    >
      <Box>
        <BlogTextDateAndCategory blog={blog} />
        <Typography mt="1rem" variant="h5">
          {blog.title}
        </Typography>
        <Typography variant="subtitle2">{blog.summary}</Typography>
      </Box>
    </ButtonBase>
  );
}

function IntroductoryText() {
  return (
    <Typography
      variant="subtitle1"
      sx={{ textAlign: "center", my: "4rem", mb: "6rem" }}
    >
      As a developer, team leader, and perpetual student of technology, I
      constantly strive to bridge the gap between innovation and real-world
      impact. This blog serves as both a canvas for my intellectual curiosity
      and a showcase for my ongoing discoveries within the rapidly evolving tech
      landscape. With a keen interest in scalable, user-centric solutions, I
      delve into the challenges and triumphs that define the industry today.
      Whether you're a fellow technophile or simply curious, I invite you to
      join me on this journey of exploration. If we share a commitment to
      knowledge, creativity, and making a meaningful difference, then you've
      come to the right place.
    </Typography>
  );
}
