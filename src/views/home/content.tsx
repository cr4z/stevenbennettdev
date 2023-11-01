import HeadshotPNG from "../../img/headshot_natural.png";
import { OpenToWorkMessage } from "../../components/msg_open_to_work";
import Button from "../../design_system/button";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export function IntroductoryText() {
  return (
    <Typography
      variant="subtitle1"
      sx={{ px: "2rem", pb: "5rem", pt: "2rem", textAlign: "center" }}
    >
      Hey there! I'm Steven Bennett, a seasoned front-end developer with
      experience leading teams and building websites that scale and handle
      high-traffic. I'm well-versed in React, object-oriented programming and
      countless associated design philosophies. I've been in charge of projects
      that have drawn large audiences and have exceeded business objectives. As
      a passionate developer, I take pride in staying updated on new tech
      developments and building solutions that are reliable and visually
      appealing. I'm excited to bring my skill set to a team that values
      innovation and quality. To view my dedication in action, I invite you to
      view my interactive portfolio <Link to="/portfolio">here</Link>!
    </Typography>
  );
}

export function HomeContent() {
  return (
    <Box>
      <Typography variant="h6">What I Bring to the Table</Typography>
      <ul>
        <li>
          <b>Leadership & Collaboration</b>: I have successfully led a team of
          four developers while proactively mentoring peers, facilitating
          cross-departmental communication, and aligning team goals with
          strategic company objectives on a daily basis.
        </li>
        <li>
          <b>Technical Excellence</b>: As the lead developer of a large project,
          I've earned a reputation for deep technical knowledge across the full
          stack and particularly in front-end requirements.
        </li>
        <li>
          <b>Innovative Problem-Solving</b>: Guided by a firm understanding of
          foundational principles and diligent research into the ever-evolving
          tech industry and its technologies, I've identified and solved key
          issues that have left a lasting impact. My contributions range from
          elevating coding practices within my team, to the greater whole such
          as championing a design first approach in our project planning methods
          to improve output of the full stack.
        </li>
        <li>
          <b>Strategic Planning</b>: With an eye on the bigger picture, I enjoy
          crafting comprehensive documentation that outline current scenarios
          and propose alternative solutions if needed to drive future
          development from a macro perspective.
        </li>
        <li>
          <b>Skills Development</b>: I'm not just about personal growth; I've
          initiated in-house React classes and mentored team members, turning
          them into key assets for our projects.
        </li>
        <li>
          <b>Resilience & Adaptability</b>: In a constantly evolving field I
          pride myself on my ability to adapt and maintain focus, even when
          faced with unexpected challenges or changes in direction.
        </li>
      </ul>
      <Typography variant="h6">Technical Proficiencies</Typography>
      <ul>
        <li>React with TypeScript</li>
        <li>Next.js</li>
        <li>Redux-Toolkit</li>
        <li>MaterialUI</li>
        <li>Figma & Graphic Design</li>
        <li>Git</li>
        <li>GitHub & Azure DevOps</li>
        <li>C# & LINQ</li>
        <li>OpenAI GPT-4</li>
      </ul>
      <Typography variant="h6">Goals</Typography>
      <p>
        My immediate career goal is to contribute my skills and leadership to a
        forward-thinking company that values innovation and team collaboration.
        In the long term, I'm aiming for roles that allow me to drive the
        success of the next generation of technology.
      </p>
      <Typography variant="h6">Looking Forward</Typography>
      <p>
        I'm excited about the endless possibilities that the future of web
        development holds and am always looking for new opportunities to grow
        and make a difference. Feel free to connect if you think we could build
        something awesome together!
      </p>
    </Box>
  );
}

export function HomeDesktopHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "15rem",
        alignItems: "center",
      }}
    >
      <HeadshotWithMessage width="10rem" />
      <TitleAndResume />
    </Box>
  );
}

export function HeadshotWithMessage(props: { width: string }) {
  const { width } = props;

  return (
    <Box sx={{ position: "relative", width: { width }, mx: "3.3rem" }}>
      <Headshot width={width} />
      <Box sx={{ position: "absolute", bottom: "-15%", right: "-58%" }}>
        <OpenToWorkMessage />
      </Box>
    </Box>
  );
}

function Headshot(props: { width: string }) {
  const { palette } = useTheme();
  const { width } = props;

  return (
    <Box sx={{ position: "relative", width }}>
      <Box
        component="img"
        src={HeadshotPNG}
        sx={{
          width,
          borderRadius: "2rem",
          border: "4px solid " + palette.grey[400],
          position: "relative",
        }}
      />
    </Box>
  );
}

export function HomeMobileHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "15rem",
        alignItems: "center",
        flexDirection: "column",
        gap: "3rem",
        mb: "4rem",
      }}
    >
      <HeadshotWithMessage width="10rem" />
      <TitleAndResume />
    </Box>
  );
}

function TitleAndResume() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        pt: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{ width: "25rem", textAlign: "center", fontFamily: "Lato" }}
      >
        Building Tomorrow's Web, One Line at a Time
      </Typography>

      <Button
        useIcon={<BsFileEarmarkPerson />}
        onClick={() =>
          window.open(
            "https://docs.google.com/document/d/1NrQ0TLz_1hpkAS-9DffDTQvYMeb7JyZU6OonJSnjOY0/edit?usp=sharing",
            "_blank"
          )
        }
      >
        View Resume
      </Button>
    </Box>
  );
}
