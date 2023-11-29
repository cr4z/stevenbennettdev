import { PaletteOptions } from "@mui/material";

const USE_TEAL: PaletteOptions = {
  primary: {
    light: "#03f8c5",
    main: "#00cc9c",
    dark: "#024d4f",
  },
  secondary: {
    main: "#06A3C6",
  },
};

export const USE_TEAL_DARK: PaletteOptions = {
  ...USE_TEAL,
  background: {
    default: "#2F2F2F",
  },
};
export const USE_TEAL_LIGHT: PaletteOptions = {
  ...USE_TEAL,
};

// const USE_BLUE_PRIMARY: PaletteOptions = {
//   primary: {
//     light: "#5BC6FF",
//     main: "#30A2DE",
//     dark: "#11425C",
//   },
//   background: {
//     default: "#2F2E2F",
//   },
// };

// const USE_RED_PRIMARY: PaletteOptions = {
//   primary: {
//     light: "red",
//     main: "#e61134",
//     dark: "#5B2626",
//   },
//   background: {
//     default: "#2F2E2F",
//   },
// };
