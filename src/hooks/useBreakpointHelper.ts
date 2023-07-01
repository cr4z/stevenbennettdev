import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

interface IBreakpointerHelper {
  isMobile: boolean;
  isWider: (breakpoint: number | Breakpoint) => boolean;
  currentScreenSize: Breakpoint;
}
export function useBreakpointHelper(): IBreakpointerHelper {
  const thm = useTheme();
  const isMobile = useMediaQuery(thm.breakpoints.between("xs", "sm"));
  const getMediaQuery = useMediaQuery;

  function isWider(breakpoint: number | Breakpoint): boolean {
    return getMediaQuery(thm.breakpoints.up(breakpoint));
  }

  const isXl = getMediaQuery(thm.breakpoints.up("xl"));
  const isLg = getMediaQuery(thm.breakpoints.up("lg"));
  const isMd = getMediaQuery(thm.breakpoints.up("md"));
  const isSm = getMediaQuery(thm.breakpoints.up("sm"));

  const currentScreenSize = isXl ? "xl" : isLg ? "lg" : isMd ? "md" : isSm ? "sm" : "xs";

  return { isMobile: isMobile, isWider: isWider, currentScreenSize: currentScreenSize };
}
