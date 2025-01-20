import { Box, useTheme } from "@mui/material";
import Headshot from "./components/headshot";
import TitleCard from "./components/title_card";
import Body from "./components/body";
import { ScrollToTop } from "./components/scroll_to_top";
import { HomeContentProps } from "./types/home_content";

function MobileContent(props: HomeContentProps) {
  const { palette } = useTheme();
  const { onRequestScrollToTop } = props;

  return (
    <Box>
      <Box
        sx={{
          width: "calc(100% + 4px)",
          ml: "-2px",
          background: `linear-gradient(to top, ${palette.background.default}, ${palette.background.default}44)`,
          height: "10rem",
          borderRadius: "2rem 2rem 0 0",
          border: `1px solid ${palette.grey[700]}`,
          borderBottom: "none",
        }}
      ></Box>
      <Box
        sx={{
          bgcolor: palette.background.default,
          display: "flex",
          pt: "2rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "4rem",
          pb: "8rem",
        }}
      >
        <TitleCard />
        <Headshot />
        <Body />
        <ScrollToTop onClick={() => onRequestScrollToTop()} />
      </Box>
    </Box>
  );
}

export default MobileContent;
