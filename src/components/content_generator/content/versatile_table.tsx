import { Stack, Typography } from "@mui/material";
import { ContentGeneratorContent } from "../types/types";

export const advancedTableComponentContent: ContentGeneratorContent = {
  introOverview: (
    <Stack direction="column" gap=".5rem">
      <Typography variant="body1">
        This is a table component that I had made over the course of one week. It uses advanced React
        patterning and affords the developer the ability to render static or dynamic data with a plethora of
        different overloadable functionalities such as pagination, sorting, and selectable rows.
      </Typography>
      <Typography variant="body1">
        In this demonstration, I've attached listeners to the table callbacks for re-fetching data and
        client-side sorting to the snackbar component provided by the npm library <code>notistack</code>{" "}
        (one of my personal favorites) in order to clarify its behaviour, whether it determines to
        re-fetching data or leverage client-side sorting for efficiency!
      </Typography>
    </Stack>
  ),
  techUsed: [
    {
      name: "MUI",
      content: (
        <ul>
          <li>
            Used as a versatile foundation for the creation of featured unique & complex input elements
          </li>
        </ul>
      ),
    },
    {
      name: "React",
      content: (
        <ul>
          <li>
            Custom table component is structured in a modular, reusable way flexible for a multitude of
            situations
          </li>
        </ul>
      ),
    },
    {
      name: "TypeScript",
      content: (
        <ul>
          <li>
            Boasts knowledge of SOLID principles, observable in the interface segregation of the table
            component's defined props
          </li>
          <li>
            Advanced algorithmic skills are evident in code, such as in the usage of a quicksort in-place
            algorithm in its sorting logic. View the code for that{" "}
            <a href="/portfolio/9aed35c7101b">here!</a>
          </li>
        </ul>
      ),
    },
  ],
  featuresAndFunctionality: (
    <>
      <Typography variant="body1">
        This component provides a base table that can accept either static or dynamic data. It is also
        capable of optionally accepting any combination of the overloads seen below!
      </Typography>
      <ul>
        <li>Pagination</li>
        <li>Rapid Alphabetical Sorting (using a custom algorithm!)</li>
        <li>Selectable Rows</li>
      </ul>
    </>
  ),
  skillsShown: [
    {
      skill: "Self-Documenting Code",
      desc: (
        <Typography>
          Complex modules are well documented, as visibly evident{" "}
          <a href="/portfolio/9aed35c7101b">in this function I commonly use</a>!
        </Typography>
      ),
    },
    {
      skill: "Knowledge of Advanced Algorithms",
      desc: (
        <Typography>
          The table's sorting functionality boasts an integrated quicksort in-place algorithm. View the code
          for that <a href="/portfolio/debdcb6a850d">here</a>!
        </Typography>
      ),
    },
    {
      skill: "Component Composition",
      desc: "The component composition of my table component boasts a maintanable and readable architecture.",
    },
  ],
};
