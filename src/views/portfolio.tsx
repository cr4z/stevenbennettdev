import { Box, Container, Typography } from "@mui/material";
import Input from "../design_system/input";

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
        <Typography variant="body1">{"<Carousel />"}</Typography>

        <Input useIcon="search" />
      </Box>
    </Container>
  );
}

export default Portfolio;
