import { Box, Theme, useMediaQuery } from "@mui/material";
import Navbar from "../views/navbar";

function NavLayout(props: { children: React.ReactNode }) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column",width: "100%" }}>
      {!isMobile && <Navbar />}

      <Box sx={{ height: "100%", overflowY: "auto" }}>{props.children}</Box>

      {isMobile && <Navbar mobile />}
    </Box>
  );
}


export default NavLayout;
