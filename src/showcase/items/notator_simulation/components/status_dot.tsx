import { Box, useTheme } from "@mui/material";

type StatusDotStatus = "great" | "okay" | "bad";

export default function StatusDot(props: {
  status?: StatusDotStatus;
  isSelected?: boolean;
}) {
  const { palette } = useTheme();

  function getColor(): string {
    switch (props.status) {
      case "great":
        return palette.success.main;
      case "okay":
        return palette.warning.main;
      case "bad":
        return palette.error.main;
      default:
        return palette.success.main;
    }
  }

  const color = getColor();
  const selected = props.isSelected ?? false;

  return (
    <Box
      sx={{
        minWidth: ".5rem",
        minHeight: ".5rem",
        borderRadius: 999,
        bgcolor: color,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      {selected && (
        <Box
          sx={{
            width: "1rem",
            height: "1rem",
            borderRadius: 999,
            bgcolor: color + "66",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        />
      )}
    </Box>
  );
}
