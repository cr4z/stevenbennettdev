import { Route, Routes } from "react-router-dom";
import Portfolio from "./views/portfolio";
import Page404 from "./views/404";
import NavLayout from "./layouts/nav_layout";
import ShowcaseLayout from "./views/portfolio_id";
import Home2 from "./views/home";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/portfolio/*" element={<ShowcaseLayout />} />

        <Route
          path="*"
          element={
            <NavLayout>
              <Page404 />
            </NavLayout>
          }
        />
        <Route
          path="/"
          element={
            <NavLayout>
              <Home2 />
            </NavLayout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <NavLayout>
              <Portfolio />
            </NavLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
