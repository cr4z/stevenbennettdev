import { ICONS } from "../design_system/icons";
import FiltersDemo from "./items/filters_demo/main";
import FloresHomeRepair from "./items/floreshomerepair";
import StevenBennettDev from "./items/stevenbennettdev";
import dayjs, { Dayjs } from "dayjs";
import Showcase_SequentialFadeIn from "./items/sequential_fade_in";
import TodoShredder from "./items/todoshredder";
import DougZonePodcast from "./items/dougzonepodcast";
import NotatorSimulationContextWrapper from "./items/notator_simulation/notator_simulation";
import BigTableExample from "./items/table/example/example";
import { versatileTableComponentContent as advancedTableComponentContent } from "../components/content_generator/content/versatile_table";
import { notatorSimulationProjectContent } from "../components/content_generator/content/notator_simulation";
import { ContentGeneratorContent } from "../components/content_generator/types/types";
import QuickSortInPlaceExample from "./items/quick_sort_in_place";
import { RapidAlphabeticSortExample } from "./items/rapid_alphabetic_sort";
import { Box, Typography } from "@mui/material";

export enum ShowcaseIDs {
  FloresHomeRepair = "57eb3c17a412",
  StevenBennettDev = "d8f3c7a8a801",
  CustomFormLibrary = "87c5230add29",
  BeautifulSidebar = "b5942b551adb",
  FinancialDashboard = "5c0097274ef8",
  SequentialFadeIn = "41cae63f1d6a",
  ReactUseMemoDemo = "123f3571fd90",
  EditSessionAlgorithm = "3f6ea0aa3783",
  CustomHooksInReact = "471cc697b7d6",
  ChangingHeightBasedOnContent = "e8d8adb52f9f",
  IconographySystem = "46079ba5cb01",
  FilteringAlgorithm = "cff25e657a4a",
  TodoShredder = "e706f518d604",
  DougZonePodcast = "f702b757d5f7",
  NotatorSimulation = "6543263c3154",
  TypeSafeTableComponent = "n192kb3i9372",
  QuickSortInPlace = "9aed35c7101b",
  RapidAlphabeticSort = "debdcb6a850d",
}

type Tag =
  // Frameworks and Libraries
  | "React"
  | "Next.js"
  | "vite"
  | "react-router"
  | "Redux"
  | "Firebase"
  | "notistack"
  | "Material UI"
  | "Figjam Diagram"

  // Website Features and Types
  | "Engaging User Experience"
  | "Live Website"
  | "Blog"
  | "Responsive Design"
  | "Server-Side Rendering"
  | "Custom Hooks"
  | "Live API"
  | "Simulated API"

  // Security and Authentication
  | "SSO Authentication"

  // Performance and Optimization
  | "High-Speed Optimization"
  | "SEO"

  // Programming Practices and Principles
  | "SOLID Principles"
  | "Advanced Custom Algorithm"

  // Documentation and Compliance
  | "XML Self-Documentation"
  | "WCAG AAA Compliance";

export type Showcase = {
  title: string;
  icon: JSX.Element;
  tags: Tag[];
  component: React.ReactNode;
  id: string;
  github: string;
  contentGeneratorContent?: ContentGeneratorContent;
  description?: string | JSX.Element;
  descriptionPlainText?: string;
  dateCreated?: Dayjs;
  useIntroductoryModal?: boolean;
};

