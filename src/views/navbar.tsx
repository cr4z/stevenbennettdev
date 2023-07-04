import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { useLocation, useNavigate } from "react-router";
import Menu from "../design_system/menu";
import useMenu from "../design_system/hooks/useMenu";
import { ICONS, IconRenderer } from "../design_system/icons";

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

  const { ref: contactBtnRef, show: showContactMenu, setShow: setShowContactMenu } = useMenu();

  return (
    <>
      {/* MENUS */}
      <Menu
        refCurrent={contactBtnRef.current}
        show={showContactMenu}
        onClose={() => setShowContactMenu(false)}
      >
        <Box
          sx={{ width: "20rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: ".5rem" }}
        >
          <Typography className="noselect" variant="h5">
            Contact
          </Typography>
          <Typography mt={1} mb={2} variant="body1">
            Let's make things happen!
          </Typography>
          <ContactOption
            rotate
            text="Phone: 830-220-1682"
            icon={<ICONS.Phone />}
            onClick={() => (window.location.href = `tel:830-220-1682`)}
          />
          <ContactOption
            text="Email"
            icon={<ICONS.Email />}
            onClick={() => (window.location.href = `mailto:stevencr7zz@gmail.com`)}
          />
          <ContactOption
            text="LinkedIn"
            icon={<ICONS.LinkedIn />}
            onClick={() => window.open("https://www.linkedin.com/in/sc-bennett/", "_blank")}
          />
          <ContactOption
            text="GitHub"
            icon={<ICONS.GitHub />}
            onClick={() => window.open("https://github.com/cr4z", "_blank")}
          />
        </Box>
      </Menu>

      {/* DOM */}
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
          <div ref={contactBtnRef}>
            <Tab label="Contact" isContact onClick={() => setShowContactMenu(true)} />
          </div>
        </Box>
      </Box>
    </>
  );
}

function ContactOption(props: { text: string; icon: JSX.Element; rotate?: boolean; onClick: () => void }) {
  const { palette } = useTheme();

  return (
    <Box component="li">
      <ButtonBase
        onClick={() => props.onClick()}
        className="noselect"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          ":hover": {
            bgcolor: "#FFF2",
          },
          padding: ".3rem",
          borderRadius: "4px",
        }}
      >
        <IconRenderer
          down={props.rotate}
          widthHeight={"2.5rem"}
          color={palette.text.primary}
          i={props.icon}
        />
        <Typography variant="body1">{props.text}</Typography>
      </ButtonBase>
    </Box>
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
