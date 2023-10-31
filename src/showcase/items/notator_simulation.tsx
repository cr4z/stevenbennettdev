import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import Box from "../../fortitude/components-dev/BoxExtended";

const notatorTheme = createTheme({
  palette: {
    background: {
      default: "#B5C2CA",
    },
  },
});

export default function NotatorSimulationContextWrapper() {
  return (
    <ThemeProvider theme={notatorTheme}>
      <NotatorSimulation />
    </ThemeProvider>
  );
}

function NotatorSimulation() {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        bgcolor: palette.background.default,
        width: "100%",
        height: "100%",
      }}
    >
      asdf
    </Box>
  );
}
