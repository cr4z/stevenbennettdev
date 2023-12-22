import { Alert, Box, Stack, Typography } from "@mui/material";
import { ContentGeneratorContent } from "../types/types";
import ReactDiagramPath from "../../../img/react_diagram.png";
import ImageViewer from "react-simple-image-viewer";
import { useState } from "react";

export const complexFormDemoContent: ContentGeneratorContent = {
  introOverview: (
    <Stack direction="column" gap=".5rem">
      <Typography>
        Welcome to one of my most sophisticated projects - the Complex Form. I have developed this to mirror
        the complexities of a real-world scenario I have encountered as a front-end team lead and architect
        at MSB, in a completely different hypothetical usage. My task was to develop a complex documentation
        system based on wireframes within a tight five-month deadline, alongside several other projects that
        demanded significantly more resources than we had available. This project is intended to showcase
        how I approached a series of unique challenges I encountered while developing the real-world
        counterpart to this screen, including my unique approach to UI.
      </Typography>
      <Typography>
        In the real-world counterpart to this project, I made critical strategic decisions that proved
        pivotal to our product's release. One such decision was to rapidly develop the advanced architecture
        within two days, and then entrust its further development to a React novice under my guidance. This
        not only accelerated our development process but also fostered skill growth within the team. The
        success of this approach was evident in our product's on-time launch and its subsequent performance,
        which I consider a significant professional achievement.
      </Typography>
      <Typography sx={{ pl: "1rem", borderLeft: "2px solid #FFF2", color: "#FFF8" }}>
        Interestingly, this scenario also presented an opportunity for me to creatively optimize our team's
        resource management, a valuable learning experience that we may explore some other time!
      </Typography>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center", m: "1.5rem 0 1rem 0" }}>
        <Alert variant="outlined" sx={{ maxWidth: "100%", minWidth: "10rem" }} severity="info">
          Important Information: Please note that the code and UI showcased here is a
          <strong> SIMULATION </strong> of the work that I completed in my work for MSB, and built in a
          completely different context of hypothetical usage. It has been entirely redeveloped for
          demonstration purposes of similar challenges and solutions, ensuring
          <strong> no actual code </strong>from MSB's production application is used. This measure is
          strictly adhered to in order to maintain software confidentiality and respect intellectual
          property rights.
        </Alert>
      </Box>
    </Stack>
  ),
  techUsed: [
    {
      name: "Figjam",
      content: (
        <Typography>
          I used an adapted version of UML to create a React system flowchart, successfully allowing to
          preemptively detect irregularities resulting in a refined product architecture before beginning
          development.
        </Typography>
      ),
    },
    {
      name: "MUI",
      content: (
        <Typography>
          Used as a versatile foundation for the creation of featured unique & complex input elements
        </Typography>
      ),
    },
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
        <Stack>
          <Typography>
            By using a custom-adapted version of UML to create a React system flowchart, I was able to
            preemptively detect irregularities resulting in a refined product architecture before beginning
            development.
          </Typography>

          <ImageWithViewer />
        </Stack>
      ),
    },
    {
      skill: "Ubiquitous Integration",
      desc: (
        <Stack direction="column" gap=".5rem">
          <Typography>
            In the real world, we may encounter having to use rigid back end data models that are
            streamlined for tasks like querying, but prove unfavorable for use in a front-end application.
            In this project, I have recreated a specific scenario I previously faced with inflexible
            back-end models provided to the front end through a Swagger API. The code behind showcases my
            ease in navigating these challenges.
          </Typography>
        </Stack>
      ),
    },
  ],
};

function ImageWithViewer() {
  const [imgOpen, setImgOpen] = useState<boolean>(false);

  return (
    <>
      <Box sx={{ cursor: "pointer" }} component="img" src={ReactDiagramPath} />;
      {imgOpen && (
        <ImageViewer
          src={[ReactDiagramPath]}
          currentIndex={0}
          closeOnClickOutside={true}
          onClose={() => setImgOpen(false)}
        />
      )}
    </>
  );
}
