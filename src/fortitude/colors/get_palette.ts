import { placeholderForFutureErrorLogText } from "../placeholder";
import { LIGHT } from "./themes/light";
import { XLogsPalette, XNGTheme } from "./types";

export function getPalette(theme: XNGTheme): XLogsPalette {
  switch (theme) {
    case XNGTheme.Light:
      return LIGHT;
    default:
      throw new Error(placeholderForFutureErrorLogText);
  }
}
