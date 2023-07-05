import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { SHOWCASES } from "../data/portfolio_items";

function Showcase() {
  const location = useLocation();

  const [requestedID, setID] = useState<string>("");
  useEffect(() => {
    setID(location.pathname.split("/")[2]);
  }, []);

  const requestedPortfolioItem = SHOWCASES.find((item) => item.id === requestedID);

  return <>{requestedPortfolioItem?.component}</>;
}

export default Showcase;
