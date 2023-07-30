import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { ICONS, IconRenderer } from "../design_system/icons";

function ContactMenu() {
  return (
    <Box sx={{ width: "20rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: ".5rem" }}>
      <Typography className="noselect" variant="h5">
        Contact
      </Typography>
      <Typography mt={1} mb={2} variant="body1">
        Let's make things happen!
      </Typography>
      <ContactOption
        rotate
        text="830-220-1682"
        icon={<ICONS.Phone />}
        onClick={() => (window.location.href = `tel:830-220-1682`)}
      />
      <ContactOption
        text="steven@stevenbennett.dev"
        icon={<ICONS.Email />}
        onClick={() => (window.location.href = `mailto:stevencr7zz@gmail.com`)}
      />
      <ContactOption
        text="Steven Bennett on LinkedIn"
        icon={<ICONS.LinkedIn />}
        onClick={() => window.open("https://www.linkedin.com/in/sc-bennett/", "_blank")}
      />
      <ContactOption
        text="cr4z on GitHub"
        icon={<ICONS.GitHub />}
        onClick={() => window.open("https://github.com/cr4z", "_blank")}
      />
    </Box>
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
          padding: ".6rem",
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

export default ContactMenu;
