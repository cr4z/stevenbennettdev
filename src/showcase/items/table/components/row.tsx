import { BigTableProps } from "../table";
import { TableRow, TableCell } from "@mui/material";
import { SelectableRowFirstCell } from "./selectables";
import { useCallback, useMemo } from "react";

export default function Row<T>(props: BigTableProps<T> & { row: T; rowUID: number }) {
  const { row, rowUID } = props;
  const rowToggled = useMemo(
    () => props.useSelectableRows?.rowSelections.find((sr) => sr.rowUID === rowUID)?.isSelected ?? false,
    [props.useSelectableRows?.rowSelections, props.useSort?.sortedRows]
  );
  const handleToggleRow = useCallback(() => {
    props.useSelectableRows?.onRowToggle(rowUID);
  }, [props.useSelectableRows]);

  const memoizedColumns = useMemo(() => {
    return props.columns;
  }, []);
  const memoizedSelectableRows = useMemo(() => props.useSelectableRows, []);

  return (
    <TableRow
      onClick={() => {
        const onRowClick = props.overrideFunctionalities?.onRowClick;
        if (onRowClick) {
          onRowClick(row);
          return;
        }
        if (memoizedSelectableRows) {
          handleToggleRow();
        }
      }}
      key={rowUID}
      sx={{
        ...(memoizedSelectableRows && { ":hover": { bgcolor: "#0000000C", cursor: "pointer" } }),
      }}
    >
      {memoizedSelectableRows && (
        <SelectableRowFirstCell
          onToggle={(e) => {
            e.stopPropagation();
            handleToggleRow();
          }}
          checked={rowToggled}
        />
      )}

      {memoizedColumns.map((col, colIndex) => (
        <TableCell sx={{ pl: ".5rem!important" }} key={colIndex}>
          {row[col.key] as React.ReactNode}
        </TableCell>
      ))}
    </TableRow>
  );
}
