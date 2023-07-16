import { ButtonBase, Typography } from "@mui/material";
import Box from "../fortitude/components-dev/BoxExtended";
import { ICONS, IconRenderer } from "../design_system/icons";

export function BackButton(props: { onClick: () => void }) {
  const paddingLeftAndGap = "5px";

  return (
    <Box>
      <ButtonBase
        onClick={props.onClick}
        sx={{ display: "flex", gap: paddingLeftAndGap, padding: ".5rem", paddingLeft: paddingLeftAndGap }}
      >
        <IconRenderer left color="white" widthHeight="1rem" i={<ICONS.Caret />} />
        <Typography>Back</Typography>
      </ButtonBase>
    </Box>
  );
}
