import { useNotatorTools } from "../../../tools/use_notator_tools";
import {
  ItemSizeMode,
  getProvidedListPath,
  useProvidedList,
} from "./generics";
import { CargoItem } from "../types/cargo_item_type";
import { CargoItemCallbackProps } from "../types/locked_control_props";

export function useGetCargoItemCallbacks(props: { mode: ItemSizeMode }) {
  const { mode } = props;

  function getCargoItemCallbacks(
    cargoItem: CargoItem,
    providedListIndex: number
  ): CargoItemCallbackProps {
    const {
      truckerTools: { editTrucker },
    } = useNotatorTools();
    const providedList = useProvidedList({ mode });

    const onChange = (ci: CargoItem) => {
      editTrucker({
        path: `${getProvidedListPath({ mode })}.${providedListIndex}`,
        value: ci,
      });
    };

    const onRemoveSelfFromLedger = () => {
      const current = providedList;
      current.splice(providedListIndex, 1);
      editTrucker({ path: `${getProvidedListPath({ mode })}`, value: current });
    };

    const onAddSelfToLedger = (defaultIncrements?: number) => {
      const current = providedList;
      current.push({
        increments: defaultIncrements ?? 1,
        name: cargoItem.name,
      });
      editTrucker({ path: `${getProvidedListPath({ mode })}`, value: current });
    };

    return { onChange, onRemoveSelfFromLedger, onAddSelfToLedger };
  }

  return getCargoItemCallbacks;
}
