import {
  Box,
  ButtonBase,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import { EditableTitle } from "./editables/editable_title";
//@ts-ignore
import { ReactComponent as ClockSVG } from "./svg/ClockSVG.svg";
import { Event } from "./types/event";
import dayjs, { Dayjs } from "dayjs";

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
      }}
    >
      <Paper sx={{ height: "6rem", width: "100%", padding: ".5rem 1rem" }}>
        <EditableTitle />
        <Box sx={{ display: "flex" }}>
          <EditableTime startTime={event.startTime} endTime={event.endTime} />
          {/* <EditableLocation /> */}
        </Box>
        {/* <EditableDescription /> */}
      </Paper>
    </Box>
  );
}

function EditableTime(props: { startTime: Dayjs; endTime: Dayjs }) {
  const color = "#000A";

  return (
    <ButtonBase
      sx={{
        path: { fill: color },
        bgcolor: "#0002",
        borderRadius: 99,
        padding: "2px 6px",
      }}
    >
      <ClockSVG />
      <Typography sx={{ color }} variant="body2">
        {props.startTime.format("H:mm - ") + props.endTime.format("H:mm")}
      </Typography>
    </ButtonBase>
  );
}
