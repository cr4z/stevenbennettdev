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
import { versatileTableComponentDescriptionContent as versatileTableComponentContent } from "../components/content_generator/content/versatile_table";
import { notatorSimulationProjectContent } from "../components/content_generator/content/notator_simulation";
import { ContentGeneratorContent } from "../components/content_generator/types/types";

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
}

export type Showcase = {
  title: string;
  icon: JSX.Element;
  tags: string[];
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
    tags: ["Next.js", "Web Design", "Live Website", "SEO", "Mobile-First", "SSR"],
    id: ShowcaseIDs.FloresHomeRepair,
    github: "https://github.com/cr4z/flores-home-repair",
    component: <FloresHomeRepair />,
    description:
      "This was my first freelance project I had ever done professionally, built with Next.js. I've sinced gotten a little bit better at image optimization, but to this day it remains one of my finest achievements in SEO optimization! When typing 'flores home repair' into Google, floreshomerepair.com should be at the very top. Even variations such as 'Flores House Renovation' should work.",
    dateCreated: dayjs(new Date(2022, 3, 24)),
  },
  {
    title: "Versatile Table Custom Component",
    icon: <ICONS.React />,
    tags: ["React", "SOLID Principles", "Custom Hooks"],
    id: ShowcaseIDs.TypeSafeTableComponent,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/table",
    component: <BigTableExample />,
    contentGeneratorContent: versatileTableComponentContent,
    dateCreated: dayjs(new Date(2023, 11, 28)),
    useIntroductoryModal: true,
  },

  {
    title: "Sequential Fade-In Effect Across Multiple Divs",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "useMemo"],
    id: ShowcaseIDs.SequentialFadeIn,
    github: "https://github.com/cr4z/stevenbennettdev/blob/main/src/showcase/items/sequential_fade_in.tsx",
    component: <Showcase_SequentialFadeIn />,
  },

  {
    title: "dougzonepodcast.com",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "vite", "react-router", "Live Website"],
    id: ShowcaseIDs.DougZonePodcast,
    github: "https://github.com/cr4z/dzp-vite",
    component: <DougZonePodcast />,
  },

  {
    title: "Common Algorithm: Multiple Filters",
    description:
      "This is actually the first GitHub project I ever created to help teach someone a concept, so it's near and dear to me!",
    icon: <ICONS.React />,
    tags: ["React", "Custom Algorithm"],
    id: ShowcaseIDs.FilteringAlgorithm,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/filters_demo",
    component: <FiltersDemo />,
  },
  {
    title: "stevenbennett.dev",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "Mobile-First", "Redux", "Live Website", "Custom Blog", "Firebase"],
    component: <StevenBennettDev />,
    id: ShowcaseIDs.StevenBennettDev,
    github: "https://github.com/cr4z/stevenbennettdev",
  },
  {
    title: "todoshredder.com",
    icon: <ICONS.React />,
    tags: [
      "React",
      "Clean Code",
      "API",
      "Firebase",
      "React",
      "SSO Authentication",
      "High-Speed Optimization",
      "Live Website",
      "WCAG AAA Compliance",
      "Mobile-First",
    ],
    component: <TodoShredder />,
    id: ShowcaseIDs.TodoShredder,
    github: "https://github.com/cr4z/todoshredder",
  },
  {
    title: "Notator Simulation",
    icon: <ICONS.React />,
    tags: ["React", "Redux", "Material UI", "Web Design", "Intricate Code", "Simulated API"],
    component: <NotatorSimulationContextWrapper />,
    id: ShowcaseIDs.NotatorSimulation,
    github: "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/notator_simulation",
    contentGeneratorContent: notatorSimulationProjectContent,
    useIntroductoryModal: true,
  },
];
