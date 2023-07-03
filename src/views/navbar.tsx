import { Box, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { useLocation, useNavigate } from "react-router";

function Navbar() {
  const { currentScreenSize, isMobile } = useBreakpointHelper();
  const { palette } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

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
        <Tab label="Home" selected={location.pathname === "/"} onClick={() => navigate("/")} />
        <Tab
          label="Portfolio"
          selected={location.pathname === "/portfolio"}
          onClick={() => navigate("/portfolio")}
        />
        <Tab label="Contact" isContact />
      </Box>
    </Box>
  );
}

function Tab(props: { label: string; selected?: boolean; isContact?: boolean; onClick?: () => void }) {
  const { palette } = useTheme();

  return (
    <Box
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
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
          bgcolor: palette.primary.dark,
          color: palette.primary.light,
        }),

        ...(props.isContact && {
          bgcolor: palette.primary.main,
        }),
      }}
    >
      {props.label}
    </Box>
  );
}

export default Navbar;
