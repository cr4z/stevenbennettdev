import { Typography } from "@mui/material";
import { ICONS } from "../design_system/icons";
import CustomFormLibrary from "./items/custom_form_library";
import FiltersDemo from "./items/filters_demo/main";
import FloresHomeRepair from "./items/floreshomerepair";
import StevenBennettDev from "./items/stevenbennettdev";
import dayjs, { Dayjs } from "dayjs";
import Showcase_SequentialFadeIn from "./items/sequential_fade_in";
import TodoShredder from "./items/todoshredder";
import DougZonePodcast from "./items/dougzonepodcast";
import NotatorSimulationContextWrapper from "./items/notator_simulation";

export enum ShowcaseIDs {
  FloresHomeRepair = "0",
  StevenBennettDev = "1",
  CustomFormLibrary = "2",
  BeautifulSidebar = "3",
  FinancialDashboard = "4",
  SequentialFadeIn = "5",
  ReactUseMemoDemo = "6",
  EditSessionAlgorithm = "7",
  CustomHooksInReact = "8",
  ChangingHeightBasedOnContent = "9",
  IconographySystem = "10",
  FilteringAlgorithm = "11",
  TodoShredder = "12",
  DougZonePodcast = "13",
  NotatorSimulation = "14",
}

export type Showcase = {
  title: string;
  icon: JSX.Element;
  tags: string[];
  component: React.ReactNode;
  id: string;
  github: string;
  description?: string | JSX.Element;
  descriptionPlainText?: string;
  dateCreated?: Dayjs;
};

const GITHUB_CustomFormLibrary =
  "https://github.com/cr4z/stevenbennettdev/blob/main/src/showcase/items/custom_form_library.tsx";

