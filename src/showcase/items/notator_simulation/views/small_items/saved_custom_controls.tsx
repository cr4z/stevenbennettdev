import { useNotatorTools } from "../../tools/use_notator_tools";
import { generateCargoItems } from "./logic/generate_cargo_items";
import { SavedCustomControl } from "./saved_custom_control";

export function SavedCustomControls() {
  const {
    report,
    truckerTools: { draftTrucker },
  } = useNotatorTools();

  const allCustoms: string[] = report?.customItemLedger.smallItems ?? [];
  const deletedCustoms: string[] = allCustoms; // later...
  const providedList = draftTrucker?.itemLedger.smallItems ?? [];

  const cargoItems = generateCargoItems({
    namesToGenerate: deletedCustoms,
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
