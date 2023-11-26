import { Box } from "@mui/material";
import DefaultControls from "./items_base/default_controls";
import DeletableControls from "./items_base/deletable_controls";
import UnlockedControls from "./items_base/unlocked_controls";
import { SX_ROW_MAJOR_GRID } from "./items_base/style_constants/sx_row_major_grid";

export default function LargeItemsTabView() {
  return (
    <Box sx={SX_ROW_MAJOR_GRID}>
      <DefaultControls mode="large" />
      <DeletableControls mode="large" />
      <UnlockedControls mode="large" />
    </Box>
  );
}
