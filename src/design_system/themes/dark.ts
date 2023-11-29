import { createTheme } from "@mui/material";
import { DEFAULT_THEME_OPTIONS, DARKMODE_TYPOGRAPHY_OPTIONS } from "./default";
import { USE_TEAL_DARK } from "./_colors";

export const darkTheme = createTheme({
  ...DEFAULT_THEME_OPTIONS,
  palette: {
    ...USE_TEAL_DARK,
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
