import { useNotatorTools } from "../../tools/use_notator_tools";
import { CargoItem } from "./types/cargo_item_type";
import { generateCargoItems } from "./logic/generate_cargo_items";
import LockedControl from "./locked_control";

export default function LockedItems() {
  const {
    warehouseProfile,
    truckerTools: { draftTrucker, editTrucker },
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
        const docIndex = providedList.findIndex(
          (ci) => ci.name === cargoItem.name
        );

        return (
          <LockedControl
            key={i}
            cargoItem={cargoItem}
            onChange={(ci: CargoItem) => {
              editTrucker({
                path: `itemLedger.smallItems.${docIndex}`,
                value: ci,
              });
            }}
            onRemoveSelfFromLedger={() => {
              const current = draftTrucker.itemLedger.smallItems;
              current.splice(docIndex, 1);
              editTrucker({ path: `itemLedger.smallItems`, value: current });
            }}
            onAddSelfToLedger={(defaultIncrements?: number) => {
              const current = draftTrucker.itemLedger.smallItems;
              current.push({
                increments: defaultIncrements ?? 1,
                name: cargoItem.name,
              });
              editTrucker({ path: `itemLedger.smallItems`, value: current });
            }}
          />
        );
      })}
    </>
  );
}
