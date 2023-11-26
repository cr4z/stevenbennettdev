import { Box } from "@mui/material";
import DefaultControls from "./default_controls";
import UnlockedControls from "./unlocked_controls";
import DeletableControls from "./deletable_controls";

const SX_ROW_MAJOR_GRID = {
  display: "grid",
  gridTemplateColumns: `repeat(3, 1fr)`,
  gap: "4px",
  maxWidth: "120rem",
};

export default function SmallItemsTabView() {
  return (
    <Box sx={SX_ROW_MAJOR_GRID}>
      <DefaultControls />
      <DeletableControls />
      <UnlockedControls />
    </Box>
  );
}
