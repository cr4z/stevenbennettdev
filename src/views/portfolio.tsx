import { Box, Container, Typography } from "@mui/material";
import SearchOptions from "./search_options";

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
        <SearchOptions />
      </Box>
    </Container>
  );
}

export default Portfolio;
