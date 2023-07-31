import { Box, Typography, styled, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";

function ParallaxHeaderLayout(props: { children: React.ReactNode; src: string }) {
  const { palette } = useTheme();
  const { getHeaderHeight, getNameOffsetY, getNameOffsetX, getHeaderYOffset, getNameSize } =
    useResponsiveStyles();
  const { isGreaterThanEqualTo, isMobile } = useBreakpointHelper();

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
              ? { top: `calc(${getNameOffsetY()} + 20vw * 3.2)`, left: getNameOffsetX() }
              : {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  left: "-1rem",
                  top: isGreaterThanEqualTo("md") ? "-46rem" : isMobile ? "-58rem" : "-50rem",
                }),
            position: "absolute",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: getNameSize() }}>
            Steven Bennett
          </Typography>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{ textAlign: "center", width: "60rem", ...(isMobile ? { fontSize: "3rem" } : {}) }}
          >
            Developer, architect, learner, team player
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <ParallaxContainer>
      <ParallaxBackground>
        <Box sx={{ width: "100%", display: "flex" }}>
          <ParallaxHeaderImage />
        </Box>
      </ParallaxBackground>
      <ParallaxBase>
        <Box sx={{ position: "absolute", width: "100%", mt: getHeaderHeight() }}>
          <Box sx={{ bgcolor: palette.background.default, mt: "-4px" }}>{props.children}</Box>
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
  const { currentScreenSize } = useBreakpointHelper();

  function getHeaderHeight() {
    switch (currentScreenSize) {
      case "xs":
        return "13rem";
      case "sm":
        return "20rem";
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
        return "9rem";
      case "sm":
        return "8rem";
      case "md":
        return "-6vh";
      case "lg":
        return "-30vh";
      case "xl":
        return "-40vh";
    }
  }

  function getNameOffsetY() {
    switch (currentScreenSize) {
      case "xs":
        return "-31vh";
      case "sm":
        return "-29vh";
      case "md":
        return "-36vh";
      case "lg":
        return "-54vh";
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
