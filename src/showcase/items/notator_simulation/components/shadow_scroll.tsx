import { Box, SxProps } from "@mui/material";
import { useRef, MutableRefObject, useState, useEffect } from "react";

export function ShadowScrollProvider(props: {
  gap: string;
  maxHeight: string;
  children: React.ReactNode;
  dependencies?: any[];
}) {
  const dependencies = props.dependencies ?? [];

  const scrollRef = useRef<HTMLDivElement>(null);
  const shadowStyle = useScrollShadow({
    scrollRef,
    colorHex: "#0004",
    dependencies,
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
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function useScrollShadow(props: {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
  colorHex: string;
  dependencies: any[];
}) {
  const { scrollRef, colorHex, dependencies } = props;

  const [shadow, setShadow] = useState({ top: false, bottom: false });

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const checkShadow = () => {
      const threshold = 1;

      const topShadow = element.scrollTop > threshold;

      const bottomShadow =
        element.scrollTop + element.clientHeight <
        element.scrollHeight - threshold;

      setShadow({ top: topShadow, bottom: bottomShadow });
    };

    checkShadow();
    element.addEventListener("scroll", checkShadow);

    return () => {
      element.removeEventListener("scroll", checkShadow);
    };
  }, [scrollRef, ...dependencies]);

  const shadowStyle: SxProps = {
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

  return shadowStyle;
}
