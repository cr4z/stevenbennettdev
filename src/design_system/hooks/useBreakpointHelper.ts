import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

/**
 * Deprecated. Use MUI directly. Am refactoring prior referenes as I go.
 */
export function useBreakpointHelper(): IBreakpointerHelper {
  const thm = useTheme();
  const isMobile = useMediaQuery(thm.breakpoints.between("xs", "sm"));
  const getMediaQuery = useMediaQuery;

  function isGreaterEqual(breakpoint: number | Breakpoint): boolean {
    return getMediaQuery(thm.breakpoints.up(breakpoint));
  }

  const isXl = getMediaQuery(thm.breakpoints.up("xl"));
  const isLg = getMediaQuery(thm.breakpoints.up("lg"));
  const isMd = getMediaQuery(thm.breakpoints.up("md"));
  const isSm = getMediaQuery(thm.breakpoints.up("sm"));

  const currentScreenSize = isXl ? "xl" : isLg ? "lg" : isMd ? "md" : isSm ? "sm" : "xs";

  const isUnder400 = useMediaQuery("(max-width:400px)");

  return {
    isUnder400: isUnder400,
    isMobile: isMobile,
    isGreaterThanEqualTo: isGreaterEqual,
    currentScreenSize: currentScreenSize,
  };
}

interface IBreakpointerHelper {
  isUnder400: boolean;
  isMobile: boolean;
  isGreaterThanEqualTo: (breakpoint: number | Breakpoint) => boolean;
  currentScreenSize: Breakpoint;
}
