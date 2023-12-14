import { Box, ThemeProvider, Typography, useTheme } from "@mui/material";
import { useNotatorTools } from "./tools/use_notator_tools";
import { NotatorToolsProvider } from "./tools/modules";
import { showcaseWhiteTheme } from "../../../design_system/themes/showcase_white_theme";
import { LeftWidget } from "./widgets/left/left";
import { HeaderWidget } from "./widgets/header";
import { useBreakpointHelper } from "../../../design_system/hooks/useBreakpointHelper";
import { NotatorSimulationModal } from "./modals/modal";
import { RightWidget } from "./widgets/right";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectIntroductoryModalOpen as selectIntroductoryModalOpen,
  setCustomDetailsModelOpen,
} from "../../../redux/slices/custom_details_modal";
import { useEffect } from "react";

export default function NotatorSimulationContextWrapper() {
  return (
    <ThemeProvider theme={showcaseWhiteTheme}>
      <NotatorToolsProvider>
        <NotatorSimulation />
      </NotatorToolsProvider>
    </ThemeProvider>
  );
}

function NotatorSimulation() {
  const { palette } = useTheme();
  const { draftReport } = useNotatorTools();

  const customDetailsOpen = useAppSelector(selectIntroductoryModalOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCustomDetailsModelOpen(true));
  }, []);

  return (
    <>
      {draftReport && (
        <Box
          className="notator-selection-colors"
          sx={{
            bgcolor: palette.background.default,
            width: "100%",
            height: "100%",
            padding: "16px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: "72rem",
          }}
        >
          <MobileModal />

          <HeaderWidget />
          <Box
            sx={{
              height: "calc(100vh - 24rem)",
              display: "flex",
              gap: "1rem",
            }}
          >
            <LeftWidget />
            <RightWidget />
          </Box>
        </Box>
      )}
    </>
  );
}

function MobileModal() {
  const bph = useBreakpointHelper();
  const showMobileNotice = !bph.isGreaterThanEqualTo(800);

  return (
    <NotatorSimulationModal
      open={showMobileNotice}
      onClose={() => {}}
      minWidth="md"
    >
      <Typography sx={{ color: "#000D" }}>
        <b>Notice</b>
      </Typography>
      <Typography sx={{ color: "#000D" }}>
        Looks like you're trying to view this on mobile! Unfortunately this
        screen wasn't built to for mobile users, which was an intentional choice
        by the executive team who called for this screen's construction,
        providing instead a different screen entirely for our mobile users. You
        can still view it, but just understand the experience won't be as
        optimal.
      </Typography>
    </NotatorSimulationModal>
  );
}
