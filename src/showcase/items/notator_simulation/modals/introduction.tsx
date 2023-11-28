import { Box, List, ListItemText, Typography } from "@mui/material";
import {
  NotatorSimulationModal,
  NotatorSimulationModalToggleProps,
} from "./modal";
import { ViewCodeOnGithubButton } from "../../../../components/github_button";
import { ShadowScrollProvider } from "../components/shadow_scroll";

export default function IntroductionModal(
  props: NotatorSimulationModalToggleProps
) {
  return (
    <NotatorSimulationModal
      open={props.open}
      onClose={props.onClose}
      sx={{ padding: "1rem" }}
      minWidth="xl"
    >
      <Typography className="noselect" variant="h4" component="h1" gutterBottom>
        The Notator Simulation Project
      </Typography>

      <Content />
    </NotatorSimulationModal>
  );
}

function Content() {
  return (
    <ShadowScrollProvider maxHeight="30rem" variant="strong">
      <Box
        sx={{
          color: "#000",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h5">Summary</Typography>
        <Typography variant="body1">
          The Notator Simulation project was part of X Logs...
          <Box mt=".5rem" />
          My simulation showcases advanced React features, including dynamic
          state management, customized hooks, and intricate component
          architecture, demonstrating mastery over complex aspects of React
          development. The Notator Simulation bleeds a creative and innovative
          essence through its well-architected blend of modular code,
          user-centric design, and adherence to key software principles such as
          SOLID, culminating in a scalable, maintainable, and visually cohesive
          user interface. The delivery of the notator in X Logs was firm, fast,
          and calculated. Though delivered at rapid speeds, it was not in shoddy
          quality. To this day, it serves ⅓ of Texas school districts, which is
          a fact I wear proudly!
        </Typography>
        <Typography variant="h5">Technical Deep Dive</Typography>
        <Typography variant="body1">
          Detailed Technical Aspects: The project delves into sophisticated
          state management techniques, efficient component structuring, and the
          use of APIs for dynamic data handling. Code Quality & Practices: The
          development followed best coding practices, emphasizing readability,
          maintainability, and the implementation of testing protocols. GitHub
          Link: Explore the Notator Simulation on GitHub for an in-depth view of
          the code, commit history, and documentation.
        </Typography>
        <Typography variant="h5">Challenges Faced</Typography>
        <Typography variant="body1">
          There were two major challenges that I faced when building the
          notator, and I've reflected the code in this simulation.
        </Typography>
        <List>
          <ListItemText>
            Challenge 1) The architecture. During the X Logs rebuild, timeline
            constraints made it so that I only afforded myself 2 strategically
            chosen days to lay out the comprehensive architecture, subsequently
            passing it off for a junior developer to maintain and develop
            further.
          </ListItemText>
          <ListItemText>
            Challenge 2) After the X Logs rebuild release, we had to create a
            complex feature called the Care Provision Tabs. This feature
            involved understanding a complex domain models and their
            relationships, as well as a way to present them on the front end in
            the way we intended to. This feature is showcased as the item size
            tabs.
          </ListItemText>
        </List>

        <ViewCodeOnGithubButton />
        <Typography variant="h5">Lessons Learned</Typography>
        <Typography variant="body1">
          To consolidate all of the lessons I learned from the X Logs rebuild to
          this reimagining of the notator, I’d say…This project was a journey in
          enhancing React skills, particularly in state management and component
          architecture, and soft skills like project management and innovative
          problem-solving.
        </Typography>
        <Typography variant="h5">Personal Growth</Typography>
        <Typography variant="body1">
          The Notator Simulation significantly contributed to my growth as a
          developer, enhancing my technical skills and reinforcing my capability
          to tackle complex, real-world problems. Thanks to reflection I’ve
          learned that even under immense pressure I am capable of making
          effective strategic decisions, such as using a weekend to lay the
          architecture for the notator and subsequently passing it off to a
          junior developer. I’ve also learned how to create diagrams for React
          features, a system of architectural foresight and subsequent
          communication that I will continue to refine over the coming years!
          I’ve seen the value in considering practical applications of
          theoretical concepts from various other languages and paradigms.
          Looking forward, as well as honing my general React skills, I will
          continue to learn about various software engineering principles to
          have a higher level of context when creating solutions.
        </Typography>
      </Box>
    </ShadowScrollProvider>
  );
}
