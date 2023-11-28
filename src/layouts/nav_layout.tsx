import { Box, useTheme } from "@mui/material";
import Navbar from "../views/navbar";

function NavLayout(props: { children: React.ReactNode }) {
  const { palette } = useTheme();

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "4rem", borderBottom: `1px solid ${palette.grey[800]}` }}>
        <Navbar />
      </Box>

      <Box sx={{ height: "100%", overflowY: "auto" }}>{props.children}</Box>
    </Box>
  );
}

export default NavLayout;
