// PROP INTERFACES

export type TableDataProps<T> = {
  columns: BigTableColumn<T>[];
  rows?: T[];
  onTableRequestParametersChange?: (v: TableRequestParameters<T>) => void;
};
export type TableSortableProps<T> = {
  useSort?: TableSortState<T>;
};

export type TablePaginationProps = {
  usePagination?: PaginationState;
};

export type TableOverrideFunctionalityProps<T> = {
  overrideFunctionalities?: {
    onRowClick?: (v: T) => void;
  };
};
export type TableSelectableProps<T> = {
  useSelectableRows?: XNGBigTableSelectableRowState<T>;
};

// STATE MANAGEMENT INTERFACES
export interface TableSortState<T> {
  sortBy: BigTableSortSetting<T>;
  sortedRows: KeyedRow<T>[];
  onSortChange: (v: BigTableSortSetting<T>) => void;
  onClientSideSort: () => void;
  originalRows: T[];
}

export interface XNGBigTableSelectableRowState<T> {
  toggleAll: () => void;
  onRowToggle: (rowUID: number) => void;
  rowSelections: XNGBigTableSelectedRow<T>[];
  isAllToggled: boolean;
}

export interface PaginationState {
  pageIndex: number;
  resultsPerPage: number;
  totalCount: number;
  totalPages: number;
  isViewingAll: boolean;
  onPageSizeChange: (v: number) => void;
  onCurrentPageIndexChange: (v: number) => void;
}

// GRANULAR HELPER TYPES

export type BigTableColumn<T> = { key: keyof T; label: string };


export type KeyedRow<T> = {
  uid: number;
  row: T;
};

export type XNGBigTableSelectedRow<T> = {
  rowUID: number;
  row: T;
  isSelected: boolean;
};

export type TableRequestParameters<T> = {
  pageIndex: number;
  resultsPerPage: number;
  sortBy: BigTableSortSetting<T>;
};

export type ResultsPerPageOption = 50 | 100 | 250;

/**
 * Example usage:
 * * `sortBy: {key: "firstName", order: "ascending"}`   = sort by first name ascending
 * * `sortBy: {key: "lastName", order: "descending"}`    = sort by last name descending
 * * `sortBy: null`                                     = do not sort (default)
 */
export type BigTableSortSetting<T> = {
  key: keyof T;
  order: "ascending" | "descending";
} | null;
