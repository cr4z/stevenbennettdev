import { Box, Typography } from "@mui/material";
import Input from "../design_system/input";

function Portfolio() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        paddingTop: "4rem",
      }}
    >
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>
      <Typography variant="h4">My Portfolio</Typography>

      <Typography variant="body1">A collection of work projects, tutorials, and more</Typography>
      <Typography variant="body1">{"<Carousel />"}</Typography>

      <Input />
    </Box>
  );
}

export default Portfolio;
