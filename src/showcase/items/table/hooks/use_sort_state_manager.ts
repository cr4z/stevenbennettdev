import { useEffect, useState } from "react";
import { KeyedRow, TableSortState, XNGBigTableSortSetting } from "../types";
import { sortItemsAlphabetically } from "../../../../sbd_development_kit/utils/sort_items_alphabetically";

export default function useXNGBigTableSortStateManager<T>(props: {
  keyedRows: KeyedRow<T>[];
  originalRows: T[];
  onClientSideSort?: () => void;
}): TableSortState<T> {
  const { keyedRows } = props;

  const [sortBy, setSortBy] = useState<XNGBigTableSortSetting<T>>(null);

  const [sortedRows, setSortedRows] = useState<KeyedRow<T>[]>(keyedRows);
  const [originalRows, setOriginalRows] = useState<T[]>(props.originalRows);

  useEffect(() => {
    setOriginalRows(props.originalRows);
    setSortedRows(keyedRows);
  }, [keyedRows]);

  function onClientSideSort() {
    setSortedRows(sortRows({ rows: keyedRows, sortBy }));

    if (props.onClientSideSort) {
      props.onClientSideSort();
    }
  }

  return {
    sortedRows,
    sortBy,
    onSortChange: (v: XNGBigTableSortSetting<T>) => setSortBy(v),
    onClientSideSort,
    originalRows,
  };
}

// sortBy: {key: "firstName", order: "ascending"} = sort by first name ascending
// sortBy: {key: "lastName", order: "descending"} = sort by last name descending
// sortBy: null = do not sort (default)
export function sortRows<T>(props: {
  rows: KeyedRow<T>[];
  sortBy: XNGBigTableSortSetting<T>;
}): KeyedRow<T>[] {
  const { rows, sortBy } = props;
  if (!sortBy) {
    return rows;
  }
  const { key, order } = sortBy;

  const res = sortItemsAlphabetically(rows, `row.${key.toString()}`, order);

  return res;
}
