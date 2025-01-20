/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { useLocation, useNavigate } from "react-router";
import Menu from "../design_system/menu";
import ContactMenu from "../components/contact";
// @ts-ignore
import { ReactComponent as SBLogo } from "../svgs/logo.svg";
import SBDButton from "../design_system/button";
import { Link } from "react-router-dom";
import { useMemo, useRef } from "react";
import { IconRenderer } from "../design_system/icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setContactDialog } from "../redux/slices/contact_dialog_slice";

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
    () => (props.mobile ? { height: "3rem", width: "100%" } : { width: "12rem" }),
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
          // Height isn't controlled here, it's controlled by layout
          display: "flex",
          px: "1rem",
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

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", maxWidth: props.mobile ? "100%" : "24rem", gap: ".5rem" }}
          ref={contactBtnRef}
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
          <SBDButton variant="cta" sx={navbarButtonSX} onClick={() => dispatch(setContactDialog(true))}>
            Contact
          </SBDButton>
        </Stack>
      </Box>
    </>
  );
}

export default Navbar;
