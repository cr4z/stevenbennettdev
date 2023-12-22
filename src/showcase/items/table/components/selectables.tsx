import { Box, Checkbox, TableCell, Typography } from "@mui/material";

export function SelectableColumnHeaderCell(props: {
  value: boolean;
  onClick: () => void;
  numSelected: number;
}) {
  const { numSelected, onClick, value } = props;

  return (
    <TableCell>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox size="small" checked={value} onClick={onClick} />
        <Box sx={{ minWidth: "3.4rem", display: "flex" }}>
          <Typography>All</Typography>
          {numSelected > 0 && (
            <Typography className="noselect" ml=".3rem" sx={{ color: "#0005" }}>
              ({numSelected})
            </Typography>
          )}
        </Box>
      </Box>
    </TableCell>
  );
}

export function SelectableRowFirstCell(props: {
  checked: boolean;
  onToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  const { checked, onToggle } = props;

  return (
    <TableCell>
      <Checkbox
        size="small"
        checked={checked}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onToggle(e)}
      />
    </TableCell>
  );
}
