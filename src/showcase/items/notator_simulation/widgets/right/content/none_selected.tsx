import { Box, Typography } from "@mui/material";

export default function NoneSelectedContent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography className="noselect" color="#000D">
        Add a segment to get started!
      </Typography>
    </Box>
  );
}
