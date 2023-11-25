import { useNotatorTools } from "../../../tools/use_notator_tools";
import { CargoItem } from "../types/cargo_item_type";
import { CargoItemCallbackProps } from "../types/locked_control_props";

export function useGetCargoItemCallbacks() {
  return (
    cargoItem: CargoItem,
    providedListIndex: number
  ): CargoItemCallbackProps => {
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
  };
}
