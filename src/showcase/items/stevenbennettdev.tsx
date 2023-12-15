import { Box, Typography } from "@mui/material";
import { ViewCodeOnGithubButton } from "../../components/github_button";

function StevenBennettDev() {
  return (
    <Box
      sx={{
        padding: "3rem",
        minWidth: "24rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Typography className="noselect" variant="h4">
        Welcome to the VIP section!
      </Typography>
      <Typography variant="body1">
        Want to see the code that powers this website? Click the link below!
      </Typography>
      <ViewCodeOnGithubButton href="https://github.com/cr4z/stevenbennettdev" />
    </Box>
  );
}

export default StevenBennettDev;
