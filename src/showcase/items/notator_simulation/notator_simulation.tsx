import {
  Box,
  Paper,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { EditableTitle } from "./editables/editable_title";
import { Event } from "./types/event";
import dayjs from "dayjs";
import { EditableTime } from "./editables/editable_time";

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
      <NotatorSimulation />
    </ThemeProvider>
  );
}

function NotatorSimulation() {
  const { palette } = useTheme();
  const event: Event = { startTime: dayjs(), endTime: dayjs() };

  // alright, in order to add new times to event, we need to make event into state. meaning we need to port the notator tools.
  // alllll the heavylifting is coming together.

  return (
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
      <Paper sx={{ height: "6rem", width: "100%", padding: ".5rem 1rem" }}>
        <EditableTitle />
        <Box sx={{ display: "flex" }}>
          <EditableTime
            startTime={event.startTime}
            endTime={event.endTime}
            onTimesChange={() => {}}
          />
          {/* <EditableLocation /> */}
        </Box>
        {/* <EditableDescription /> */}
      </Paper>
    </Box>
  );
}
