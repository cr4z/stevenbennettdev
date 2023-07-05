import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./views/home";
import Portfolio from "./views/portfolio";
import NavLayout from "./layouts/nav_layout";
import PortfolioItem from "./views/search_full_result";
import Page404 from "./views/404";

function App() {
  return (
    <BrowserRouter>
      <NavLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/*" element={<PortfolioItem />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </NavLayout>
    </BrowserRouter>
  );
}

export default App;
