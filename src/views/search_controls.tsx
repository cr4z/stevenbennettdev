import { Box, Typography, useTheme } from "@mui/material";
import { ICONS, IconRenderer } from "../design_system/icons";
import Input from "../design_system/input";
import { SHOWCASES } from "../showcase/items";
import Button from "../design_system/button";
import { ShowcaseDetailsInteractive } from "./showcase_item";

export function SearchControls() {
  const { palette } = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
      <Input useIcon="search" />
      <Box>
        <Button variant="contained" sx={{ gap: "6px", mt: ".5rem" }}>
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