export const SHOWCASES: Showcase[] = [
  {
    title: "Custom Form Library",
    description: (
      <Typography>
        This is an entirely custom form library that is only one cog of a larger
        design system I built called Fortitude. I created this system for a team
        of 4 developers, and it allows for straightforward & simple creation of
        forms in a way that <strong>scales</strong>. It's intuitive;
        intentionally designed to be used without having to refer to
        documentation by leveraging intellisense. Click the GitHub button to see
        it in action!
      </Typography>
    ),
    descriptionPlainText:
      "This is an entirely custom form library that is only one cog of a larger design system I built        called Fortitude. I created this system for a team of 4 developers, and it allows for        straightforward & simple creation of forms in a way that <strong>scales</strong>. It's intuitive;        intentionally designed to be used without having to refer to documentation by leveraging        intellisense. Click the GitHub button to see it in action!      </Typography>",
    icon: <ICONS.React />,
    tags: ["React", "react-hook-form", "yup", "Fortitude"],
    id: ShowcaseIDs.CustomFormLibrary,
    github: GITHUB_CustomFormLibrary,
    component: <CustomFormLibrary link={GITHUB_CustomFormLibrary} />,
  },
  // {
  //   title: "Beautiful Sidebar",
  //   icon: <ICONS.React />,
  //   tags: ["React", "Scalable Architecture", "Web Design", "Fortitude"],
  //   id: ShowcaseIDs.BeautifulSidebar,
  //   github: "",
  //   component: <BeautifulSidebar />,
  // },
  // {
  //   title: "Full Stack Calendar Demo Application",
  //   icon: <ICONS.React />,
  //   tags: ["React", "Redux", "redux-toolkit", "FullCalendar", "API", "Database"],
  //   id: "",
  //   github: "",
  //   component: <></>,
  // },
  {
    title: "floreshomerepair.com",
    icon: <ICONS.Nextjs />,
    tags: [
      "Next.js",
      "Web Design",
      "Online Website",
      "SEO",
      "Mobile-First",
      "SSR",
    ],
    id: ShowcaseIDs.FloresHomeRepair,
    github: "https://github.com/cr4z/flores-home-repair",
    component: <FloresHomeRepair />,
    description:
      "This was my first freelance project I had ever done professionally, built with Next.js. I've sinced gotten a little bit better at image optimization, but to this day it remains one of my finest achievements in SEO optimization! When typing 'flores home repair' into Google, floreshomerepair.com should be at the very top. Even variations such as 'Flores House Renovation' should work. It's also visible outside of the United States; as far as France!",
    dateCreated: dayjs(new Date(2022, 3, 24)),
  },
  // {
  //   title: "Pure HTML Challenge: Financial Dashboard",
  //   icon: <ICONS.HTML />,
  //   tags: ["Web Design", "chart.js", "HTML, JavaScript and CSS"],
  //   id: ShowcaseIDs.FinancialDashboard,
  //   github: "",
  //   component: <></>,
  // },
  {
    title: "Sequential Fade-In Effect Across Multiple Divs",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "useMemo"],
    id: ShowcaseIDs.SequentialFadeIn,
    github:
      "https://github.com/cr4z/stevenbennettdev/blob/main/src/showcase/items/sequential_fade_in.tsx",
    component: <Showcase_SequentialFadeIn />,
  },

  {
    title: "dougzonepodcast.com",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "vite", "react-router", "Online Website"],
    id: ShowcaseIDs.DougZonePodcast,
    github: "https://github.com/cr4z/dzp-vite",
    component: <DougZonePodcast />,
  },
  // {
  //   title: "React useMemo Demo",
  //   icon: <ICONS.React />,
  //   tags: ["React Fundamentals"],
  //   id: ShowcaseIDs.ReactUseMemoDemo,
  //   github: "",
  //   component: <></>,
  // },
  // {
  //   title: "Elegant & Safe: Modifying deeply-nested state in React",
  //   icon: <ICONS.React />,
  //   tags: ["React", "Custom Algorithm"],
  //   id: ShowcaseIDs.EditSessionAlgorithm,
  //   github: "",
  //   component: <></>,
  // },
  // {
  //   title: "Custom Hooks in React",
  //   icon: <ICONS.React />,
  //   tags: ["React Fundamentals"],
  //   id: ShowcaseIDs.CustomHooksInReact,
  //   github: "",
  //   component: <></>,
  // },
  // {
  //   title: "Popover Menu: Seamlessly Changing Height Based on Content",
  //   icon: <ICONS.React />,
  //   tags: ["React", "Web Design"],
  //   id: ShowcaseIDs.ChangingHeightBasedOnContent,
  //   github: "",
  //   component: <></>,
  // },
  // {
  //   title: "Design System: Iconography",
  //   icon: <ICONS.React />,
  //   tags: ["React", "Scalable Architecture"],
  //   id: ShowcaseIDs.IconographySystem,
  //   github: "",
  //   component: <></>,
  // },
  {
    title: "Common Algorithm: Multiple Filters",
    description:
      "This is actually the first GitHub project I ever created to help teach someone a concept, so it's near and dear to me!",
    icon: <ICONS.React />,
    tags: ["React", "Custom Algorithm"],
    id: ShowcaseIDs.FilteringAlgorithm,
    github:
      "https://github.com/cr4z/stevenbennettdev/tree/main/src/showcase/items/filters_demo",
    component: <FiltersDemo />,
  },
  {
    title: "stevenbennett.dev",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "Mobile-First"],
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
      "Firestore",
      "Database",
      "React",
      "SSO Authentication",
      "High-Speed Optimization",
      "Live Website",
      "WCAG AAA Compliance",
      "Mobile-First",
    ],
    component: <TodoShredder />,
    id: ShowcaseIDs.TodoShredder,
    github: "",
  },
  {
    title: "Notator Simulation",
    icon: <ICONS.React />,
    tags: ["React"],
    component: <NotatorSimulationContextWrapper />,
    id: ShowcaseIDs.NotatorSimulation,
    github: "",
  },
];
