import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { PORTFOLIO_ITEMS } from "../data/portfolio_items";
import { useEffect, useState } from "react";

function PortfolioItem() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get ID from Path
  const [id, setID] = useState<string>("");
  useEffect(() => {
    setID(location.pathname.split("/")[2]);
  }, []);

  // Re-route to 404 if this page is dead
  const requestedPortfolioItem = PORTFOLIO_ITEMS.find((item) => item.id === id);
  const userHasAccessedDeadPage = requestedPortfolioItem === undefined && id != "";
  if (userHasAccessedDeadPage) navigate("/404");

  return <PortfolioLayout>{requestedPortfolioItem?.component}</PortfolioLayout>;
}

function PortfolioLayout(props: { children: React.ReactNode }) {
  return <Box>{props.children}</Box>;
}

export default PortfolioItem;
