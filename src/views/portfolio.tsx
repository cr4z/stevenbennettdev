import { Box, ButtonBase, Container, Divider, Typography, useTheme } from "@mui/material";
import Input from "../design_system/input";
import Button from "../design_system/button";
import { ICONS, IconRenderer } from "../design_system/icons";

function Portfolio() {
  const { palette } = useTheme();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          paddingTop: "4rem",
          width: "100%",
        }}
      >
        <Typography variant="h4">My Portfolio</Typography>
        <Typography variant="body1">A collection of work projects, tutorials, and more</Typography>

        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input useIcon="search" />

          <Button onClick={() => {}} variant="contained" sx={{ gap: "6px", mt: ".5rem" }}>
            <IconRenderer widthHeight="1rem" i={<ICONS.PriceTag />} />
            Tags
          </Button>

          <Typography className="noselect" variant="subtitle1" color={palette.grey[400]}>
            Filtering by no tags currently
          </Typography>

          <Divider sx={{ bgcolor: palette.grey[600] }} />

          <Box sx={{ maxHeight: "21.3rem", overflowY: "auto" }}>
            {SEARCH_OPTIONS.map((searchOption) => (
              <SearchOption title={searchOption.title} icon={searchOption.icon} tags={searchOption.tags} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

const SEARCH_OPTIONS: SearchOptionProp[] = [
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
  },

  {
    title: "Pure HTML Challenge: Financial Dashboard",
    icon: <ICONS.HTML />,
    tags: ["Web Design", "chart.js", "HTML, JavaScript and CSS"],
  },
  {
    title: "floreshomerepair.com",
    icon: <ICONS.Nextjs />,
    tags: ["Next.js", "Web Design", "Online Website"],
  },
  {
    title: "Sequential Fade-In Effect Across Multiple Divs",
    icon: <ICONS.React />,
    tags: ["React", "Web Design"],
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

type SearchOptionProp = { title: string; icon: JSX.Element; tags: string[] };

function SearchOption(props: SearchOptionProp) {
  const { palette } = useTheme();

  return (
    <ButtonBase
      sx={{
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        ":hover": { bgcolor: palette.grey[800] },
        borderRadius: "4px",
        cursor: "pointer",
        width: "100%",
        justifyContent: "flex-start",
        textAlign: "start",
      }}
    >
      <Box
        sx={{
          bgcolor: palette.grey[500],
          borderRadius: 999,
          width: "2.5rem",
          height: "2.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconRenderer color={palette.text.primary} widthHeight="1.6rem" i={props.icon} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: ".7rem" }}>
        <Typography variant="body1">{props.title}</Typography>
        <Typography variant="body1" color={palette.grey[400]}>
          {props.tags.join(", ")}
        </Typography>
      </Box>
    </ButtonBase>
  );
}

export default Portfolio;
