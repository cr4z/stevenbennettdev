import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE } from "./left";
import { PiCaretRightBold } from "react-icons/pi";

const SEGMENT_HEIGHT = "3rem";

export function Segment(props: { text: string }) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        svg: {
          color: NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE,
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
          height: SEGMENT_HEIGHT,
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
          <Typography
            variant="body2"
            color={NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE}
          >
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

export function AddSegmentButton(props: { text: string }) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        svg: {
          color: NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE,
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
          height: SEGMENT_HEIGHT,
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
          <Typography
            variant="body2"
            color={NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE}
          >
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
