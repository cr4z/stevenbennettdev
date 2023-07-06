import { Box, ButtonBase, Tooltip, Typography, useTheme } from "@mui/material";
import { IconRenderer } from "../design_system/icons";
import { Showcase } from "../showcase/items";
import { useNavigate } from "react-router";
import { validateShowcaseID as validateShowcaseID } from "../logic/handleNavigatePortfolio";

export function ShowcaseDetailsInteractive(props: { onAfterSelect?: () => void; showcase: Showcase }) {
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
        const path = validateShowcaseID(props.showcase.id);
        if (props.onAfterSelect) props.onAfterSelect();
        navigate(path);
      }}
    >
      <ShowcaseDetails {...props.showcase} />
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".7rem",
          // ".MuiTypography-root": {
          //   textOverflow: "ellipsis",
          //   overflow: "hidden",
          //   whiteSpace: "nowrap",
          //   maxWidth: "18rem",
          // },
        }}
      >
        <Typography variant="body1">{props.title}</Typography>
        <Typography variant="body1" color={palette.grey[400]}>
          {props.tags.join(", ")}
        </Typography>
      </Box>
    </Box>
  );
}
