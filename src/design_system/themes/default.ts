import { ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const customShadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px";
const shadows: [
  "none",
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] = Array(25).fill(customShadow) as any;
shadows[0] = "none";

export const DEFAULT_THEME_OPTIONS: ThemeOptions = {
  shadows,
  components: {
    MuiTooltip: {
      defaultProps: { arrow: true, disableInteractive: true, enterDelay: 0 },
    },
  },
};

export const DARKMODE_TYPOGRAPHY_OPTIONS: TypographyOptions = {
  allVariants: {
    color: "#FFF",
  },
  h1: {
    fontFamily: "Roboto-Condensed",
    fontSize: "96px",
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "64px",
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "48px",
    fontWeight: 200,
    letterSpacing: 1.5,
  },
  h4: {
    fontFamily: "Roboto",
    fontSize: "36px",
    fontWeight: 200,
  },
  h5: {
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: 200,
  },
  h6: {
    fontFamily: "Roboto",
    fontSize: "18px",
  },
  body1: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "200",
    letterSpacing: "0.2px",
  },
  body2: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    letterSpacing: "0.2px",
    color: "#969696",
  },
  button: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: "0.08px",
  },
  subtitle1: {
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "1.6rem",
  },
};

export const LIGHTMODE_TYPOGRAPHY_OPTIONS: TypographyOptions = {
  allVariants: {
    color: "#333",
  },
  h1: {
    fontFamily: "Roboto-Condensed",
    fontSize: "96px",
  },
  h2: {
    fontFamily: "Roboto",
    fontSize: "64px",
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: "48px",
    fontWeight: 200,
    letterSpacing: 1.5,
  },
  h4: {
    fontFamily: "Roboto",
    fontSize: "36px",
    fontWeight: 200,
  },
  h5: {
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: 200,
  },
  h6: {
    fontFamily: "Roboto",
    fontSize: "18px",
  },
  body1: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    letterSpacing: "0.2px",
  },
  body2: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "300",
    letterSpacing: "0.2px",
    color: "#969696",
  },
  button: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: "0.08px",
  },
  subtitle1: {
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "1.6rem",
  },
};
