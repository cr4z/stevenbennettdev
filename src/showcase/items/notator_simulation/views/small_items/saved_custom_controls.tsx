import { useNotatorTools } from "../../tools/use_notator_tools";
import { generateCargoItems } from "./logic/generate_cargo_items";
import { useCustomsWithDeletions } from "./logic/use_customs_with_deletions";
import { SavedCustomControl } from "./saved_custom_control";

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

  return (
    <>
      {cargoItems.map((ci, i) => (
        <SavedCustomControl
          key={i}
          cargoItem={ci}
          onChange={() => {}}
          onRemoveSelfFromLedger={() => {}}
          onAddSelfToLedger={() => {}}
          onDelete={() => {}}
        />
      ))}
    </>
  );
}
