import { Box, ThemeProvider, useTheme } from "@mui/material";
import { useNotatorTools } from "./tools/hooks/use_notator_tools";
import { NotatorToolsProvider } from "./tools/provider";
import { notatorTheme } from "./theme/theme";
import { LeftWidget } from "./widgets/left/left";
import { HeaderWidget } from "./widgets/header";
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
            minWidth: "60rem",
          }}
        >
          <HeaderWidget />
          <Box sx={{ height: "100%", display: "flex", gap: "1rem" }}>
            <LeftWidget />
            <RightWidget />
          </Box>
        </Box>
      )}
    </>
  );
}
