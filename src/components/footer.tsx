import { Box, SxProps, Typography } from "@mui/material";
import {
  ContactButtonEmail,
  ContactButtonGitHub,
  ContactButtonLinkedIn,
  ContactButtonPhone,
} from "./contact_options";
import SBLogo from "../svgs/logo.svg";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";

const leftRightSX: SxProps = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: ".5rem",
};

export function Footer() {
  const bph = useBreakpointHelper();

  return bph.isGreaterThanEqualTo("md") ? <DesktopFooter /> : <MobileFooter />;
}

function MobileFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderTop: "1px solid #555",
        p: "3rem",
        justifyContent: "center",
        alignContent: "center",
        gap: "3rem",
      }}
    >
      <CenterpieceLogo />
      <Box sx={leftRightSX}>
        <ContactButtonPhone />
        <ContactButtonEmail />
        <ContactButtonLinkedIn />
        <ContactButtonGitHub />
      </Box>
    </Box>
  );
}

function DesktopFooter() {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid #555",
        display: "flex",
        height: "12rem",
        justifyContent: "center",
        alignContent: "center",
        gap: "4rem",
      }}
    >
      <Box sx={leftRightSX}>
        <ContactButtonPhone />
        <ContactButtonEmail />
      </Box>
      <CenterpieceLogo />
      <Box sx={leftRightSX}>
        <ContactButtonLinkedIn />
        <ContactButtonGitHub />
      </Box>
    </Box>
  );
}

function CenterpieceLogo() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box component="img" src={SBLogo} sx={{ width: "3rem" }} />
      <Typography className="noselect" variant="h4" sx={{ paddingX: ".5rem" }}>
        Steven Bennett
      </Typography>
    </Box>
  );
}
