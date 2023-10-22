import { ButtonBase, Typography, useTheme } from "@mui/material";
import { ICONS, IconRenderer } from "../design_system/icons";

export function ContactButtonPhone() {
  return (
    <ContactOption
      rotate
      text="(830) 220-1682"
      icon={<ICONS.Phone />}
      onClick={() => (window.location.href = `tel:830-220-1682`)}
    />
  );
}

export function ContactButtonEmail() {
  return (
    <ContactOption
      text="steven@stevenbennett.dev"
      icon={<ICONS.Email />}
      onClick={() => (window.location.href = `mailto:stevencr7zz@gmail.com`)}
    />
  );
}

export function ContactButtonLinkedIn() {
  return (
    <ContactOption
      text="Steven Bennett on LinkedIn"
      icon={<ICONS.LinkedIn />}
      onClick={() =>
        window.open("https://www.linkedin.com/in/sc-bennett/", "_blank")
      }
    />
  );
}

export function ContactButtonGitHub() {
  return (
    <ContactOption
      text="cr4z on GitHub"
      icon={<ICONS.GitHub />}
      onClick={() => window.open("https://github.com/cr4z", "_blank")}
    />
  );
}

function ContactOption(props: {
  text: string;
  icon: JSX.Element;
  rotate?: boolean;
  onClick: () => void;
}) {
  const { palette } = useTheme();

  return (
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
        height: "4rem",
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
  );
}
