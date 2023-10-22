import { Box, CircularProgress, Typography } from "@mui/material";

export function LoadingScreen(props: { feedback: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <CircularProgress size="4rem" variant="indeterminate" />
      <Box sx={{ width: "7.3rem", ml: ".3rem" }}>
        <Typography className="loading" variant="subtitle1">
          {props.feedback}
        </Typography>
      </Box>
    </Box>
  );
}
