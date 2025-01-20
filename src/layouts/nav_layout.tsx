import { Box, Theme, useMediaQuery } from "@mui/material";
import Navbar from "../views/navbar";

function NavLayout(props: { children: React.ReactNode }) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {!isMobile && <Navbar />}

      <Box sx={{ height: "100%", overflowY: "auto" }}>{props.children}</Box>

      {isMobile && <MobileNavbar />}
    </Box>
  );
}

function MobileNavbar() {
  return <Box sx={{ width: "100%", height: "4rem", bgcolor: "red" }}></Box>;
}

export default NavLayout;
