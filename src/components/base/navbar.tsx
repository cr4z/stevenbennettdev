/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../../design_system/hooks/useBreakpointHelper";
import { useLocation, useNavigate } from "react-router";
import Menu from "../../design_system/menu";
import useMenu from "../../design_system/hooks/useMenu";
import ContactMenu from "../contact";
// @ts-ignore
import { ReactComponent as SBLogo } from "../../svgs/logo.svg";
import Button from "../../design_system/button";
import { Link } from "react-router-dom";

function Navbar() {
  const { currentScreenSize, isGreaterThanEqualTo } = useBreakpointHelper();
  const { palette } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    ref: contactBtnRef,
    show: showContactMenu,
    setShow: setShowContactMenu,
  } = useMenu();

  function getNavbarGutters(): number {
    if (!isGreaterThanEqualTo(500)) return 1;
    switch (currentScreenSize) {
      case "xl":
      case "lg":
      case "md":
        return 2;
      case "sm":
      case "xs":
        return 1.5;
    }
  }

  const navbarButtonSX = { fontWeight: "bold" };

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
          // TODO: Fix this. I'm not sure when/what happened, but there is always left-padding of exactly 1rem now. Viable stopgap is to subtract 1rem before setting padding
          paddingLeft: getNavbarGutters() - 1 + "rem",
          paddingRight: getNavbarGutters() + "rem",
          // Height isn't controlled here, it's controlled by layout
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            a: { textDecoration: "none" },
          }}
        >
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", paddingTop: "5px" }}
          >
            <Box sx={{ cursor: "pointer", padding: ".5rem" }}>
              <SBLogo />
            </Box>

            {isGreaterThanEqualTo(650) && (
              <Typography
                className="noselect"
                variant="h4"
                sx={{ paddingX: ".5rem", fontFamily: "Roboto" }}
              >
                Steven Bennett
              </Typography>
            )}
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            minWidth: "265px",
            justifyContent: "space-between",
            gap: ".4rem",
          }}
        >
          <Button
            variant={location.pathname === "/" ? "selected" : "unselected"}
            onClick={() => navigate("/")}
            sx={navbarButtonSX}
          >
            Home
          </Button>
          <Button
            variant={
              location.pathname.includes("/blogs") ? "selected" : "unselected"
            }
            onClick={() => navigate("/blogs")}
            sx={navbarButtonSX}
          >
            Blog
          </Button>
          <Button
            variant={
              location.pathname.includes("/portfolio")
                ? "selected"
                : "unselected"
            }
            onClick={() => navigate("/portfolio")}
            sx={navbarButtonSX}
          >
            Portfolio
          </Button>
          {/* <Button
            variant="unselected"
            onClick={() =>
              window
                .open(
                  "https://docs.google.com/document/d/1NrQ0TLz_1hpkAS-9DffDTQvYMeb7JyZU6OonJSnjOY0/edit?usp=sharing",
                  "_blank"
                )
                ?.focus()
            }
            sx={navbarButtonSX}
          >
            Resume
          </Button> */}
          <div ref={contactBtnRef}>
            <Button variant="cta" onClick={() => setShowContactMenu(true)}>
              Contact
            </Button>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
