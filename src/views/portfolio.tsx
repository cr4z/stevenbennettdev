import { Box, Container, Typography } from "@mui/material";
import Input from "../design_system/input";
import Button from "../design_system/button";

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

        <Input useIcon="search" />
        <Button onClick={() => {}} label="asdf" />
      </Box>
    </Container>
  );
}

export default Portfolio;
