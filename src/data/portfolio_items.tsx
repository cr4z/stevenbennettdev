import { Box, Typography } from "@mui/material";
import { ICONS } from "../design_system/icons";
// @ts-ignore
import asdf from "../img/floreshomerepair.png";

export enum PortfolioItemIDs {
  dougzonepodcast = "0",
}

export type PortfolioItem = {
  title: string;
  icon: JSX.Element;
  tags: string[];
  component?: React.ReactNode;
  id?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
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
    title: "dougzonepodcast.com",
    icon: <ICONS.React />,
    tags: ["React", "Web Design", "vite", "react-router", "Online Website"],
    component: <FloresHomeRepair />,
    id: PortfolioItemIDs.dougzonepodcast,
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
    title: "floreshomerepair.com",
    icon: <ICONS.Nextjs />,
    tags: ["Next.js", "Web Design", "Online Website"],
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

function FloresHomeRepair() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Box
        sx={{
          maxWidth: "100%",
          minHeight: "100%",
          objectFit: "cover",
          filter: "brightness(50%) blur(2px)",
        }}
        component="img"
        src={asdf}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography className="noselect" variant="h3">
          Click to view website
        </Typography>
      </Box>
    </Box>
  );
}
