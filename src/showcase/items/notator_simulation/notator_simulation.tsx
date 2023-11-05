import {
  Box,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import { EditableTime } from "./editables/time";
import { useNotatorTools } from "./tools/hooks/use_notator_tools";
import { NotatorToolsProvider } from "./tools/provider";
import { EditableTitle } from "./editables/title";
import { EditableDescription } from "./editables/description";
import { BsFillTrash3Fill } from "react-icons/bs";

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
  typography: {
    h6: {
      fontSize: "1.2rem",
      padding: 0,
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
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: "60rem",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              padding: ".5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                maxWidth: "24rem",
              }}
            >
              <EditableTitle />
              <Box sx={{ display: "flex" }}>
                <EditableTime />
                {/* <EditableLocation /> */}
              </Box>
              <EditableDescription />
            </Box>
          </Paper>
          <Box sx={{ height: "100%", display: "flex", gap: "1rem" }}>
            <Paper
              sx={{
                flexBasis: "20rem",
                background:
                  "linear-gradient(197deg, rgba(23, 42, 58, 0.56) -1.71%, rgba(23, 42, 58, 0.91) 102.94%)",
                padding: ".5rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" color="white" sx={{ pl: ".5rem" }}>
                  Event Segments
                </Typography>
                <IconButton
                  sx={{
                    svg: { color: "white", width: "1.2rem", height: "1.2rem" },
                  }}
                >
                  <BsFillTrash3Fill />
                </IconButton>
              </Box>
            </Paper>
            <Paper sx={{ flexGrow: 1 }}></Paper>
          </Box>
        </Box>
      )}
    </>
  );
}
