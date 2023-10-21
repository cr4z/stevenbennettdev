import { Box, Container } from "@mui/material";
import MyLifestyleShot from "../../img/lifestyle_rotated.jpg";
import ParallaxHeaderLayout from "../../layouts/parallax_layout";
import {
  HomeContent,
  HomeDesktopHeader,
  HomeMobileHeader,
  IntroductoryText,
} from "./content";
import { FooterLayout } from "../../layouts/footer";
import { ScrollToTopButton } from "../../components/button_scroll_to_top";
import { useRef } from "react";
import { useBreakpointHelper } from "../../design_system/hooks/useBreakpointHelper";

function Home() {
  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  function scrollToTop() {
    parallaxContainerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const bph = useBreakpointHelper();

  return (
    <ParallaxHeaderLayout
      parallaxContainerRef={parallaxContainerRef}
      src={MyLifestyleShot}
    >
      <FooterLayout>
        <Container
          maxWidth="md"
          sx={{ minHeight: "60rem", pt: "5rem", pb: "6rem" }}
        >
          {bph.isGreaterThanEqualTo("md") ? (
            <HomeDesktopHeader />
          ) : (
            <HomeMobileHeader />
          )}

          <Box my="3rem">
            <IntroductoryText />
            <HomeContent />
          </Box>

          <Box
            pt="3rem"
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <ScrollToTopButton onClick={() => scrollToTop()} />
          </Box>
        </Container>
      </FooterLayout>
    </ParallaxHeaderLayout>
  );
}

export default Home;
