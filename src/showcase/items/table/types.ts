export type TableDataProps<T> = {
  columns: { key: keyof T; label: string }[];
  rows: T[];
};

export type TableSelectableProps<T> = {
  useSelectableRows?: BigTableSelectableRowState<T>;
};

export interface BigTableSelectableRowState<T> {
  toggleAll: () => void;
  onRowToggle: (i: BigTableSelectedRow<T>) => void;
  selectedRows: BigTableSelectedRow<T>[];
  isAllToggled: boolean;
}
export type BigTableSelectedRow<T> = {
  indexInDataset: number;
  payload: T;
};
