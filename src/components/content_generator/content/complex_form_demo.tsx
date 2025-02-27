import { Box, Stack, Typography } from "@mui/material";
import { ContentGeneratorContent } from "../types/types";
import { useState } from "react";
import { ImageViewerDialog } from "../../../sbd_development_kit/components/image_viewer_dialog";
import ReactDiagramPNG from "../../../img/react_diagram.png";

export const complexFormDemoContent: ContentGeneratorContent = {
  introOverview: (
    <Stack direction="column" gap=".5rem">
      <Typography>
        This interactive form reflects the complexities of real-world, data-intensive CRUD applications.
        It's inspired by a prior project where I've developed something similar.
      </Typography>
    </Stack>
  ),
  techUsed: [
    {
      name: "MUI",
      content: <Typography>Used as foundation for custom, small design system</Typography>,
    },
    {
      name: "TypeScript",
      content: (
        <Typography>
          Practical application of SOLID principles in a React-TS environment such as interface segregation,
          observed in <code>locked_control_props.ts</code>
        </Typography>
      ),
    },
    {
      name: "React",
      content: (
        <Box component="ul" py={0}>
          <li>Component composition using presentational components pattern</li>
          <li>Modular, custom hook-driven architecture</li>
          <li>Uses React context API</li>
        </Box>
      ),
    },
  ],
  skillsShown: [
    {
      skill: "System Design",
      desc: (
        <Stack>
          <Typography>
            Before development, I created a UML-inspired flowchart tailored for React to map out the data
            flow. This process allowed me to refine the system, catching irregularities early that would
            have otherwise caused issues down the line.
          </Typography>

          <ImageWithViewer />
        </Stack>
      ),
    },
  ],
};

function ImageWithViewer() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ImageViewerDialog
        src={ReactDiagramPNG}
        title="React Flow Diagram"
        open={open}
        onClose={() => setOpen(false)}
      />
      <Box sx={{ cursor: "pointer" }} onClick={() => setOpen(true)} component="img" src={ReactDiagramPNG} />
    </>
  );
}
