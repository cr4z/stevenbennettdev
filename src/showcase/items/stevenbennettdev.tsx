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
      <ViewCodeOnGithubButton />
      <Typography variant="body1">
        I have poured my heart and soul into creating a captivating user
        experience with this website. Among my proudest features are:
        <Box component="ul" sx={{ listStyleType: "circle", ml: "2rem" }}>
          <li>
            The sidebar, which is actually 100% mobile-friendly ensuring that
            mobile users are still empowered with a seamless user experience!
          </li>
          <li>
            The parallax scroll effect on the header, which adds a touch of
            elegance that scales perfectly across all screen sizes.
          </li>
          <li>
            A small yet powerful component-based design system built on top of
            MUI.
          </li>
          <li>
            The search components; which boast a clever separation of between
            SearchControls and SearchResultsView to enhance reusability!
          </li>
        </Box>
      </Typography>
    </Box>
  );
}

export default StevenBennettDev;
