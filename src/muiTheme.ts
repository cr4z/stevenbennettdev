import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#F00" },
  },
  typography: {
    allVariants: {
      fontFamily: "Roboto",
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
      fontWeight: "500",
      letterSpacing: "0.08px",
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
