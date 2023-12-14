import { Box, SxProps } from "@mui/material";
import { useRef, MutableRefObject, useState, useEffect } from "react";

type ShadowVariant = "basic" | "strong";
type ShadowVariantProp = { variant?: ShadowVariant };

type ShadowScrollProviderProps = {
  gap?: string;
  maxHeight: string;
  children: React.ReactNode;
  sx: SxProps;
  dependencies?: any[];
} & ShadowVariantProp;

export function SBDShadowScrollProvider(props: ShadowScrollProviderProps) {
  const dependencies = props.dependencies ?? [];
  const shadowVariant = props.variant ?? "basic";

  const scrollRef = useRef<HTMLDivElement>(null);
  const shadowStyle = useScrollShadow({
    scrollRef,
    colorHex: "#0008",
    dependencies,
    variant: shadowVariant,
  });

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        ref={scrollRef}
        className="green-scrollbar"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: props.gap,
          maxHeight: props.maxHeight,
          overflowY: "auto",
          ...shadowStyle,
          ...props.sx,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function useScrollShadow(
  props: {
    scrollRef: MutableRefObject<HTMLDivElement | null>;
    colorHex: string;
    dependencies: any[];
  } & ShadowVariantProp
) {
  const { scrollRef, colorHex, dependencies } = props;

  const [shadow, setShadow] = useState({ top: false, bottom: false });

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const checkShadow = () => {
      const threshold = 1;

      const topShadow = element.scrollTop > threshold;

      const bottomShadow = element.scrollTop + element.clientHeight < element.scrollHeight - threshold;

      setShadow({ top: topShadow, bottom: bottomShadow });
    };

    checkShadow();
    element.addEventListener("scroll", checkShadow);

    return () => {
      element.removeEventListener("scroll", checkShadow);
    };
  }, [scrollRef, ...dependencies]);

  let res: SxProps = {};

  switch (props.variant) {
    case "basic":
      res = {
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          height: "22px",
          zIndex: 2,
          pointerEvents: "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        },
        "&::before": {
          top: "-4%",
          backgroundImage: `radial-gradient(ellipse at center, ${colorHex} 0%, transparent 80%)`,
          opacity: shadow.top ? 1 : 0, // Fade in if shadow.top is true, otherwise fade out
        },
        "&::after": {
          bottom: "-4%",
          backgroundImage: `radial-gradient(ellipse at center, ${colorHex} 0%, transparent 80%)`,
          opacity: shadow.bottom ? 1 : 0, // Fade in if shadow.bottom is true, otherwise fade out
        },
      };
      return res;
    case "strong":
      res = {
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          height: "22px",
          zIndex: 2,
          pointerEvents: "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        },
        "&::before": {
          top: "-3.5%",
          backgroundImage: `radial-gradient(ellipse at center, ${colorHex} 0%, transparent 80%)`,
          opacity: shadow.top ? 1 : 0, // Fade in if shadow.top is true, otherwise fade out
        },
        "&::after": {
          bottom: "-3.5%",
          backgroundImage: `radial-gradient(ellipse at center, ${colorHex} 0%, transparent 80%)`,
          opacity: shadow.bottom ? 1 : 0, // Fade in if shadow.bottom is true, otherwise fade out
        },
      };
      return res;
    default:
      throw new Error("Fallthrough in switch! Has a new shadow variant been introduced?");
  }
}
