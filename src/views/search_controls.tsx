import { Box, ButtonBase, Divider, Typography, useTheme } from "@mui/material";
import { ICONS, IconRenderer } from "../design_system/icons";
import Input from "../design_system/input";
import { SHOWCASES, Showcase } from "../showcase/items";
import { useNavigate } from "react-router";
import Button from "../design_system/button";
import { validateShowcaseID as validateShowcaseID } from "../logic/handleNavigatePortfolio";

export function SearchControls() {
  const { palette } = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
      <Input useIcon="search" />
      <Box>
        <Button onClick={() => {}} variant="contained" sx={{ gap: "6px", mt: ".5rem" }}>
          <IconRenderer widthHeight="1rem" i={<ICONS.PriceTag />} />
          Tags
        </Button>
      </Box>
      <Typography className="noselect" variant="subtitle1" color={palette.grey[400]}>
        Filtering by no tags currently
      </Typography>
    </Box>
  );
}

export function SearchResultsView() {
  return (
    <Box className="green-scrollbar" sx={{ overflowY: "auto", height: "100%", width: "100%" }}>
      {SHOWCASES.map((portfolioItem, i) => (
        <ShowcaseDetailsInteractive key={i} {...portfolioItem} />
      ))}
    </Box>
  );
}

export function ShowcaseDetailsInteractive(props: Showcase) {
  const { palette } = useTheme();
  const navigate = useNavigate();

  return (
    <ButtonBase
      sx={{
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
      onClick={() => {
        const path = validateShowcaseID(props.id);
        navigate(path);
      }}
    >
      <ShowcaseDetails {...props} />
    </ButtonBase>
  );
}

export function ShowcaseDetails(props: Showcase) {
  const { palette } = useTheme();

  return (
    <Box
      className="noselect"
      sx={{
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        borderRadius: "4px",
        justifyContent: "flex-start",
        textAlign: "start",
      }}
    >
      <Box
        sx={{
          bgcolor: palette.grey[500],
          borderRadius: 999,
          minWidth: "2.5rem",
          minHeight: "2.5rem",
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
    </Box>
  );
}
