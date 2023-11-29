import { Box, Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { TableDataProps, TableSelectableProps } from "./types";

export type BigTableProps<T> = TableDataProps<T> & TableSelectableProps<T>;

function BigTable<T>(props: BigTableProps<T>) {
  return (
    <Table>
      <Head {...props} />
      <Body {...props} />
    </Table>
  );
}

function Head<T>(props: BigTableProps<T>) {
  return (
    <TableHead>
      <TableRow>
        {props.useSelectableRows && (
          <SelectableColumnHeaderCell
            value={props.useSelectableRows!.isAllToggled}
            onClick={() => {
              props.useSelectableRows!.toggleAll();
            }}
          />
        )}

        {props.columns.map((col, i) => (
          <TableCell key={i}>{col.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function Body<T>(props: BigTableProps<T>) {
  return (
    <TableBody>
      {props.rows.map((row, rowIndex) => {
        const rowToggled =
          Boolean(props.useSelectableRows?.selectedRows.find((sr) => sr.indexInDataset === rowIndex)) ??
          false;

        return (
          <TableRow key={rowIndex}>
            {props.useSelectableRows && (
              <SelectableRowFirstCell
                onToggle={() =>
                  props.useSelectableRows?.onRowToggle({
                    indexInDataset: rowIndex,
                    payload: row,
                  })
                }
                checked={rowToggled}
              />
            )}

            {props.columns.map((col, colIndex) => (
              <TableCell key={colIndex}>{String(row[col.key])}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

// ------------ Selectable Header & Body ------------

function SelectableColumnHeaderCell(props: { value: boolean; onClick: () => void }) {
  return (
    <TableCell>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox checked={props.value} onClick={props.onClick} />
        <Typography>All</Typography>
      </Box>
    </TableCell>
  );
}

function SelectableRowFirstCell(props: { checked: boolean; onToggle: () => void }) {
  const { checked, onToggle } = props;

  return (
    <TableCell>
      <Checkbox checked={checked} onClick={onToggle} />
    </TableCell>
  );
}

export default BigTable;
