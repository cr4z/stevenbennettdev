import { useCallback, useEffect, useState } from "react";
import {
  KeyedRow,
  XNGBigTableSelectableRowState as BigTableSelectableRowState,
  XNGBigTableSelectedRow as BigTableSelectedRow,
} from "../types";

export default function useBigTableSelectableRowStateManager<T>(props: {
  keyedRows: KeyedRow<T>[];
}): BigTableSelectableRowState<T> {
  const { keyedRows: keyedRows } = props;

  const { rowSelections, setRowSelections, toggleAll } = useRowSelection<T>({ keyedRows });

  const isAllToggled = rowSelections.filter((sr) => sr.isSelected).length === keyedRows.length;

  function onToggleAll() {
    if (isAllToggled) {
      toggleAll.off();
    } else {
      toggleAll.on();
    }
  }

  const onRowToggle = useCallback(
    (rowUID: number) => {
      const newSelectionState = [...rowSelections];
      const isSelected = newSelectionState[rowUID].isSelected;
      newSelectionState[rowUID].isSelected = !isSelected;
      setRowSelections(newSelectionState);
    },
    [rowSelections]
  );

  const res: BigTableSelectableRowState<T> = {
    onRowToggle,
    rowSelections,
    toggleAll: onToggleAll,
    isAllToggled,
  };

  return res;
}

function useRowSelection<T>(props: { keyedRows: KeyedRow<T>[] }) {
  const { keyedRows } = props;

  function getDefaultRows(): BigTableSelectedRow<T>[] {
    const res: BigTableSelectedRow<T>[] = keyedRows.map((kr) => ({
      isSelected: false,
      rowUID: kr.uid,
      row: kr.row,
    }));

    return res;
  }
  const [rowSelections, setRowSelections] = useState<BigTableSelectedRow<T>[]>([]);

  useEffect(() => {
    setRowSelections(getDefaultRows());
  }, [keyedRows]);

  const toggleAll = {
    on: () => {
      const newRows: BigTableSelectedRow<T>[] = rowSelections.map((r) => {
        const { row, rowUID } = r;
        const newRow: BigTableSelectedRow<T> = { isSelected: true, row, rowUID };
        return newRow;
      });
      setRowSelections(newRows);
    },
    off: () => {
      const newRows: BigTableSelectedRow<T>[] = rowSelections.map((r) => {
        const { row, rowUID } = r;
        const newRow: BigTableSelectedRow<T> = { isSelected: false, row, rowUID };
        return newRow;
      });
      setRowSelections(newRows);
    },
  };

  return { rowSelections, setRowSelections, toggleAll };
}
