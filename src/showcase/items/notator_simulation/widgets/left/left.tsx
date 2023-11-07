import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useNotatorTools } from "../../tools/hooks/use_notator_tools";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Segment } from "./segments";

export const NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE = "#FFFD";

export function LeftWidget() {
  const { draftEvent } = useNotatorTools();

  return (
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
        <Typography
          variant="h6"
          color={NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE}
          sx={{ pl: ".5rem" }}
        >
          Event Segments
        </Typography>
        <IconButton
          sx={{
            svg: {
              color: NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE,
              width: "1.2rem",
              height: "1.2rem",
            },
          }}
        >
          <BsFillTrash3Fill />
        </IconButton>
      </Box>

      {draftEvent && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            pt: ".5rem",
          }}
        >
          {draftEvent.segments.map((s) => (
            <Segment text={s.title} />
          ))}
        </Box>
      )}
    </Paper>
  );
}
