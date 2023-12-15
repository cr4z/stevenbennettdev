import { Box, Typography, useTheme } from "@mui/material";

export function ShowcaseTags(props: { tags: string[] }) {
  const { palette } = useTheme();
  const { tags } = props;

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="body2">Tags:</Typography>
      <Box sx={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
        {tags.map((tag, i) => (
          <Typography
            key={i}
            display="inline"
            sx={{
              padding: ".3rem .5rem",
              bgcolor: palette.grey[500],
              borderRadius: "6px",
            }}
          >
            {tag}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
