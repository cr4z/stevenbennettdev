import { createTheme } from "@mui/material";
import { DEFAULT_THEME_OPTIONS, LIGHTMODE_TYPOGRAPHY_OPTIONS } from "./default";
import { USE_TEAL_LIGHT } from "./_colors";

export const lightTheme = createTheme({
  ...DEFAULT_THEME_OPTIONS,
  palette: {
    ...USE_TEAL_LIGHT,
    mode: "light",
    grey: {
      400: "#969696",
      500: "#808080",
      600: "#747474",
    },
    text: { primary: "#000" },
  },
  typography: LIGHTMODE_TYPOGRAPHY_OPTIONS,
});
