import { Box, Container } from "@mui/material";
import MyLifestyleShot from "../../img/lifestyle_rotated.jpg";
import ParallaxHeaderLayout from "../../layouts/parallax_layout";
import { HomeContent, HomeHeader, IntroductoryText } from "./content";
import {
  ContactButtonEmail,
  ContactButtonGitHub,
  ContactButtonLinkedIn,
  ContactButtonPhone,
} from "../../components/contact_options";

function Home() {
  return (
    <ParallaxHeaderLayout src={MyLifestyleShot}>
      <Container maxWidth="md" sx={{ minHeight: "60rem", pt: "4rem" }}>
        <HomeHeader />
        <Box my="3rem">
          <IntroductoryText />
          <HomeContent />
        </Box>
      </Container>
      <Footer />
    </ParallaxHeaderLayout>
  );
}

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid #555",
        display: "flex",
        minHeight: "14rem",
      }}
    >
      <ContactButtonPhone />
      <ContactButtonEmail />
      <ContactButtonLinkedIn />
      <ContactButtonGitHub />
    </Box>
  );
}

export default Home;
