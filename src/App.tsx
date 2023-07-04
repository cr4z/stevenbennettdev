import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Home from "./views/home";
import Portfolio from "./views/portfolio";
import NavLayout from "./layouts/nav_layout";

function App() {
  return (
    <BrowserRouter>
      <NavLayout>
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
      </NavLayout>
    </BrowserRouter>
  );
}

export default App;
