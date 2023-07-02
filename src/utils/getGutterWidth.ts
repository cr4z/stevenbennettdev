import { Breakpoint } from "@mui/material";

function getGutterWidth(currentScreenSize: Breakpoint): string {
  switch (currentScreenSize) {
    case "xs":
      return "2rem";
    case "sm":
    case "md":
    case "lg":
    case "xl":
      return "3rem";
  }
}

export const utils = {
  getGutterWidth,
};
