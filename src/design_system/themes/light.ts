import { createTheme } from "@mui/material";
import { DEFAULT_THEME_OPTIONS } from "./default";
import { LIGHTMODE_TYPOGRAPHY_OPTIONS } from "./typography";
import { USE_BLUE_PRIMARY } from "./_colors";

export const lightTheme = createTheme({
  ...DEFAULT_THEME_OPTIONS,
  palette: {
    ...USE_BLUE_PRIMARY,
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
