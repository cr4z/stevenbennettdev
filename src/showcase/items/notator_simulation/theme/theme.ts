import { createTheme } from "@mui/material";

export const notatorTheme = createTheme({
  palette: {
    background: {
      default: "#D3DBE2",
    },
    text: {
      primary: "#000C",
    },
    primary: {
      main: "#172A3A",
      light: "#75DDDD",
    },
    success: {
      dark: "#004346",
      main: "#09BC8A",
    },
    error: {
      main: "#ff3b55",
      dark: "#8E3B46",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
      },
    },
  },
  typography: {
    h6: {
      fontSize: "1.2rem",
      padding: 0,
    },
    body2: {
      fontWeight: 200,
    },
  },
});
