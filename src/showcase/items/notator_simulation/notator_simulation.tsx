import {
  Box,
  Paper,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { EditableTime } from "./editables/time";
import { useNotatorTools } from "./tools/hooks/use_notator_tools";
import { NotatorToolsProvider } from "./tools/provider";
import { EditableTitle } from "./editables/title";
import { EditableDescription } from "./editables/description";

const notatorTheme = createTheme({
  palette: {
    background: {
      default: "#D3DBE2",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
      },
    },
  },
});

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
          sx={{
            bgcolor: palette.background.default,
            width: "100%",
            height: "100%",
            padding: "16px",
            "*::selection": {
              bgcolor: "#1889a3!important",
              color: "white",
            },
            position: "relative",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              padding: ".75rem .75rem",
              display: "flex",
              flexDirection: "column",
              gap: ".25rem",
            }}
          >
            <EditableTitle />
            <Box sx={{ display: "flex" }}>
              <EditableTime />
              {/* <EditableLocation /> */}
            </Box>
            <EditableDescription />
          </Paper>
        </Box>
      )}
    </>
  );
}
