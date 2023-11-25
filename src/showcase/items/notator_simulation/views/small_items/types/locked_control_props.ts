import { CargoItem } from "./cargo_item_type";

export type CargoItemProps = {
  cargoItem: CargoItem;
  onChange: (ci: CargoItem) => void;
  onRemoveSelfFromLedger: () => void;
  onAddSelfToLedger: (increments?: number) => void;
};
