import { ICONS } from "../design_system/icons";
import CustomFormLibrary from "./items/custom_form_library";
import FiltersDemo from "./items/filters_demo/filters_demo";
import FloresHomeRepair from "./items/floreshomerepair";
import StevenBennettDev from "./items/stevenbennettdev";

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
}

export type Showcase = {
  title: string;
  icon: JSX.Element;
  tags: string[];
  component?: React.ReactNode;
  id?: string;
  github?: string;
  description?: string;
};

export const SHOWCASES: Showcase[] = [
  {
    title: "Custom Form Library",
    icon: <ICONS.React />,
    tags: ["React", "react-hook-form", "yup", "Fortitude"],
    id: ShowcaseIDs.CustomFormLibrary,
    github: "",
    component: <CustomFormLibrary />,
  },
  {
    title: "Beautiful Sidebar",
    icon: <ICONS.React />,
    tags: ["React", "Scalable Architecture", "Web Design", "Fortitude"],
    id: ShowcaseIDs.BeautifulSidebar,
    github: "",
    component: <></>,
  },
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
    tags: ["Next.js", "Web Design", "Online Website", "SEO"],
    id: ShowcaseIDs.FloresHomeRepair,
    github: "https://github.com/cr4z/flores-home-repair",
    component: <FloresHomeRepair />,
  },
  {
    title: "Pure HTML Challenge: Financial Dashboard",
    icon: <ICONS.HTML />,
    tags: ["Web Design", "chart.js", "HTML, JavaScript and CSS"],
    id: ShowcaseIDs.FinancialDashboard,
    github: "",
    component: <></>,
  },
  {
    title: "Sequential Fade-In Effect Across Multiple Divs",
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
    id: ShowcaseIDs.SequentialFadeIn,
    github: "",
    component: <></>,
  },
  // {
  //   title: "dougzonepodcast.com",
  //   icon: <ICONS.React />,
  //   tags: ["React", "Web Design", "vite", "react-router", "Online Website"],
  //   id: "",
  //   github: "",
  //   component: <></>,
  // },
  {
    title: "React useMemo Demo",
    icon: <ICONS.React />,
    tags: ["React Fundamentals"],
    id: ShowcaseIDs.ReactUseMemoDemo,
    github: "",
    component: <></>,
  },
  {
    title: "Elegant & Safe: Modifying deeply-nested state in React",
    icon: <ICONS.React />,
    tags: ["React", "Custom Algorithm"],
    id: ShowcaseIDs.EditSessionAlgorithm,
    github: "",
    component: <></>,
  },
  {
    title: "Custom Hooks in React",
    icon: <ICONS.React />,
    tags: ["React Fundamentals"],
    id: ShowcaseIDs.CustomHooksInReact,
    github: "",
    component: <></>,
  },
  {
    title: "Popover Menu: Seamlessly Changing Height Based on Content",
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
    id: ShowcaseIDs.ChangingHeightBasedOnContent,
    github: "",
    component: <></>,
  },
  {
    title: "Design System: Iconography",
    icon: <ICONS.React />,
    tags: ["React", "Scalable Architecture"],
    id: ShowcaseIDs.IconographySystem,
    github: "",
    component: <></>,
  },
  {
    title: "Common Algorithm: Multiple Filters",
    description:
      "This was actually the first GitHub project I used to mentor a fellow developer, so it's near and dear to me!",
    icon: <ICONS.React />,
    tags: ["React", "Custom Algorithm"],
    id: ShowcaseIDs.FilteringAlgorithm,
    github: "",
    component: <FiltersDemo />,
  },
  {
    title: "stevenbennett.dev",
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
    component: <StevenBennettDev />,
    id: ShowcaseIDs.StevenBennettDev,
    github: "https://github.com/cr4z/stevenbennettdev",
  },
];
