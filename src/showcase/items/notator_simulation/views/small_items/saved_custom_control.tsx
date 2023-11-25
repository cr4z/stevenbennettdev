import LockedControl from "./locked_control";
import { CargoItemProps } from "./locked_control_props";

export type SavedCustomControlProps = CargoItemProps & {
  onDelete: () => void;
};
export function SavedCustomControl(props: SavedCustomControlProps) {
  return (
    <LockedControl
      cargoItem={props.cargoItem}
      onAddSelfToLedger={props.onAddSelfToLedger}
      onRemoveSelfFromLedger={props.onRemoveSelfFromLedger}
      onChange={props.onChange}
      useDelete={{ onDelete: () => {} }}
    />
  );
}
