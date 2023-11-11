import { Box, ThemeProvider, Typography, useTheme } from "@mui/material";
import { useNotatorTools } from "./tools/hooks/use_notator_tools";
import { NotatorToolsProvider } from "./tools/provider";
import { notatorTheme } from "./theme/theme";
import { LeftWidget } from "./widgets/left/left";
import { HeaderWidget } from "./widgets/header";
import { useBreakpointHelper } from "../../../design_system/hooks/useBreakpointHelper";
import { NotatorSimulationModal } from "./components/modal";
import { RightWidget } from "./widgets/right";

export default function NotatorSimulationContextWrapper() {
  return (
    <ThemeProvider theme={notatorTheme}>
      <NotatorToolsProvider>
        <NotatorSimulation />
      </NotatorToolsProvider>
    </ThemeProvider>
  );
}

function NotatorSimulation() {
  const { palette } = useTheme();
  const { draftEvent } = useNotatorTools();

  const bph = useBreakpointHelper();
  const showMobileNotice = !bph.isGreaterThanEqualTo(800);

  return (
    <>
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
          screen wasn't built to for mobile users, which was an intentional
          choice by the executive team who called for this screen's
          construction, providing instead a different screen entirely for our
          mobile users. You can still view it, but just understand the
          experience won't be as optimal.
        </Typography>
      </NotatorSimulationModal>
      {draftEvent && (
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
            minWidth: "60rem",
          }}
        >
          <HeaderWidget />
          <Box
            sx={{
              height: "calc(100vh - 24rem)",
              display: "flex",
              gap: "1rem",
              overflow: "hidden",
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
