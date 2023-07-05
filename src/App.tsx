import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Portfolio from "./views/portfolio";
import Page404 from "./views/404";
import NavLayout from "./layouts/nav_layout";
import ShowcaseLayout from "./layouts/showcase_layout";

function App() {
  return (
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
            <Home />
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
  );
}

export default App;
