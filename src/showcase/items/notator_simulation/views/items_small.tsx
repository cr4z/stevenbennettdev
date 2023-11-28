import { Box } from "@mui/material";
import DefaultControls from "./items_base/default_controls";
import DeletableControls from "./items_base/deletable_controls";
import UnlockedControls from "./items_base/unlocked_controls";
import { SX_ROW_MAJOR_GRID } from "./items_base/style_constants/sx_row_major_grid";

export default function SmallItemsTabView() {
  return (
    <Box sx={SX_ROW_MAJOR_GRID}>
      <DefaultControls mode="small" />
      <DeletableControls mode="small" />
      <UnlockedControls mode="small" />
    </Box>
  );
}
