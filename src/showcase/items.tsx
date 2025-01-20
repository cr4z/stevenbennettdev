import { ICONS } from "../design_system/icons";
import FloresHomeRepair from "./items/floreshomerepair";
import StevenBennettDev from "./items/stevenbennettdev";
import dayjs, { Dayjs } from "dayjs";
import Showcase_SequentialFadeIn from "./items/sequential_fade_in";
import TodoShredder from "./items/todoshredder";
import ComplexFormDemonstrationContextWrapper from "./items/notator_simulation/complex_form_demo";
import { complexFormDemoContent } from "../components/content_generator/content/complex_form_demo";
import { ContentGeneratorContent } from "../components/content_generator/types/types";
import QuickSortInPlaceExample from "./items/quick_sort_in_place";
import { RapidAlphabeticSortExample } from "./items/rapid_alphabetic_sort";
import { Typography } from "@mui/material";
import BigTableExampleWrapper from "./items/table/example/example";
import { advancedTableComponentContent } from "../components/content_generator/content/versatile_table";

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
  | "TypeScript"
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
  | "Simulated API"

  // Security and Authentication
  | "Single Sign-On Authentication"

  // Performance and Optimization
  | "SEO Optimization"

  // Programming Practices and Principles
  | "SOLID Principles"
  | "Advanced Custom Algorithm"

  // Documentation and Compliance
  | "JSDoc Self-Documentation"
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
      "SEO Optimization",
      "Responsive Design",
      "Server-Side Rendering",
    ],
    id: ShowcaseIDs.FloresHomeRepair,
    github: "https://github.com/cr4z/flores-home-repair",
    component: <FloresHomeRepair />,
    useIntroductoryModal: true,
    contentGeneratorContent: {
      introOverview: (
        <Typography>
          This project marked the beginning of my professional freelance journey, crafted using Next.js.
          This project stands out as one of my most significant successes in SEO optimization. Searching
          'flores home repair' on Google shows floreshomerepair.com right at the top for users in Texas.
          It's also effective when using variations like 'flores house renovation'.
        </Typography>
      ),
    },
    dateCreated: dayjs(new Date(2022, 3, 24)),
  },
  {
    title: "Advanced Table Custom Component",
    icon: <ICONS.React />,
    tags: [
      "React",
      "TypeScript",
      "SOLID Principles",
      "Custom Hooks",
      "Engaging User Experience",
      "notistack",
      "Advanced Custom Algorithm",
    ],
    id: ShowcaseIDs.TypeSafeTableComponent,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/table",
    component: <BigTableExampleWrapper />,
    contentGeneratorContent: advancedTableComponentContent,
    dateCreated: dayjs(new Date(2023, 11, 28)),
    useIntroductoryModal: true,
  },
  {
    title: "Algorithm: Quick Sort in Place",
    icon: <ICONS.Typescript />,
    tags: ["TypeScript", "Advanced Custom Algorithm"],
    component: <QuickSortInPlaceExample />,
    id: ShowcaseIDs.QuickSortInPlace,
    github:
      "https://github.com/cr4z/stevenbennettdev/tree/main/src/sbd_development_kit/utils/quick_sort_in_place",
  },
  {
    title: "Algorithm: Rapid Alphabetic Sort",
    icon: <ICONS.Typescript />,
    tags: ["TypeScript", "Advanced Custom Algorithm", "XML Self-Documentation"],
    component: <RapidAlphabeticSortExample />,
    id: ShowcaseIDs.RapidAlphabeticSort,
    github:
      "https://github.com/cr4z/stevenbennettdev/tree/main/src/sbd_development_kit/utils/sort_items_alphabetically",
  },
  {
    title: "Basic Sequential Fade",
    icon: <ICONS.React />,
    tags: ["React", "TypeScript", "Engaging User Experience"],
    id: ShowcaseIDs.SequentialFadeIn,
    github: "https://github.com/cr4z/stevenbennettdev/blob/main/src/showcase/items/sequential_fade_in.tsx",
    component: <Showcase_SequentialFadeIn />,
  },
  {
    title: "stevenbennett.dev",
    icon: <ICONS.React />,
    tags: [
      "React",
      "TypeScript",
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
      "TypeScript",
      "Firebase",
      "Live Website",
      "Single Sign-On Authentication",
      "WCAG AAA Compliance",
      "Responsive Design",
    ],
    component: <TodoShredder />,
    id: ShowcaseIDs.TodoShredder,
    github: "https://github.com/cr4z/todoshredder",
  },
  {
    title: "Advanced Form in React Demonstration",
    icon: <ICONS.React />,
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "Material UI",
      "Engaging User Experience",
      "Simulated API",
      "Figjam Diagram",
    ],
    component: <ComplexFormDemonstrationContextWrapper />,
    id: ShowcaseIDs.NotatorSimulation,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/notator_simulation",
    contentGeneratorContent: complexFormDemoContent,
    useIntroductoryModal: true,
  },
];
