import { ThemeOptions } from "@mui/material/styles";

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
    MuiCssBaseline: {
      styleOverrides: {
        code: {
          backgroundColor: "#444",
          padding: "3px 4px",
          borderRadius: "4px",
        },
      },
    },
    MuiTooltip: {
      defaultProps: { arrow: true, disableInteractive: true, enterDelay: 0 },
    },
  },
};
