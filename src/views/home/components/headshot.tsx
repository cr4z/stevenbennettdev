import { Box, useTheme } from "@mui/material";
import HeadshotPNG from "../../../img/headshot_natural.png";

function Headshot() {
  const { palette } = useTheme();

  return (
    <Box sx={{ height: "14rem", width: "14rem" }}>
      <Box
        component="img"
        src={HeadshotPNG}
        alt="Headshot"
        sx={{ height: "100%", borderRadius: "1rem", border: "3px solid " + palette.grey[600] }}
      />
    </Box>
  );
}

export default Headshot;
