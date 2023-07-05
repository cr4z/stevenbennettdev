import { Box, Container, Typography } from "@mui/material";
import PortfolioItemSearch from "./portfolio_item_search";

function Portfolio() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          paddingTop: "4rem",
          width: "100%",
        }}
      >
        <Typography variant="h4">My Portfolio</Typography>
        <Typography variant="body1">A collection of work projects, tutorials, and more</Typography>
        <PortfolioItemSearch />
      </Box>
    </Container>
  );
}

export default Portfolio;
