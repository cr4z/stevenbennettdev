import { Box, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../hooks/useBreakpointHelper";

function Navbar() {
  const { currentScreenSize, isMobile } = useBreakpointHelper();
  const { palette } = useTheme();

  function getNavbarPaddingX() {
    switch (currentScreenSize) {
      case "xl":
      case "lg":
      case "md":
        return "3rem";
      case "sm":
      case "xs":
        return "2rem";
    }
  }

  return (
    <Box
      sx={{
        bgcolor: palette.background.default,
        paddingX: getNavbarPaddingX(),
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "space-between",
      }}
    >
      {!isMobile && (
        <Typography className="noselect" variant="h4">
          Steven Bennett
        </Typography>
      )}
      <Box sx={{ display: "flex", minWidth: "265px", justifyContent: "space-between" }}>
        <Tab label="Home" selected />
        <Tab label="Portfolio" />
        <Tab label="Contact" isContact />
      </Box>
    </Box>
  );
}

function Tab(props: { label: string; selected?: boolean; isContact?: boolean }) {
  return (
    <Box
      className="noselect"
      sx={{
        width: "81px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "12px",
        color: "white",

        ...(props.selected && {
          bgcolor: "#11425C",
          color: "#5BC6FF",
        }),

        ...(props.isContact && {
          bgcolor: "#30A2DE",
        }),
      }}
    >
      {props.label}
    </Box>
  );
}

export default Navbar;
