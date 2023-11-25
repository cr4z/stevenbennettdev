import { useNotatorTools } from "../../tools/use_notator_tools";
import { CargoItem } from "./types/cargo_item_type";
import { generateCargoItems } from "./logic/generate_cargo_items";
import LockedControl from "./locked_control";
import { CargoItemCallbackProps } from "./types/locked_control_props";

export default function LockedItems() {
  const {
    warehouseProfile,
    truckerTools: { draftTrucker },
  } = useNotatorTools();

  if (!warehouseProfile || !draftTrucker) return <></>;

  const defaultNames: string[] = warehouseProfile.defaultItemsLedger.smallItems;
  const providedList = draftTrucker.itemLedger.smallItems;
  const cargoItems = generateCargoItems({
    namesToGenerate: defaultNames,
    deriveIncrements: providedList,
  });

  return (
    <>
      {cargoItems.map((cargoItem, i) => {
        const providedListIndex = providedList.findIndex(
          (ci) => ci.name === cargoItem.name
        );

        const cargoItemCallbacks = useCargoItemDataOperationCallbacks(
          providedListIndex,
          cargoItem
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

function useCargoItemDataOperationCallbacks(
  providedListIndex: number,
  cargoItem: CargoItem
): CargoItemCallbackProps {
  const {
    truckerTools: { draftTrucker, editTrucker },
  } = useNotatorTools();

  if (!draftTrucker) throw new Error("");

  const onChange = (ci: CargoItem) => {
    editTrucker({
      path: `itemLedger.smallItems.${providedListIndex}`,
      value: ci,
    });
  };

  const onRemoveSelfFromLedger = () => {
    const current = draftTrucker.itemLedger.smallItems;
    current.splice(providedListIndex, 1);
    editTrucker({ path: `itemLedger.smallItems`, value: current });
  };

  const onAddSelfToLedger = (defaultIncrements?: number) => {
    const current = draftTrucker.itemLedger.smallItems;
    current.push({
      increments: defaultIncrements ?? 1,
      name: cargoItem.name,
    });
    editTrucker({ path: `itemLedger.smallItems`, value: current });
  };

  return { onChange, onRemoveSelfFromLedger, onAddSelfToLedger };
}
