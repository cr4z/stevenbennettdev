import { Alert, Box, Stack, Typography } from "@mui/material";
import { ContentGeneratorContent } from "../types/types";

export const complexFormDemoContent: ContentGeneratorContent = {
  introOverview: (
    <Stack direction="column" gap=".5rem">
      <Typography>
        Welcome to one of my most sophisticated projects - the Complex Form. I have developed this to mirror
        the complexities of a real-world scenario I have encountered as a front-end team lead and architect
        at MSB, in a completely different hypothetical usage. This project is intended to showcase how I
        approached a series of unique challenges I encountered while developing the real-world counterpart
        to this screen.
      </Typography>
      <Typography>
        To further explain the situation: MSB's primary users are special education teachers, and they
        require a documentation tool to facilitate efficient and accurate student documentation, necessary
        to obtain financial reimbursements for their associated school district. My task was to develop a
        system based on wireframes within a tight five-month deadline, alongside several other projects that
        demanded significantly more resources than we had available.
      </Typography>
      <Typography sx={{ pl: "1rem", borderLeft: "2px solid #FFF2", color: "#FFF8" }}>
        Interestingly, this same scenario presented an opportunity for me to creatively optimize our team's
        resource management, a valuable learning experience that we will explore some other time!
      </Typography>
      <Typography>
        Hence, this project is an emulation of that complex form. In the real-world counterpart to this
        project, I made critical strategic decisions pivotal to our product's release. One such decision was
        to rapidly develop the advanced architecture within two days, and then entrust its further
        development to a React novice under my guidance. This not only accelerated our development process
        but also fostered skill growth within the team. The success of this approach was evident in our
        product's on-time launch and its subsequent performance, which I consider a significant professional
        achievement.
      </Typography>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center", m: "1.5rem 0 1rem 0" }}>
        <Alert variant="outlined" sx={{ maxWidth: "100%", minWidth: "10rem" }} severity="info">
          Important Information: Please note that the code displayed here is a simulation of the work I
          completed for MSB, in a completely different context of hypothetical usage. It has been entirely
          redeveloped for demonstration purposes, ensuring no actual code from MSB's production application
          is used. This measure is strictly adhered to in order to maintain software confidentiality and
          respect intellectual property rights.
        </Alert>
      </Box>
    </Stack>
  ),
  techUsed: [
    {
      name: "Figjam",
      content: (
        <Typography>
          By using a custom-adapted version of UML to create a React system flowchart, I was able to
          preemptively detect irregularities resulting in a refined product architecture before beginning
          development. <a>View here!</a>
        </Typography>
      ),
    },
    { name: "MUI", content: <Typography>Expanding later...</Typography> },
    { name: "TypeScript", content: <Typography>Expanding later...</Typography> },
    {
      name: "React",
      content: (
        <Box component="ul" py={0}>
          <li>Clever functional component composition</li>
          <li>Modular, custom hook-driven architecture</li>
          <li>
            Showcases a plethora of built-in React hooks such as <code>useMemo</code> and{" "}
            <code>useContext</code>
          </li>
          <li>Boasts numerous examples of cleverly constructed custom hooks</li>
        </Box>
      ),
    },
  ],
  skillsShown: [
    {
      skill: "System Design and Architectural Skills",
      desc: (
        <Typography>
          By using a custom-adapted version of UML to create a React system flowchart, I was able to
          preemptively detect irregularities resulting in a refined product architecture before beginning
          development. View here!
        </Typography>
      ),
    },
    {
      skill: "Ubiquitous Integration",
      desc: (
        <Stack direction="column" gap=".5rem">
          <Typography>
            In the real world, we may encounter data models that are streamlined for tasks like querying,
            but prove unfavorable for use in a front-end application. In this project, I have recreated a
            specific scenario I previously faced with inflexible back-end models. This showcases my ease in
            navigating these challenges.
          </Typography>
        </Stack>
      ),
    },
  ],
};
