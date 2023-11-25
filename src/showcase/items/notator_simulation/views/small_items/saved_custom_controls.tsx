import { useNotatorTools } from "../../tools/use_notator_tools";
import LockedControl from "./locked_control";
import { generateCargoItems } from "./logic/generate_cargo_items";
import { useCustomsWithDeletions } from "./logic/use_customs_with_deletions";
import { useGetCargoItemCallbacks } from "./logic/use_get_cargo_item_callbacks";

export function SavedCustomControls() {
  const {
    truckerTools: { draftTrucker },
  } = useNotatorTools();

  const customNamesToRender = useCustomsWithDeletions();
  const providedList = draftTrucker?.itemLedger.smallItems ?? [];

  const cargoItems = generateCargoItems({
    namesToGenerate: customNamesToRender,
    deriveIncrements: providedList,
  });

  const getCargoItemCallbacks = useGetCargoItemCallbacks();

  return (
    <>
      {cargoItems.map((cargoItem, i) => {
        const providedListIndex = providedList.findIndex(
          (_ci) => _ci.name === cargoItem.name
        );

        const cargoItemCbs = getCargoItemCallbacks(
          cargoItem,
          providedListIndex
        );

        return (
          <LockedControl
            key={i}
            cargoItem={cargoItem}
            onAddSelfToLedger={cargoItemCbs.onAddSelfToLedger}
            onRemoveSelfFromLedger={cargoItemCbs.onRemoveSelfFromLedger}
            onChange={cargoItemCbs.onChange}
            useDelete={{
              onDelete: () => {
                alert("yo");
              },
            }}
          />
        );
      })}
    </>
  );
}
