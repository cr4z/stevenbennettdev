import { Box, Typography, useTheme } from "@mui/material";

export function OpenToWorkMessage() {
  const { palette } = useTheme();
  const bgcolor = palette.secondary.main;
  const heightRem = 3;
  const widthRem = 5.5;

  return (
    <Box
      display="flex"
      position="relative"
      maxWidth={widthRem + heightRem + "rem"}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          pl: "4%",
        }}
      >
        <Typography>Open to work!</Typography>
      </Box>

      <Box
        sx={{
          width: heightRem + "rem",
          height: heightRem + "rem",
          bgcolor: bgcolor,
          borderBottomLeftRadius: "100%",
        }}
      />
      <Box
        sx={{
          width: widthRem + "rem",
          height: heightRem + "rem",
          bgcolor: bgcolor,
          borderTopRightRadius: "999px",
          borderBottomRightRadius: "999px",
        }}
      />
    </Box>
  );
}
