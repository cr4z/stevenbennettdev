import { Box, Paper } from "@mui/material";
import { EditableTitle } from "../editables/title";
import { EditableTime } from "../editables/time";
import { EditableDescription } from "../editables/description";
import { EditableLocation } from "../editables/location";
import { EditableDate } from "../editables/date";

export function HeaderWidget() {
  return (
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
          maxWidth: "30rem",
        }}
      >
        <EditableTitle />
        <Box sx={{ display: "flex", gap: ".5rem" }}>
          <EditableDate />
          <EditableTime />
          <EditableLocation />
        </Box>
        <EditableDescription />
      </Box>
    </Paper>
  );
}
