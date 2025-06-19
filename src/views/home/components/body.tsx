import { Typography, Stack } from "@mui/material";
import SBDButton from "../../../design_system/button";
import { useAppDispatch } from "../../../redux/hooks";
import { setContactDialog } from "../../../redux/slices/contact_dialog_slice";
import { Link } from "react-router-dom";

function Body() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Delivering scalable React solutions for enterprise applications
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        Hi, I'm Steven! I specialize in building scalable, maintainable web applications designed to meet
        your business objectives quickly and accurately.
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        With years of experience in front-end architecture and modern web technologies, I pride myself on
        quickly delivering results that align with business goals. My approach evolves alongside the
        industry, ensuring every solution leverages the latest tools and best practices. I've worked on
        tight deadlines, led advanced project rebuilds, and collaborated across teams to ensure seamless
        execution.
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        Whether building reusable component libraries, integrating authentication systems, or optimizing
        legacy applications for modern performance, I bring a combination of technical expertise and a
        commitment to streamlined processes. From the first project scope to the final deployment, I am
        dedicated to{" "}
        <Typography component="span" color="primary">
          clear communication, collaborative problem-solving, and high-quality results.{" "}
        </Typography>
      </Typography>

      <Typography variant="body1" color="textSecondary" paragraph>
        When you work with me, you're not just getting a developer. You're partnering with someone who
        ensures your project is completed quick, to spec, and with lasting impact.
      </Typography>

      <Stack sx={{ textAlign: "center", gap: "2rem" }}>
        <Stack direction="column">
          <Typography variant="h6" sx={{ fontWeight: 200 }}>
            “The secret of getting ahead is getting started today.”
          </Typography>
          <Typography color="textSecondary" sx={{ opacity: 0.5 }}>
            - Mark Twain
          </Typography>
        </Stack>

        <Stack
          sx={{
            gap: "1rem",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <SBDButton
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1uOf4wm5byxwQks4O0VFvJAVAvAUIMqgh/view?usp=sharing"
              );
            }}
            variant="contained"
            larger
            sx={{ px: "2rem" }}
          >
            View Resume
          </SBDButton>
          <Link to="/portfolio">
            <SBDButton variant="contained" larger sx={{ px: "2rem" }}>
              View Portfolio
            </SBDButton>
          </Link>
          <SBDButton
            onClick={() => dispatch(setContactDialog(true))}
            variant="cta"
            larger
            sx={{ px: "2rem" }}
          >
            Contact Me
          </SBDButton>
        </Stack>
      </Stack>
    </>
  );
}

export default Body;
