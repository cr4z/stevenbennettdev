import { createTheme } from "@mui/material";
import { DEFAULT_THEME_OPTIONS } from "./default";
import { USE_BLUE_PRIMARY } from "./_colors";
import { DARKMODE_TYPOGRAPHY_OPTIONS } from "./typography";

export const darkTheme = createTheme({
  ...DEFAULT_THEME_OPTIONS,
  palette: {
    ...USE_BLUE_PRIMARY,
    mode: "dark",
    grey: {
      400: "#969696",
      500: "#808080",
      600: "#747474",
    },
    text: { primary: "#FFF" },
  },
  typography: DARKMODE_TYPOGRAPHY_OPTIONS,
});
