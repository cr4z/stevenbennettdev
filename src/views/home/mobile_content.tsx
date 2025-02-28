import { Box, Container, Stack, useTheme } from "@mui/material";
import Headshot from "./components/headshot";
import TitleCard from "./components/title_card";
import Body from "./components/body";
import { ScrollToTop } from "./components/scroll_to_top";
import { HomeContentProps } from "./types/home_content";
import NameLogo from "./components/name_logo";
import OpenToWorkBadge from "./components/open_to_work_badge";
import { SHOW_OPEN_TO_WORK } from "./home";

function MobileContent(props: HomeContentProps) {
  const { palette } = useTheme();
  const { onRequestScrollToTop } = props;

  return (
    <Box>
      <Box
        sx={{
          width: "calc(100% + 4px)",
          ml: "-2px",
          background: `linear-gradient(to top, ${palette.background.default} 60%, ${palette.background.default}88)`,
          height: "10rem",
          borderRadius: "2rem 2rem 0 0",
          border: `1px solid ${palette.grey[700]}`,
          borderBottom: "none",
        }}
      />
      <Box
        sx={{ position: "fixed", width: "100%", display: "flex", justifyContent: "center", top: "4rem" }}
      >
        <NameLogo />
      </Box>
      <Box sx={{ width: "100%", bgcolor: palette.background.default }}>
        <Container>
          <Stack
            direction="column"
            sx={{
              alignItems: "center",
            }}
          >
            {SHOW_OPEN_TO_WORK && <OpenToWorkBadge />}
            <Stack alignItems="center" gap={8}>
              <TitleCard />
              <Headshot />

              <Stack gap={1}>
                <Body />
              </Stack>
            </Stack>

            <ScrollToTop onClick={() => onRequestScrollToTop()} useYMargin />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default MobileContent;
