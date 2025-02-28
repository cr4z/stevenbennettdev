import { Box, styled, Typography, useTheme } from "@mui/material";

function OpenToWorkBadge() {
  const { palette } = useTheme();

  return (
    <Box
      className="noselect"
      sx={{
        gap: ".5rem",
        bgcolor: palette.grey[700],
        borderRadius: ".25rem",
        boxShadow: 3,
        alignItems: "center",
        p: ".25rem .5rem",
        width: "min-content",
        display: "flex",
        alignmentBaseline: "center",
      }}
    >
      <Badge />
      <Typography variant="caption" sx={{ fontWeight: 100 }} noWrap>
        Open for Contract Roles
      </Typography>
    </Box>
  );
}

const Badge = styled(Box)(({ theme }) => {
  const BADGE_DIMENSIONS = ".4rem";

  return {
    backgroundColor: theme.palette.success.main,
    minWidth: BADGE_DIMENSIONS,
    maxWidth: BADGE_DIMENSIONS,
    minHeight: BADGE_DIMENSIONS,
    maxHeight: BADGE_DIMENSIONS,
    borderRadius: "100rem",
  };
});

export default OpenToWorkBadge;
