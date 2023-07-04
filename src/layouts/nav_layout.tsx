import { Box, useTheme } from "@mui/material";
import Navbar from "../views/navbar";

function NavLayout(props: { children: React.ReactNode }) {
  const { palette } = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        minHeight={"4rem"}
        sx={{
          borderBottom: `1px solid ${palette.grey[800]}`,
        }}
      >
        <Navbar />
      </Box>
      <Box sx={{ bgcolor: palette.background.default, maxHeight: "100%", overflowY: "scroll" }}>
        {props.children}
      </Box>
    </Box>
  );
}

export default NavLayout;
