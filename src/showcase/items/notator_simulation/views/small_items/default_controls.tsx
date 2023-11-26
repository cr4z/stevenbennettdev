import { useNotatorTools } from "../../tools/use_notator_tools";
import { generateCargoItems } from "./logic/generate_cargo_items";
import LockedControl from "./locked_control";
import { useGetCargoItemCallbacks } from "./logic/use_get_cargo_item_callbacks";

export default function DefaultControls() {
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

  const getCargoItemCallbacks = useGetCargoItemCallbacks();

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
