/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, styled } from "@mui/material";
import React from "react";

function ParallaxHeaderLayout(props: {
  children: React.ReactNode;
  src: React.ReactNode;
  parallaxContainerRef: React.RefObject<HTMLDivElement>;
  upperMargin: string;
}) {
  return (
    <ParallaxContainer ref={props.parallaxContainerRef}>
      <ParallaxBackground>
        <Box sx={{ width: "100%", display: "flex" }}>{props.src}</Box>
      </ParallaxBackground>
      <ParallaxBase>
        <Box sx={{ position: "absolute", width: "100%", mt: props.upperMargin }}>{props.children}</Box>
      </ParallaxBase>
    </ParallaxContainer>
  );
}

const ParallaxContainer = styled("div")({
  height: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  WebkitPerspective: "1px",
  perspective: "1px",
  width: "100%",
});

const ParallaxBase = styled("div")({
  position: "absolute",
  width: "100%",
  transform: "translateZ(0)",
});

const ParallaxBackground = styled("div")({
  position: "absolute",
  transform: "translateZ(-.5px) translateX(-25%) translateY(-28%)",
  width: "200%",
});

export default ParallaxHeaderLayout;
