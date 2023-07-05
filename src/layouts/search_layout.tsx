import { Box, useTheme } from "@mui/material";
import Navbar from "../views/navbar";
import { PORTFOLIO_ITEMS } from "../data/portfolio_items";
import { useLocation, useNavigate } from "react-router";
import { PortfolioItemDetails, SearchControls, SearchResultsView } from "../views/search_controls";
import { useState, useEffect } from "react";
import Button from "../design_system/button";

function SearchLayout(props: { children: React.ReactNode }) {
  const { palette } = useTheme();

  // ----------- make this redux state ultimately -----------
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

  const SIDEBAR_WIDTH = "25rem";

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          height: "4rem",
          borderBottom: `1px solid ${palette.grey[800]}`,
        }}
      >
        <Navbar />
      </Box>

      <Box
        sx={{
          height: "6rem",
          borderBottom: `1px solid ${palette.grey[800]}`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: SIDEBAR_WIDTH }}>
          {requestedPortfolioItem && <PortfolioItemDetails {...requestedPortfolioItem} />}
        </Box>
        <Button variant="call to action">View Code on GitHub</Button>
      </Box>
      <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            height: "100%",
            width: SIDEBAR_WIDTH,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            borderRight: `1px solid ${palette.grey[800]}`,
          }}
        >
          <Box sx={{ px: "1rem", py: "1rem" }}>
            <SearchControls />
          </Box>

          <SearchResultsView />
        </Box>
        <Box
          sx={{
            bgcolor: palette.background.default,
            height: "100%",
            overflowY: "auto",
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}

export default SearchLayout;
