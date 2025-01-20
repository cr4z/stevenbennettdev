import { Box, Typography, Button, Container } from "@mui/material";

function Body() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shaping Tomorrow's Web, One Line at a Time.
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        I specialize in building scalable, maintainable web applications designed to meet your business
        objectives with precision, efficiency, and reliability.
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        With years of experience in front-end architecture and modern web technologies, I pride myself on
        delivering results that align with your goals. My approach evolves alongside the industry, ensuring
        every solution leverages the latest tools and best practices. I've worked on tight deadlines, led
        advanced project rebuilds, and collaborated across teams to ensure seamless execution.
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        Whether building reusable component libraries, integrating authentication systems, or optimizing
        legacy applications for modern performance, I bring a combination of technical expertise and a
        commitment to streamlined processes. From the first consultation to the final deployment, I am
        dedicated to clear communication, collaborative problem-solving, and high-quality results.
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        When you work with me, you're not just getting a developer—you're partnering with someone who
        ensures your project is completed on time, to spec, and with
        <Typography component="span" color="primary" fontWeight="bold">
          lasting impact.
        </Typography>
      </Typography>

      <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
        “The secret of getting ahead is getting started today.”
      </Typography>

      <Typography variant="caption" color="textSecondary" fontStyle="italic">
        - Mark Twain
      </Typography>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/resume"
          sx={{ textTransform: "none" }}
        >
          View Resume
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="/contact"
          sx={{ textTransform: "none" }}
        >
          Contact Me
        </Button>
      </Box>
    </Container>
  );
}

export default Body;
