import { Box, ButtonBase, Divider, Typography, useTheme } from "@mui/material";
import { ICONS, IconRenderer } from "../design_system/icons";
import Input from "../design_system/input";
import { PORTFOLIO_ITEMS, PortfolioItem } from "../data/portfolio_items";
import { useNavigate } from "react-router";
import Button from "../design_system/button";

function PortfolioItemSearch() {
  const { palette } = useTheme();

  return (
    <>
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
          {PORTFOLIO_ITEMS.map((portfolioItem) => (
            <PortfolioItemButton {...portfolioItem} />
          ))}
        </Box>
      </Box>
    </>
  );
}

function PortfolioItemButton(props: PortfolioItem) {
  const { palette } = useTheme();
  const navigate = useNavigate();

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
      onClick={() => navigate("/portfolio/" + props.id)}
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

export default PortfolioItemSearch;
