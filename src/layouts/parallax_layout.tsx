/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, Typography, styled, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";

function ParallaxHeaderLayout(props: {
  children: React.ReactNode;
  src: string;
  parallaxContainerRef: React.RefObject<HTMLDivElement>;
}) {
  const { palette } = useTheme();
  const {
    getHeaderHeight,
    getNameOffsetY,
    getNameOffsetX,
    getHeaderYOffset,
    getNameSize,
  } = useResponsiveStyles();
  const { isGreaterThanEqualTo, isMobile, isUnder400 } = useBreakpointHelper();

  function ParallaxHeaderImage() {
    return (
      <Box
        sx={{
          height: "160rem",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "inherit",
            width: "inherit",
            objectFit: "cover",
            backgroundImage: `url(${props.src})`,
            backgroundSize: "100% auto",
            backgroundPositionY: getHeaderYOffset(),
            top: 0,
            left: 0,
            position: "absolute",
            filter: "hue-rotate(10deg)",
          }}
        />
        <Box
          sx={{
            bgcolor: "#00cc9c30",
            height: "inherit",
            width: "inherit",
            top: 0,
            left: 0,
            position: "absolute",
          }}
        />
        <Box
          className="noselect"
          sx={{
            height: "inherit",
            width: "inherit",
            ...(isGreaterThanEqualTo("lg")
              ? {
                  top: `calc(${getNameOffsetY()} + 20vw * 3.2)`,
                  left: getNameOffsetX(),
                }
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  top:
                    // Todo: As a last minute addition, this isn't readable as I would hope. I will refactor later.
                    isGreaterThanEqualTo("md")
                      ? "-46rem"
                      : isMobile
                      ? isUnder400
                        ? "-52rem"
                        : "-58rem"
                      : "-54rem",
                }),
            position: "absolute",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: isGreaterThanEqualTo("lg") ? "unset" : "#3334",
              width: "max-content",
              padding: "1rem 4rem",
              borderRadius: "2rem"
            }}
          >
            <Typography variant="h1" sx={{ fontSize: getNameSize() }}>
              Steven Bennett
            </Typography>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                textAlign: "center",
                width: "60rem",
                ...(isMobile ? { fontSize: "3rem" } : {}),
                fontFamily: "Roboto"
              }}
            >
              Developer, architect, learner, team player
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <ParallaxContainer ref={props.parallaxContainerRef}>
      <ParallaxBackground>
        <Box sx={{ width: "100%", display: "flex" }}>
          <ParallaxHeaderImage />
        </Box>
      </ParallaxBackground>
      <ParallaxBase>
        <Box
          sx={{ position: "absolute", width: "100%", mt: getHeaderHeight() }}
        >
          <Box sx={{ bgcolor: palette.background.default, mt: "-4px" }}>
            {props.children}
          </Box>
        </Box>
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
  transform: "translateZ(-1px) translateX(-25%) translateY(-22%)",
  width: "205%",
});

interface ResponsiveStyles {
  getHeaderHeight: () => string;
  getHeaderYOffset: () => string;
  getNameOffsetY: () => string;
  getNameSize: () => string;
  getNameOffsetX: () => string;
}

function useResponsiveStyles(): ResponsiveStyles {
  const { currentScreenSize, isUnder400 } = useBreakpointHelper();

  function getHeaderHeight() {
    switch (currentScreenSize) {
      case "xs":
        return "13rem";
      case "sm":
        return "16rem";
      case "md":
        return "25rem";
      case "lg":
        return "25rem";
      case "xl":
        return "35rem";
    }
  }

  function getHeaderYOffset() {
    switch (currentScreenSize) {
      case "xs":
        return isUnder400 ? "16rem" : "9rem";
      case "sm":
        return "2rem";
      case "md":
        return "-6vh";
      case "lg":
        return "-28vh";
      case "xl":
        return "-36vh";
    }
  }

  function getNameOffsetY() {
    switch (currentScreenSize) {
      case "xs":
        return "-31vh";
      case "sm":
        return "-20vh";
      case "md":
        return "-36vh";
      case "lg":
        return "-55vh";
      case "xl":
        return "-70vh";
    }
  }

  function getNameOffsetX() {
    switch (currentScreenSize) {
      case "xs":
        return "40%";
      case "sm":
        return "20%";
      case "md":
        return "40%";
      case "lg":
        return "50%";
      case "xl":
        return "50%";
    }
  }

  function getNameSize() {
    switch (currentScreenSize) {
      case "xs":
        return "7rem";
      case "sm":
        return "10rem";
      case "md":
        return "10rem";
      case "lg":
        return "10rem";
      case "xl":
        return "13rem";
    }
  }

  return {
    getHeaderHeight: getHeaderHeight,
    getHeaderYOffset: getHeaderYOffset,
    getNameOffsetY: getNameOffsetY,
    getNameSize: getNameSize,
    getNameOffsetX: getNameOffsetX,
  };
}

export default ParallaxHeaderLayout;
