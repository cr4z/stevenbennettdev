import { Box } from "@mui/material";
import DefaultControls from "./small_items/default_controls";
import DeletableControls from "./small_items/deletable_controls";
import UnlockedControls from "./small_items/unlocked_controls";

const SX_ROW_MAJOR_GRID = {
  display: "grid",
  gridTemplateColumns: `repeat(3, 1fr)`,
  gap: "4px",
  maxWidth: "120rem",
};

export default function MediumItemsTabView() {
  return (
    <Box sx={SX_ROW_MAJOR_GRID}>
      <DefaultControls />
      <DeletableControls />
      <UnlockedControls />
    </Box>
  );
}
