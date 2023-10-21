import { Box, Typography } from "@mui/material";
import { ContactButtonEmail, ContactButtonGitHub, ContactButtonLinkedIn, ContactButtonPhone } from "../components/contact_options";

function ContactMenu() {
  return (
    <Box
      sx={{
        width: "20rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
    >
      <Typography className="noselect" variant="h5">
        Contact
      </Typography>
      <Typography mt={1} mb={2} variant="body1">
        Let's make things happen!
      </Typography>
      <ContactButtonPhone />
      <ContactButtonEmail />
      <ContactButtonLinkedIn />
      <ContactButtonGitHub />
    </Box>
  );
}

export default ContactMenu;
