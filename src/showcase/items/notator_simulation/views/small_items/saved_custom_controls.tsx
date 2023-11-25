import { useNotatorTools } from "../../tools/use_notator_tools";
import LockedControl from "./locked_control";
import { generateCargoItems } from "./logic/generate_cargo_items";
import { useCustomsWithDeletions } from "./logic/use_customs_with_deletions";

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
        <LockedControl
          key={i}
          cargoItem={ci}
          onAddSelfToLedger={() => {}}
          onRemoveSelfFromLedger={() => {}}
          onChange={() => {}}
          useDelete={{
            onDelete: () => {
              alert("yo");
            },
          }}
        />
      ))}
    </>
  );
}
