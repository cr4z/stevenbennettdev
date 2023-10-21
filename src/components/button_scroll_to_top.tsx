import { Box, Typography, useTheme } from "@mui/material";
import { SBDCaret } from "../design_system/icons";

export function ScrollToTopButton(props: { onClick: () => void }) {
  const { palette } = useTheme();

  const height = "3rem";

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        onClick={() => props.onClick()}
        sx={{
          cursor: "pointer",
          bgcolor: palette.text.primary,
          width: height,
          height: height,
          borderTopLeftRadius: "100%",
        }}
      />

      <Box
        onClick={() => props.onClick()}
        sx={{
          cursor: "pointer",
          bgcolor: palette.text.primary,
          width: "20rem",
          maxWidth: "60vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SBDCaret point="up" />
        <Typography
          sx={{
            color: palette.mode ? "#515151" : "white",
            fontWeight: 800,
            mx: ".5rem",
          }}
        >
          SCROLL TO TOP
        </Typography>
        <SBDCaret point="up" />
      </Box>

      <Box
        onClick={() => props.onClick()}
        sx={{
          cursor: "pointer",
          bgcolor: palette.text.primary,
          width: height,
          height: height,
          borderBottomRightRadius: "100%",
        }}
      />
    </Box>
  );
}
