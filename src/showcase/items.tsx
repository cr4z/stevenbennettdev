import { ICONS } from "../design_system/icons";
import { FloresHomeRepair } from "./items/floreshomerepair";
import StevenBennettDev from "./items/stevenbennettdev";

export enum ShowcaseIDs {
  FloresHomeRepair = "0",
  StevenBennettDev = "1",
}

export type Showcase = {
  title: string;
  icon: JSX.Element;
  tags: string[];
  component?: React.ReactNode;
  id?: string;
  github?: string;
};

export const SHOWCASES: Showcase[] = [
  {
    title: "Custom Form Library",
    icon: <ICONS.React />,
    tags: ["React", "react-hook-form", "yup", "Fortitude"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Beautiful Sidebar",
    icon: <ICONS.React />,
    tags: ["React", "Scalable Architecture", "Web Design", "Fortitude"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Full Stack Calendar Demo Application",
    icon: <ICONS.React />,
    tags: ["React", "Redux", "redux-toolkit", "FullCalendar", "API", "Database"],
    id: "",
    github: "",
    component: <></>,
  },
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
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Sequential Fade-In Effect Across Multiple Divs",
    id: "",
    github: "",
    component: <></>,
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
  },
  {
    title: "dougzonepodcast.com",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "vite", "react-router", "Online Website"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "React useMemo Demo",
    icon: <ICONS.React />,
    tags: ["React Fundamentals"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Elegant & Safe: Modifying deeply-nested state in React",
    icon: <ICONS.React />,
    tags: ["React", "Custom Algorithm"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Custom Hooks in React",
    icon: <ICONS.React />,
    tags: ["React Fundamentals"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Popover Menu: Seamlessly Changing Height Based on Content",
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Design System: Iconography",
    icon: <ICONS.React />,
    tags: ["React", "Scalable Architecture"],
    id: "",
    github: "",
    component: <></>,
  },
  {
    title: "Filtering with a Custom Searchbar",
    icon: <ICONS.React />,
    tags: ["React Fundamentals"],
    id: "",
    github: "",
    component: <></>,
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
