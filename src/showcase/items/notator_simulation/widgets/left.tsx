import {
  Box,
  ButtonBase,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";
import { BsFillTrash3Fill } from "react-icons/bs";
import { PiCaretRightBold } from "react-icons/pi";

const softWhiteColor = "#FFFD";

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
        <Typography variant="h6" color={softWhiteColor} sx={{ pl: ".5rem" }}>
          Event Segments
        </Typography>
        <IconButton
          sx={{
            svg: { color: softWhiteColor, width: "1.2rem", height: "1.2rem" },
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
function Segment(props: { text: string }) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        svg: {
          color: softWhiteColor,
        },
        justifyContent: "space-between",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <ButtonBase
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          height: "3rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: ".5rem",
              height: ".5rem",
              borderRadius: 999,
              bgcolor: palette.success.main,
              margin: "1rem",
            }}
          />
          <Typography variant="body2" color={softWhiteColor}>
            {props.text}
          </Typography>
        </Box>
        <Box mr="1rem" sx={{ pt: ".4rem" }}>
          <PiCaretRightBold />
        </Box>
      </ButtonBase>
    </Box>
  );
}
