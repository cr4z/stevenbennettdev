import { ContentGeneratorContent } from "../types/types";

export const versatileTableComponentDescriptionContent: ContentGeneratorContent = {
  introOverview:
    "This is a table component that I had made over the course of one week. It uses advanced React patterning and affords the developer the ability to render static or dynamic data with a plethora of different overloadable functionalities such as pagination, sorting, and selectable rows.",
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
            component
          </li>
          <li>Boasts advanced algorithmic skills through clever custom sorting logic</li>
        </ul>
      ),
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
