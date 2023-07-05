import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./views/home";
import Portfolio from "./views/portfolio";
import PortfolioItem from "./views/portfolio_id";
import Page404 from "./views/404";
import SearchLayout from "./layouts/search_layout";
import NavLayout from "./layouts/nav_layout";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/*" element={<PortfolioItem />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );

  const { pathname } = useLocation();

  const route = pathname.split("/");

  const userIsViewingPortfolioItem = route[1] === "portfolio" && route.length > 2;

  if (userIsViewingPortfolioItem) {
    return <SearchLayout>{routes}</SearchLayout>;
  } else {
    return <NavLayout>{routes}</NavLayout>;
  }
}

export default App;
