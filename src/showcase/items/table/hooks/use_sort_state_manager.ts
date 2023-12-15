import { useCallback, useEffect, useState } from "react";
import { KeyedRow, TableSortState, BigTableSortSetting } from "../types";
import { sortItemsAlphabetically } from "../../../../sbd_development_kit/utils/sort_items_alphabetically";

export default function useBigTableSortStateManager<T>(props: {
  keyedRows: KeyedRow<T>[];
  originalRows: T[];
  onClientSideSort?: () => void;
}): TableSortState<T> {
  const { keyedRows } = props;

  const [sortBy, setSortBy] = useState<BigTableSortSetting<T>>(null);

  const [sortedRows, setSortedRows] = useState<KeyedRow<T>[]>(keyedRows);
  const [originalRows, setOriginalRows] = useState<T[]>(props.originalRows);

  useEffect(() => {
    setOriginalRows(props.originalRows);
    setSortedRows(keyedRows);
  }, [keyedRows]);

  const onClientSideSort = useCallback(() => {
    if (!sortBy) return;
    const sorted = sortRows({ rows: [...keyedRows], sortBy });
    setSortedRows(sorted);

    if (props.onClientSideSort) {
      props.onClientSideSort();
    }
  }, [sortBy]);

  const onSortChange = useCallback((v: BigTableSortSetting<T>) => setSortBy(v), []);

  return {
    sortedRows,
    sortBy,
    onSortChange,
    onClientSideSort,
    originalRows,
  };
}

// sortBy: {key: "firstName", order: "ascending"} = sort by first name ascending
// sortBy: {key: "lastName", order: "descending"} = sort by last name descending
// sortBy: null = do not sort (default)
export function sortRows<T>(props: { rows: KeyedRow<T>[]; sortBy: BigTableSortSetting<T> }): KeyedRow<T>[] {
  const { rows, sortBy } = props;
  if (!sortBy) {
    return rows;
  }
  const { key, order } = sortBy;

  const res = sortItemsAlphabetically(rows, `row.${key.toString()}`, order);

  return res;
}
