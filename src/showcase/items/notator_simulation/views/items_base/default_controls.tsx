import { generateCargoItems } from "./logic/generate_cargo_items";
import LockedControl from "./locked_control";
import { useGetCargoItemCallbacks } from "./logic/use_get_cargo_item_callbacks";
import {
  ItemSizeMode,
  useDefaultNames,
  useProvidedList,
} from "./logic/generics";

export default function DefaultControls(props: { mode: ItemSizeMode }) {
  const { mode } = props;

  const defaultNames = useDefaultNames({ mode });
  const providedList = useProvidedList({ mode });

  const cargoItems = generateCargoItems({
    namesToGenerate: defaultNames,
    deriveIncrements: providedList,
  });

  const getCargoItemCallbacks = useGetCargoItemCallbacks({ mode });

  return (
    <>
      {cargoItems.map((cargoItem, i) => {
        const providedListIndex = providedList.findIndex(
          (ci) => ci.name === cargoItem.name
        );

        const cargoItemCallbacks = getCargoItemCallbacks(
          cargoItem,
          providedListIndex
        );

        return (
          <LockedControl
            key={i}
            cargoItem={cargoItem}
            onChange={cargoItemCallbacks.onChange}
            onRemoveSelfFromLedger={cargoItemCallbacks.onRemoveSelfFromLedger}
            onAddSelfToLedger={cargoItemCallbacks.onAddSelfToLedger}
          />
        );
      })}
    </>
  );
}
