import { Box, Stack, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiMui } from "react-icons/si";
import { IconRenderer } from "../../design_system/icons";

export type Content = {
  introOverview: JSX.Element | string;
  techUsed?: TechProduct[];
  featuresAndFunctionality?: JSX.Element | string;
  problemsAndSolutions?: JSX.Element | string;
  resultsAndImpact?: JSX.Element | string;
};
type TechProduct = {
  name: "React" | "TypeScript" | "MUI";
  content: JSX.Element | string;
};

export function ContentGenerator(props: { content: Content }) {
  const { content } = props;

  return (
    <Box>
      <Typography variant="body1">{content.introOverview}</Typography>
      <Stack gap="1rem" my="2rem">
        {content.techUsed?.map((product) => (
          <UsedTechProduct product={product} />
        ))}
      </Stack>
    </Box>
  );
}

function UsedTechProduct(props: { product: TechProduct }) {
  const { product } = props;

  function getIcon() {
    switch (product.name) {
      case "React":
        return <IconRenderer widthHeight={iconSizeRem * 1.2 + "rem"} i={<FaReact />} />;
      case "TypeScript":
        return <IconRenderer widthHeight={iconSizeRem + "rem"} i={<SiTypescript />} />;
      case "MUI":
        return <IconRenderer widthHeight={iconSizeRem + "rem"} i={<SiMui />} />;
      default:
        throw new Error("Fallthrough in switch statement! Has a new tech product been introduced?");
    }
  }

  const iconCircleSizeRem = 2.5;
  const iconSizeRem = iconCircleSizeRem / 1.9;
  const GRAY_COLOR = "#FFF2";

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Box
          sx={{
            width: iconCircleSizeRem + "rem",
            height: iconCircleSizeRem + "rem",
            bgcolor: GRAY_COLOR,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {getIcon()}
        </Box>
        <Typography variant="h5">{product.name}</Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Box
          sx={{
            minWidth: iconCircleSizeRem + "rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              minWidth: "50%",
              height: "50%",
              minHeight: "50%",
              maxHeight: "50%",
              borderBottom: "2px solid " + GRAY_COLOR,
              borderLeft: "2px solid " + GRAY_COLOR,
              borderTop: "none",
              borderRight: "none",
              mr: "1px",
            }}
          />
        </Box>
        <Typography>{product.content}</Typography>
      </Box>
    </Box>
  );
}

export const versatileTableComponentDescriptionContent: Content = {
  introOverview:
    "This is a table component that I had made over the course of one week. It uses advanced React patterning and affords the developer the ability to render static or dynamic data with a plethora of different overloadable functionalities such as pagination, sorting, and selectable rows.",
  techUsed: [
    {
      name: "React",
      content:
        "Custom table component is structured in a modular, reusable way flexible for a multitude of situations",
    },
    {
      name: "TypeScript",
      content: (
        <ul>
          <li>
            Boasts knowledge of SOLID principles, observable in the interface segregation of the table
            component
          </li>
          <li>Boasts advanced algorithmic skills through clever custom sorting logic</li>
        </ul>
      ),
    },
    {
      name: "MUI",
      content:
        "Used as a versatile foundation for the creation of featured unique & complex input elements",
    },
  ],
  featuresAndFunctionality: (
    <ul>
      <li>pagination</li>
      <li>sorting</li>
      <li>selectable</li>
    </ul>
  ),
};
