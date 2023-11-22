import { Box, Typography } from "@mui/material";
import { CargoItem } from "./cargo_item_type";

export default function LockedControl(props: {
  cargoItem: CargoItem;
  onChange: (ci: CargoItem) => void;
  onRemoveSelfFromLedger: () => void;
  onAddSelfToLedger: () => void;
}) {
  const { name, increments } = props.cargoItem;

  function handleDecrement() {
    if (increments < 1) return;

    if (increments === 1) {
      props.onRemoveSelfFromLedger();
      return;
    }

    if (increments > 1) {
      props.onChange({
        increments: increments - 1,
        name,
      });
    }
  }

  function handleToggle() {
    if (increments < 1) {
      props.onAddSelfToLedger();
      return;
    }

    if (increments > 0) {
      props.onRemoveSelfFromLedger();
      return;
    }
  }

  function handleIncrement() {
    if (increments < 1) {
      props.onAddSelfToLedger();
    }

    if (increments >= 1) {
      props.onChange({
        increments: increments + 1,
        name,
      });
    }
  }

  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{increments}</Typography>
      <button onClick={handleDecrement}>-</button>
      <input onClick={handleToggle} type="checkbox" />
      <button onClick={handleIncrement}>+</button>
    </Box>
  );
}
