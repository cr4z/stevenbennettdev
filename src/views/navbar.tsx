import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { useLocation, useNavigate } from "react-router";
import Menu from "../design_system/menu";
import useMenu from "../design_system/hooks/useMenu";
import ContactMenu from "./contact";
// @ts-ignore
import { ReactComponent as SBLogo } from "../svgs/logo.svg";

function Navbar() {
  const { currentScreenSize, isMobile, isGreaterThanEqualTo } = useBreakpointHelper();
  const { palette } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { ref: contactBtnRef, show: showContactMenu, setShow: setShowContactMenu } = useMenu();

  function getNavbarGutters() {
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
    <>
      {/* MENUS */}
      <Menu
        refCurrent={contactBtnRef.current}
        show={showContactMenu}
        onClose={() => setShowContactMenu(false)}
      >
        <ContactMenu />
      </Menu>

      {/* DOM */}
      <Box
        sx={{
          bgcolor: palette.background.default,
          paddingX: getNavbarGutters(),
          // Height isn't controlled here, it's controlled by layout
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: "100%", gap: ".5rem", paddingTop: "5px" }}>
          <Box sx={{ cursor: "pointer", padding: ".5rem" }} onClick={() => navigate("/")}>
            <SBLogo />
          </Box>

          {isGreaterThanEqualTo(650) && (
            <Typography className="noselect" variant="h4">
              Steven Bennett
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", minWidth: "265px", justifyContent: "space-between" }}>
          <Tab label="Home" selected={location.pathname === "/"} onClick={() => navigate("/")} />
          <Tab
            label="Portfolio"
            selected={location.pathname === "/portfolio"}
            onClick={() => navigate("/portfolio")}
          />
          <div ref={contactBtnRef}>
            <Tab label="Contact" isContact onClick={() => setShowContactMenu(true)} />
          </div>
        </Box>
      </Box>
    </>
  );
}

function Tab(props: { label: string; selected?: boolean; isContact?: boolean; onClick?: () => void }) {
  const { palette } = useTheme();

  return (
    <ButtonBase
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
    </ButtonBase>
  );
}

export default Navbar;
