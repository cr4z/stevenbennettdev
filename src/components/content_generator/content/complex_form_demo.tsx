import { Stack, Typography } from "@mui/material";
import { ContentGeneratorContent } from "../types/types";

export const complexFormDemoContent: ContentGeneratorContent = {
  introOverview: "This was originally a UI proposal for my previous boss!",
  techUsed: [
    { name: "MUI", content: <Typography>Expanding later...</Typography> },
    { name: "TypeScript", content: <Typography>Expanding later...</Typography> },
    { name: "React", content: <Typography>Expanding later...</Typography> },
  ],
  skillsShown: [
    {
      skill: "Handling rigid back end models",
      desc: (
        <Stack direction="column" gap=".5rem">
          <Typography>
            In the real world, we may encounter data models that are streamlined for tasks like querying,
            but prove unfavorable for use in a front-end application. In this project, I have recreated a
            specific scenario I previously faced with inflexible back-end models. This showcases my ease in
            navigating these challenges.
          </Typography>
          <Typography>I did this by making a Figjam!</Typography>
        </Stack>
      ),
    },
  ],
};
