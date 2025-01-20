import { useMediaQuery, useTheme } from "@mui/material";
import ParallaxHeaderLayout from "../../layouts/parallax_layout";
import { useRef } from "react";
import ParticleNetwork from "../../components/particle_network";
import MobileContent from "./mobile_content";
import WebContent from "./web_content";
import { FooterLayout } from "../../layouts/footer";

function Home() {
  const thm = useTheme();
  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  function scrollToTop() {
    parallaxContainerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const isMobile = useMediaQuery(thm.breakpoints.down("md"));

  return (
    <ParallaxHeaderLayout
      parallaxContainerRef={parallaxContainerRef}
      src={<ParticleNetwork height="50rem" />}
      upperMargin="28rem"
    >
      <FooterLayout>
        {isMobile ? (
          <MobileContent onRequestScrollToTop={() => scrollToTop()} />
        ) : (
          <WebContent onRequestScrollToTop={() => scrollToTop()} />
        )}
      </FooterLayout>
    </ParallaxHeaderLayout>
  );
}

export default Home;
