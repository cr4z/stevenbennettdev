import { Box, ThemeProvider, Typography, useTheme } from "@mui/material";
import { useNotatorTools } from "./tools/hooks/use_notator_tools";
import { NotatorToolsProvider } from "./tools/provider";
import { notatorTheme } from "./theme/theme";
import { LeftWidget } from "./widgets/left/left";
import { HeaderWidget } from "./widgets/header";
import { RightWidget } from "./widgets/right/right";
import { useBreakpointHelper } from "../../../design_system/hooks/useBreakpointHelper";
import { NotatorSimulationModal } from "./components/modal";
import { useEffect } from "react";
import { selectDraftEvent, useNotatorToolsSelector } from "./tools/selector";

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

  const draftEvent = useNotatorToolsSelector(selectDraftEvent);

  return (
    <>
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
            minWidth: "69rem",
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
