import { Box, Container, Typography } from "@mui/material";
import { SearchControls, SearchResultsView } from "../components/search_controls";
import { useState } from "react";

function Portfolio() {
  const [queryValue, setQueryValue] = useState<string>("");

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
          pb: "4rem",
        }}
      >
        <Typography variant="h4">My Portfolio</Typography>
        <Typography variant="body1">A collection of work projects, tutorials, and more</Typography>
        <SearchControls queryValue={queryValue} onChange={(e) => setQueryValue(e.target.value)} />
        <SearchResultsView queryValue={queryValue} />
      </Box>
    </Container>
  );
}

export default Portfolio;
