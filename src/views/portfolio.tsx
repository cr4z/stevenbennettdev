import { Box, Container, Typography } from "@mui/material";
import { SearchControls, SearchResultsView } from "../components/search_controls";
import { useState } from "react";
import Slideshow from "../components/slideshow";
import { ViewGithubDirectlyButton } from "../components/github_button";

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
        <Typography mb="2rem" variant="body1">
          A collection of work projects, tutorials, and more
        </Typography>

        <Box mb="1rem">
          <ViewGithubDirectlyButton />
        </Box>

        <Slideshow />

        <SearchControls queryValue={queryValue} onChange={(e) => setQueryValue(e.target.value)} />
        <SearchResultsView queryValue={queryValue} />
      </Box>
    </Container>
  );
}

export default Portfolio;
