import { Box, Typography, styled, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";

function ParallaxHeaderLayout(props: { children: React.ReactNode; src: string }) {
  const { currentScreenSize, isGreaterThanEqualTo } = useBreakpointHelper();
  const { palette } = useTheme();

  function getHeaderHeight() {
    switch (currentScreenSize) {
      case "xs":
        return "14rem";
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
        return "-68vh";
      case "sm":
        return "-8vh";
      case "md":
        return "-13vh";
      case "lg":
        return "-40vh";
      case "xl":
        return "-50vh";
    }
  }

  function ParallaxHeaderImage() {
    return (
      <Box
        sx={{
          height: "130rem",
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
            transform: "rotate(1.4deg)",
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
            top: "calc(-45rem + 20vw *3.3)",
            left: "50%",
            position: "absolute",
          }}
        >
          <Typography variant="h1" sx={{ fontSize: "13rem" }}>
            Steven Bennett
          </Typography>
          <Typography variant="h2">Developer, architect, learner, team player</Typography>
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

export default ParallaxHeaderLayout;
