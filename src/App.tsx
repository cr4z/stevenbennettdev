import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box, useTheme, Typography } from "@mui/material";
import { useBreakpointHelper } from "./hooks/useBreakpointHelper";
import Home from "./views/home";
import Portfolio from "./views/portfolio";

const App = () => {
  const { palette } = useTheme();

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box height={"6rem"}>
          <Navbar />
        </Box>
        <Box sx={{ bgcolor: palette.background.default, height: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

function Navbar() {
  const { currentScreenSize } = useBreakpointHelper();
  const { palette } = useTheme();

  function getNavbarPaddingX() {
    switch (currentScreenSize) {
      case "xl":
        return "3rem";
      case "lg":
        return "3rem";
      case "md":
        return "3rem";
      case "sm":
        return "3rem";
      case "xs":
        return "3rem";
    }
  }

  return (
    <Box
      sx={{
        bgcolor: palette.background.default,
        paddingX: getNavbarPaddingX(),
        height: "100%",
        display: "flex",
        alignItems: "center",
        borderBottom: `1px solid ${palette.grey[500]}`,
      }}
    >
      <Typography variant="h4">Steven Bennett</Typography>
    </Box>
  );
}

export default App;
