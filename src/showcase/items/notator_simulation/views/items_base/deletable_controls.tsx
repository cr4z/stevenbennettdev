import { useFormTools } from "../../tools/use_form_tools";
import {
  ItemSizeMode,
  getCustomItemsPath,
  useDraftCustomItemsLedger,
  useProvidedList,
} from "./logic/generics";
import LockedControl from "./locked_control";
import { generateCargoItems } from "./logic/generate_cargo_items";
import { useCustomsWithDeletions } from "./logic/use_customs_with_deletions";
import { useGetCargoItemCallbacks } from "./logic/use_get_cargo_item_callbacks";

export default function DeletableControls(props: { mode: ItemSizeMode }) {
  const { mode } = props;

  const providedList = useProvidedList({ mode });
  const draftCustomItemsLedger = useDraftCustomItemsLedger({ mode });
  const customNamesToRender = useCustomsWithDeletions({ mode });
  const getCargoItemCallbacks = useGetCargoItemCallbacks({ mode });

  const { editDraft } = useFormTools();

  const cargoItems = generateCargoItems({
    namesToGenerate: customNamesToRender,
    deriveIncrements: providedList,
  });

  function handleDelete(nameToDelete: string) {
    const currentNames = [...draftCustomItemsLedger];
    const afterDeletion = currentNames.filter((name) => name !== nameToDelete);
    editDraft({
      path: getCustomItemsPath({ mode }),
      value: afterDeletion,
    });
  }

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
              onDelete: handleDelete,
            }}
          />
        );
      })}
    </>
  );
}
