import { ICONS } from "../design_system/icons";
import FloresHomeRepair from "./items/floreshomerepair";
import dayjs, { Dayjs } from "dayjs";
import Showcase_SequentialFadeIn from "./items/sequential_fade_in";
import TodoShredder from "./items/todoshredder";
import { ContentGeneratorContent } from "../components/content_generator/types/types";
import QuickSortInPlaceExample from "./items/quick_sort_in_place";
import { RapidAlphabeticSortExample } from "./items/rapid_alphabetic_sort";
import { Typography } from "@mui/material";
import BigTableExampleWrapper from "./items/table/example/example";
import { advancedTableComponentContent } from "../components/content_generator/content/versatile_table";
import { SkillCarouselDemo } from "./items/skill_carousel_demo";

export enum ShowcaseIDs {
  FloresHomeRepair = "57eb3c17a412",
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
  TypeSafeTableComponent = "n192kb3i9372",
  QuickSortInPlace = "9aed35c7101b",
  RapidAlphabeticSort = "debdcb6a850d",
  SkillCarouselDemo = "a9c3b7a8a801",
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
  | "Framer Motion"

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
  | "Algorithm"

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
          Crafted using Next.js, this project is one of my best showcases for SEO optimization. Searching
          for variations of 'flores home repair' in Texas should place floreshomerepair.com at the top of
          the results.
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
      "Algorithm",
    ],
    id: ShowcaseIDs.TypeSafeTableComponent,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/table",
    component: <BigTableExampleWrapper />,
    contentGeneratorContent: advancedTableComponentContent,
    dateCreated: dayjs(new Date(2023, 11, 28)),
    useIntroductoryModal: true,
  },
  {
    title: "Algorithm: QuickSort (In-Place)",
    icon: <ICONS.Typescript />,
    tags: ["TypeScript", "Algorithm"],
    component: <QuickSortInPlaceExample />,
    id: ShowcaseIDs.QuickSortInPlace,
    github:
      "https://github.com/cr4z/stevenbennettdev/tree/main/src/sbd_development_kit/utils/quick_sort_in_place",
  },
  {
    title: "Algorithm: Rapid Alphabetic Sort",
    icon: <ICONS.Typescript />,
    tags: ["TypeScript", "Algorithm", "JSDoc Self-Documentation"],
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
    title: "Skill Carousel",
    icon: <ICONS.React />,
    tags: ["React", "TypeScript", "Material UI", "Engaging User Experience", "Framer Motion"],
    component: <SkillCarouselDemo />,
    id: ShowcaseIDs.SkillCarouselDemo,
    github:
      "https://github.com/cr4z/stevenbennettdev/tree/main/src/views/home/components/skill_carousel.tsx",
  },
];
