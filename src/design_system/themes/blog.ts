import { createTheme } from "@mui/material";
import { USE_BLUE_PRIMARY } from "./_colors";

export const blogTheme = createTheme({
  palette: {
    ...USE_BLUE_PRIMARY,
    mode: "dark",
    grey: {
      400: "#969696",
      500: "#808080",
      600: "#747474",
      700: "#404040",
    },
    text: { primary: "#FFF" },
  },
  components: {
    MuiTooltip: {
      defaultProps: { arrow: true, disableInteractive: true, enterDelay: 0 },
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
    h1: {
      fontFamily: "Roboto-Condensed",
      fontSize: "96px",
    },
    h2: {
      fontFamily: "Lato",
      fontSize: "64px",
    },
    h3: {
      fontFamily: "Lato",
      fontSize: "48px",
      fontWeight: 200,
      letterSpacing: 1.5,
    },
    h4: {
      fontFamily: "Lato",
      fontSize: "36px",
      fontWeight: 200,
    },
    h5: {
      fontFamily: "Lato",
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
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 200,
      color: "#DDD",
    },
  },
});
