import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Home from "./views/home";
import Portfolio from "./views/portfolio";
import Navbar from "./views/navbar";
import { useBreakpointHelper } from "./design_system/hooks/useBreakpointHelper";

const App = () => {
  const { palette } = useTheme();
  const { isMobile } = useBreakpointHelper();

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box
          minHeight={isMobile ? "4rem" : "6rem"}
          sx={{
            borderBottom: `1px solid ${palette.grey[800]}`,
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{ bgcolor: palette.background.default, maxHeight: "100%", overflowY: "scroll" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="*"
              element={
                <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                  <Typography sx={{ mt: "8rem", mb: "2rem", fontSize: "10rem" }} variant="h1">
                    404
                  </Typography>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Hm, I couldn't find this page. If you believe this to be an error, please feel free to
                    reach out through the <strong>Contact</strong> tab!
                  </Typography>
                </Container>
              }
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
