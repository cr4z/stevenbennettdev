import { Box, Container, styled, useTheme } from "@mui/material";
import Headshot from "./components/headshot";
import TitleCard from "./components/title_card";
import Body from "./components/body";
import { ScrollToTop } from "./components/scroll_to_top";
import { HomeContentProps } from "./types/home_content";

function WebContent(props: HomeContentProps) {
  const { palette } = useTheme();
  const { onRequestScrollToTop } = props;

  return (
    <BackgroundProvider>
      <Container
        maxWidth="md"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column", position: "relative" }}
      >
        <AbsoluteWelcomeCard>
          <Headshot />
          <TitleCard />
        </AbsoluteWelcomeCard>

        <EmptySpace />
        <Body />
        <ScrollToTop onClick={() => {}} />
      </Container>
    </BackgroundProvider>
  );
}

const BackgroundProvider = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderTop: "1px solid" + theme.palette.grey[800],
}));

const EmptySpace = styled("div")({
  height: "10rem",
});

const AbsoluteWelcomeCard = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-10rem",
  backgroundColor: "#0002",
  borderRadius: "1rem",
  border: `1px solid ${theme.palette.grey[700]}`,
  display: "flex",
  alignItems: "center",
  padding: "3rem",
  justifyContent: "center",
  gap: "4rem",
}));

export default WebContent;
