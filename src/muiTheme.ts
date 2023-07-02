import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#2F2E2F",
    },
    primary: {
      main: "#30A2DE",
    },
    grey: {
      500: "#808080", // Add your desired light gray color here
    },
  },

  typography: {
    allVariants: {
      color: "white",
    },
    h1: {
      fontFamily: "Roboto",
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
  },
});
