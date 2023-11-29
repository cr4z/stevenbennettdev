import { useState } from "react";
import { BigTableSelectableRowState, BigTableSelectedRow } from "./types";
import toggleFromArrayByKey from "../../../utils/toggle_from_array_by_key";

export default function useBigTableSelectableRowStateManager<T>(props: {
  rows: T[];
}): BigTableSelectableRowState<T> {
  const [selectedRows, setSelectedRows] = useState<BigTableSelectedRow<T>[]>([]);

  const isAllToggled = selectedRows.length === props.rows.length;

  function onToggleAll() {
    if (isAllToggled) {
      setSelectedRows([]);
    } else {
      const allRowsAsSelected: BigTableSelectedRow<T>[] = props.rows.map((payload, indexInDataset) => {
        return {
          payload,
          indexInDataset,
        };
      });

      setSelectedRows(allRowsAsSelected);
    }
  }

  const res: BigTableSelectableRowState<T> = {
    onRowToggle: (row) => {
      const x = toggleFromArrayByKey(row, selectedRows, "indexInDataset");
      setSelectedRows(x);
    },
    selectedRows: selectedRows,
    toggleAll: onToggleAll,
    isAllToggled,
  };

  return res;
}
