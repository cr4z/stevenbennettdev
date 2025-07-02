import { Typography, Stack, Link as MuiLink } from "@mui/material";
import SBDButton from "../../../design_system/button";
import { useAppDispatch } from "../../../redux/hooks";
import { setContactDialog } from "../../../redux/slices/contact_dialog_slice";
import { Link } from "react-router-dom";

function Body() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Who I Am
      </Typography>

      <Typography variant="body1" paragraph>
        I am a lifelong programmer and software engineer from Austin, Texas. In the early days of my career,
        though very young, I led system rebuilds, optimized core functionalities to wire-speed, and
        coordinated with teams across the stack to deliver customized, accurate results to tens of thousands
        of users.
      </Typography>

      <Typography variant="body1" paragraph>
        My experience spans component library development, authentication system integration, legacy
        application modernization, and continues to expand with each project.
      </Typography>

      <Typography variant="h6" gutterBottom>
        My Design Philosophy
      </Typography>

      <Typography variant="body1" paragraph>
        Both my engineering approach and design style aim to combine minimalism & modularity with an
        emphasis on performance, scale, maintainability, and optimal user experience.
      </Typography>

      <Typography variant="body1" paragraph>
        I believe all of these things, though they can trade each other off in real development, can be
        intelligently balanced across teams by establishing and abiding by a minimal set of design
        principles. For example, on one of my React teams at a fast-moving lean company, we consistently
        found ourselves having to work solo on features, and building components that wouldn't integrate
        with each other easily. To solve this, I pitched codifying the practice of{" "}
        <MuiLink
          href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          presentational and container components
        </MuiLink>
        . After adopting this practice, it turbo-charged our coordination and productivity even in a
        high-velocity environment that left minimal time for sync.
      </Typography>

      <Typography variant="h6" gutterBottom>
        My Work Philosophy
      </Typography>

      <Typography variant="body1" paragraph>
        I believe there is a lot to learn from kaizen, one of the underpinning aspects of modern agile
        practices rooted in Japanese philosophy. As a team member, I work to embody its core tenets of{" "}
        <Typography component="span" color="primary.light">
          continuous improvement and collaborative problem-solving
        </Typography>
        , while also practicing epistemic humility in my approach to learning and teamwork.
      </Typography>

      <Typography variant="body1" paragraph>
        With a flexible skillset and drive for challenge, I'm equipped for any complex problem in modern
        tech.
      </Typography>

      <Stack sx={{ textAlign: "center", gap: "2rem" }}>
        <Stack direction="column">
          <Typography variant="h6" sx={{ fontWeight: 200 }}>
            “The best way to predict the future is to invent it.”
          </Typography>
          <Typography color="textSecondary">- Alan Kay</Typography>
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
