import { XNGIconRenderer } from "../../icons";
import { ButtonSidebarItemProps } from "../../types/sidebar_content";
import { Link } from "react-router-dom";
import { SIZE, useSidebarPalette } from "./_";
import { Tooltip, Typography } from "@mui/material";
import { getSizing } from "../../sizing";
import Box from "../../components-dev/BoxExtended";
import { BORDER_RADIUSES } from "../../borderRadiuses";
import SquareIconButton from "./icon_button_square";

function ButtonSidebarItem(props: {
  item: ButtonSidebarItemProps;
  displayAsSelected: boolean;
  open: boolean;
}) {
  // HOOKS
  const palette = useSidebarPalette();

  // DOM HIERARCHY
  return (
    <Link to={props.item.route}>
      <Box sx={{ display: "flex" }}>
        <Tooltip title={props.open ? "" : props.item.label} disableInteractive placement="right">
          <div>
            <SquareIconButton>
              <XNGIconRenderer
                color={props.displayAsSelected ? palette.selected : palette.deselected}
                size={SIZE}
                i={props.item.icon}
              />
            </SquareIconButton>
          </div>
        </Tooltip>
        <Box
          sx={{
            width: "100%",
            marginRight: getSizing(2),
            alignItems: "center",
            display: "flex",
            paddingLeft: getSizing(1),
            borderRadius: BORDER_RADIUSES[0],
            ":hover": {
              bgcolor: palette.bgcolorHover,
              ".MuiTypography-root": {
                color: palette.selected,
              },
            },
          }}
        >
          <Typography color={props.displayAsSelected ? palette.selected : palette.deselected}>
            {props.item.label}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default ButtonSidebarItem;
