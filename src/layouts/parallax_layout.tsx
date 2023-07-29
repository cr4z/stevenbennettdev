import { Box, styled } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";

function ParallaxHeaderLayout(props: { children: React.ReactNode; src: string }) {
  const { currentScreenSize } = useBreakpointHelper();

  function getHeaderHeight() {
    switch (currentScreenSize) {
      case "xs":
        return "15rem";
      case "sm":
        return "20rem";
      case "md":
        return "25rem";
      case "lg":
        return "25rem";
      case "xl":
        return "25rem";
    }
  }

  function getHeaderYOffset() {
    switch (currentScreenSize) {
      case "xs":
        return "0rem";
      case "sm":
        return "0rem";
      case "md":
        return "-13rem";
      case "lg":
        return "-25rem";
      case "xl":
        return "-35rem";
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
          }}
        />
        <Box
          sx={{ bgcolor: "#00cc9c50", height: "inherit", width: "inherit", top: 0, left: 0, position: "absolute" }}
        ></Box>
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
          <Box sx={{ bgcolor: "#111", mt: "-4px" }}>{props.children}</Box>
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
  transform: "translateZ(-1px) translateX(-25%) translateY(-20%)",
  width: "205%",
});

export default ParallaxHeaderLayout;
