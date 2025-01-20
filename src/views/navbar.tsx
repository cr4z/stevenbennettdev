/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { useLocation, useNavigate } from "react-router";
import Menu from "../design_system/menu";
import ContactMenu from "../components/contact";
// @ts-ignore
import { ReactComponent as SBLogo } from "../svgs/logo.svg";
import SBDButton from "../design_system/button";
import { Link } from "react-router-dom";
import { useCallback, useMemo, useRef } from "react";
import { IconRenderer } from "../design_system/icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setContactDialog } from "../redux/slices/contact_dialog_slice";
import { set } from "react-hook-form";

/**
 * TODO: Refactor this
 */
function Navbar(props: { mobile?: boolean }) {
  const { isGreaterThanEqualTo } = useBreakpointHelper(); // Replace with direct use of useMediaQuery
  const { palette } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const contactBtnRef = useRef<HTMLDivElement | null>(null);
  const showContactMenu = useAppSelector((state) => state.contactDialogReducer.isContactDialogOpen);
  const dispatch = useAppDispatch();

  const navbarButtonSX = useMemo(
    () => (props.mobile ? { fontWeight: "bold", width: "100%", height: "3rem" } : { fontWeight: "bold" }),
    [props.mobile]
  );

  return (
    <>
      {/* MENUS */}
      <Menu
        refCurrent={contactBtnRef.current}
        show={showContactMenu}
        onClose={() => dispatch(setContactDialog(false))}
      >
        <ContactMenu />
      </Menu>

      {/* DOM */}
      <Box
        sx={{
          bgcolor: palette.background.default,
          px: "1rem",
          // Height isn't controlled here, it's controlled by layout
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ...(props.mobile
            ? {
                height: "6rem",
                borderTop: "1px solid " + palette.grey[800],
              }
            : {
                height: "4rem",
                borderBottom: "1px solid " + palette.grey[800],
              }),
        }}
      >
        {!props.mobile && (
          <Box
            sx={{
              a: { textDecoration: "none" },
            }}
          >
            <Link to="/" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <IconRenderer i={<SBLogo />} widthHeight="2.5rem" />

              {isGreaterThanEqualTo(650) && (
                <Typography className="noselect" variant="h4" sx={{ fontFamily: "Roboto" }}>
                  Steven Bennett
                </Typography>
              )}
            </Link>
          </Box>
        )}

        <Box
          ref={contactBtnRef}
          sx={
            props.mobile
              ? {
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }
              : {
                  display: "flex",
                  minWidth: "265px",
                  justifyContent: "space-between",
                  gap: ".4rem",
                }
          }
        >
          <SBDButton
            variant={location.pathname === "/" ? "selected" : "unselected"}
            onClick={() => navigate("/")}
            sx={navbarButtonSX}
          >
            Home
          </SBDButton>
          <SBDButton
            variant="unselected"
            onClick={() => window.open("https://medium.com/@stevencr7zz", "_blank")}
            sx={navbarButtonSX}
          >
            Blog
          </SBDButton>
          {props.mobile && <IconRenderer i={<SBLogo />} widthHeight="2.5rem" />}
          <SBDButton
            variant={location.pathname.includes("/portfolio") ? "selected" : "unselected"}
            onClick={() => navigate("/portfolio")}
            sx={navbarButtonSX}
          >
            Portfolio
          </SBDButton>
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
          <SBDButton variant="cta" sx={navbarButtonSX} onClick={() => dispatch(setContactDialog(true))}>
            Contact
          </SBDButton>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
