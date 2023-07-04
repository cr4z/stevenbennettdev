import { PaletteOptions, createTheme } from "@mui/material/styles";

const USE_BLUE_PRIMARY: PaletteOptions = {
  primary: {
    light: "#5BC6FF",
    main: "#30A2DE",
    dark: "#11425C",
  },
  background: {
    default: "#2F2E2F",
  },
};

const USE_RED_PRIMARY: PaletteOptions = {
  primary: {
    light: "red",
    main: "#e61134",
    dark: "#5B2626",
  },
  background: {
    default: "#2F2E2F",
  },
};

const USE_TEAL_PRIMARY: PaletteOptions = {
  primary: {
    light: "#03f8c5",
    main: "#00cc9c",
    dark: "#024d4f",
  },
  background: {
    default: "#2F2E2F",
  },
};

export const theme = createTheme({
  palette: {
    ...USE_TEAL_PRIMARY,

    grey: {
      400: "#969696",
      500: "#808080",
      600: "#747474",
      700: "#404040",
    },
    text: { primary: "#FFF" },
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
      fontSize: "12px",
      fontWeight: "500",
    },
    button: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "capitalize",
      letterSpacing: "0.08px",
    },
    subtitle1: {
      fontFamily: "Inter",
      fontSize: "14px",
    },
  },
});
