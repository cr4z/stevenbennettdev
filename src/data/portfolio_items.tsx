import { ICONS } from "../design_system/icons";
import { FloresHomeRepair } from "./floreshomerepair";

export enum ShowcaseIDs {
  dougzonepodcast = "0",
}

export type Showcase = {
  title: string;
  icon: JSX.Element;
  tags: string[];
  component?: React.ReactNode;
  id?: string;
};

export const SHOWCASES: Showcase[] = [
  { title: "Custom Form Library", icon: <ICONS.React />, tags: ["React", "react-hook-form", "yup"] },
  {
    title: "Full Stack Calendar Demo Application",
    icon: <ICONS.React />,
    tags: ["React", "Redux", "redux-toolkit", "FullCalendar", "API", "Database"],
  },
  {
    title: "Beautiful Sidebar",
    icon: <ICONS.React />,
    tags: ["React", "Scalable Architecture", "Web Design"],
  },
  {
    title: "floreshomerepair.com",
    icon: <ICONS.Nextjs />,
    tags: ["Next.js", "Web Design", "Online Website"],
    component: <FloresHomeRepair />,
    id: ShowcaseIDs.dougzonepodcast,
  },
  {
    title: "Pure HTML Challenge: Financial Dashboard",
    icon: <ICONS.HTML />,
    tags: ["Web Design", "chart.js", "HTML, JavaScript and CSS"],
  },
  {
    title: "Sequential Fade-In Effect Across Multiple Divs",
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
  },
  {
    title: "dougzonepodcast.com",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "vite", "react-router", "Online Website"],
  },
  { title: "React useMemo Demo", icon: <ICONS.React />, tags: ["React Fundamentals"] },
  {
    title: "Elegant & Safe: Modifying deeply-nested state in React",
    icon: <ICONS.React />,
    tags: ["React", "Custom Algorithm"],
  },
  { title: "Custom Hooks in React", icon: <ICONS.React />, tags: ["React Fundamentals"] },
  {
    title: "Popover Menu: Seamlessly Changing Height Based on Content",
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
  },
  {
    title: "Design System: Iconography",
    icon: <ICONS.React />,
    tags: ["React", "Scalable Architecture"],
  },
  { title: "Filtering with a Custom Searchbar", icon: <ICONS.React />, tags: ["React Fundamentals"] },
];
