import { Box, useTheme } from "@mui/material";
import Navbar from "../views/navbar";
import { SHOWCASES } from "../data/portfolio_items";
import { useLocation } from "react-router";
import { PortfolioItemDetails, SearchControls, SearchResultsView } from "../views/search_controls";
import Button from "../design_system/button";

function ShowcaseLayout() {
  const { palette } = useTheme();
  const location = useLocation();

  const showcase = SHOWCASES.find((i) => i.id === location.pathname.split("/")[2]);
  const SIDEBAR_WIDTH = "25rem";

  return (
    Boolean(showcase?.component) && (
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
          <Box sx={{ minWidth: SIDEBAR_WIDTH, maxWidth: SIDEBAR_WIDTH }}>
            {showcase && <PortfolioItemDetails {...showcase} />}
          </Box>
          <Button variant="call to action">View Code on GitHub</Button>
        </Box>
        <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
          <Box
            sx={{
              height: "100%",
              minWidth: SIDEBAR_WIDTH,
              maxWidth: SIDEBAR_WIDTH,
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
            {showcase?.component}
          </Box>
        </Box>
      </Box>
    )
  );
}

export default ShowcaseLayout;
