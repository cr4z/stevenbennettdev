import { Box, Typography } from "@mui/material";
import { ContentGeneratorContent } from "../types/types";

export const advancedTableComponentContent: ContentGeneratorContent = {
  introOverview: (
    <Typography variant="body1">
      This is a table component that I had made over the course of one week. It uses advanced React
      patterning and affords the developer the ability to render static or dynamic data with a plethora of
      different overloadable functionalities such as pagination, sorting, and selectable rows.
      <Box sx={{ height: "1rem" }} />
      In this demonstration, I've attached listeners to the table callbacks for re-fetching data and
      client-side sorting to the snackbar component provided by the npm library <code>notistack</code> (one
      of my personal favorites) in order to visualize its optimized behaviour in real-time!
    </Typography>
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
      skill: "TypeScript Prowess & Future-Proof Development",
      desc: "Built a rapid sort function. As per my usual style, XML comments are plentiful.",
    },
    {
      skill: "Component Composition",
      desc: "The component composition boasts a maintanable and readable architecture.",
    },
  ],
};
