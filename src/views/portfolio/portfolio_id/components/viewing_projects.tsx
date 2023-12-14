import { Box, Typography, useTheme } from "@mui/material";

export function ShowcaseViewingProjectTitle(props: { title: string }) {
  const { palette } = useTheme();

  return (
    <Box>
      <Typography className="noselect" display="inline" variant="h5" sx={{ color: palette.grey[400] }}>
        Viewing Project:{" "}
      </Typography>
      <Typography display="inline" variant="h5">
        {props.title}
      </Typography>
    </Box>
  );
}