export const SHOWCASES: Showcase[] = [
  {
    title: "floreshomerepair.com",
    icon: <ICONS.Nextjs />,
    tags: [
      "Next.js",
      "Engaging User Experience",
      "Live Website",
      "SEO",
      "Responsive Design",
      "Server-Side Rendering",
    ],
    id: ShowcaseIDs.FloresHomeRepair,
    github: "https://github.com/cr4z/flores-home-repair",
    component: <FloresHomeRepair />,
    description:
      "This was my first freelance project I had ever done professionally, built with Next.js. I've sinced gotten a little bit better at image optimization, but to this day it remains one of my finest achievements in SEO optimization! When typing 'flores home repair' into Google, floreshomerepair.com should be at the very top. Even variations such as 'Flores House Renovation' should work.",
    dateCreated: dayjs(new Date(2022, 3, 24)),
  },
  {
    title: "Advanced Table Custom Component",
    icon: <ICONS.React />,
    tags: ["React", "SOLID Principles", "Custom Hooks", "Engaging User Experience", "notistack"],
    id: ShowcaseIDs.TypeSafeTableComponent,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/table",
    component: <BigTableExample />,
    contentGeneratorContent: advancedTableComponentContent,
    dateCreated: dayjs(new Date(2023, 11, 28)),
    useIntroductoryModal: true,
  },
  {
    title: "Algorithm: Quick Sort in Place",
    icon: <ICONS.Typescript />,
    tags: ["Advanced Custom Algorithm"],
    component: <QuickSortInPlaceExample />,
    id: ShowcaseIDs.QuickSortInPlace,
    github:
      "https://github.com/cr4z/stevenbennettdev/tree/main/src/sbd_development_kit/utils/quick_sort_in_place",
  },
  {
    title: "Algorithm: Rapid Alphabetic Sort",
    icon: <ICONS.Typescript />,
    tags: ["Advanced Custom Algorithm", "XML Self-Documentation"],
    component: <RapidAlphabeticSortExample />,
    id: ShowcaseIDs.RapidAlphabeticSort,
    github:
      "https://github.com/cr4z/stevenbennettdev/tree/main/src/sbd_development_kit/utils/sort_items_alphabetically",
  },
  {
    title: "Sequential Fade-In Effect Across Multiple Divs",
    icon: <ICONS.React />,
    tags: ["React", "Engaging User Experience"],
    id: ShowcaseIDs.SequentialFadeIn,
    github: "https://github.com/cr4z/stevenbennettdev/blob/main/src/showcase/items/sequential_fade_in.tsx",
    component: <Showcase_SequentialFadeIn />,
  },

  {
    title: "dougzonepodcast.com",
    icon: <ICONS.React />,
    tags: ["React", "Engaging User Experience", "vite", "react-router", "Live Website"],
    id: ShowcaseIDs.DougZonePodcast,
    github: "https://github.com/cr4z/dzp-vite",
    component: <DougZonePodcast />,
  },

  {
    title: "React Basics: Applying Visual Filters",
    icon: <ICONS.React />,
    tags: ["React"],
    id: ShowcaseIDs.FilteringAlgorithm,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/filters_demo",
    useIntroductoryModal: true,
    contentGeneratorContent: {
      introOverview: (
        <Typography gutterBottom>
          As the first project I developed with the intent to educate, this GitHub repository marks a
          significant milestone in my journey as a developer. It was crafted to provide a hands-on,
          introductory exploration of implementing selectable filter UIs in React. The focus of this project
          is to demonstrate the functional aspects of creating visual UI tools that empower users to apply
          various filters to a dataset.
          <Box height=".5rem" />I want to highlight that the primary objective of this project was to serve
          as an educational tool, emphasizing functionality over aesthetics. As such, the visual design
          aspects were not the primary focus and may not reflect the high standards I hold for user
          experience in my current work. However, this project stands as a testament to my ability to
          simplify complex concepts, making them accessible and understandable, particularly for those new
          to React or UI development.
        </Typography>
      ),
      techUsed: [
        {
          name: "TypeScript",
          content: "Showcases a basic usage of TypeScript for filtering out a set of data",
        },
        {
          name: "React",
          content:
            "Showcases a simple usage of provided hooks such as useState and useEffet to help manage filtering out a set of data",
        },
      ],
    },
    component: <FiltersDemo />,
  },
  {
    title: "stevenbennett.dev",
    icon: <ICONS.React />,
    tags: [
      "React",
      "Engaging User Experience",
      "Responsive Design",
      "Redux",
      "Live Website",
      "Blog",
      "Firebase",
    ],
    component: <StevenBennettDev />,
    id: ShowcaseIDs.StevenBennettDev,
    github: "https://github.com/cr4z/stevenbennettdev",
  },
  {
    title: "todoshredder.com",
    icon: <ICONS.React />,
    tags: [
      "React",
      "Live API",
      "Firebase",
      "React",
      "SSO Authentication",
      "High-Speed Optimization",
      "Live Website",
      "WCAG AAA Compliance",
      "Responsive Design",
    ],
    component: <TodoShredder />,
    id: ShowcaseIDs.TodoShredder,
    github: "https://github.com/cr4z/todoshredder",
  },
  {
    title: "Complex Form in React Demonstration",
    icon: <ICONS.React />,
    tags: ["React", "Redux", "Material UI", "Engaging User Experience", "Simulated API", "Figjam Diagram"],
    component: <NotatorSimulationContextWrapper />,
    id: ShowcaseIDs.NotatorSimulation,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/notator_simulation",
    contentGeneratorContent: notatorSimulationProjectContent,
    useIntroductoryModal: true,
  },
];
