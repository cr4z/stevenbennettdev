import { Box, Container, styled } from "@mui/material";
import Headshot from "./components/headshot";
import TitleCard from "./components/title_card";
import Body from "./components/body";
import { ScrollToTop } from "./components/scroll_to_top";
import { HomeContentProps } from "./types/home_content";
import OpenToWorkBadge from "./components/open_to_work_badge";
import { SHOW_OPEN_TO_WORK } from "./home";

function WebContent(props: HomeContentProps) {
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

        {SHOW_OPEN_TO_WORK && (
          <Box sx={{ position: "absolute", top: "-14.8rem", right: "3rem" }}>
            <OpenToWorkBadge />
          </Box>
        )}

        <EmptySpace />

        <BodyWrapper>
          <Body />
        </BodyWrapper>

        <ScrollToTop onClick={() => onRequestScrollToTop()} useYMargin />
      </Container>
    </BackgroundProvider>
  );
}

const BodyWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
  backgroundColor: "#FFF1",
  padding: "2rem",
  borderRadius: "1rem",
});

const BackgroundProvider = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderTop: "1px solid" + theme.palette.grey[800],
}));

const EmptySpace = styled("div")({
  height: "10rem",
});

const AbsoluteWelcomeCard = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-14rem",
  backgroundColor: "#0002",
  borderRadius: "1rem",
  border: `1px solid ${theme.palette.grey[700]}`,
  display: "flex",
  alignItems: "center",
  padding: "2rem 3rem ",
  justifyContent: "center",
  gap: "4rem",
  minWidth: "53rem",
  maxWidth: "53rem",
}));

export default WebContent;
