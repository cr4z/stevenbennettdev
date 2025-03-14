import { Box, Typography } from "@mui/material";
import { SBDCodeBlock } from "../../sbd_development_kit/components/code_block";

function QuickSortInPlaceExample() {
  return (
    <Box
      sx={{
        p: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        overflowY: "auto",
        flexGrow: 1,
        maxHeight: "100%",
      }}
    >
      <Typography variant="h5">QuickSort Algorithm (In-Place)</Typography>
      <Typography variant="body1">
        Seen below is my implementation of the QuickSort algorithm for use within a TypeScript project.
      </Typography>
      <SBDCodeBlock
        code={`export function quickSortInPlace<T>(
  arr: T[],
  low: number,
  high: number,
  compareFn: (a: T, b: T) => number,
) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high, compareFn);
    quickSortInPlace(arr, low, pivotIndex - 1, compareFn);
    quickSortInPlace(arr, pivotIndex + 1, high, compareFn);
  }
}

function partition<T>(
  arr: T[],
  low: number,
  high: number,
  compareFn: (a: T, b: T) => number,
): number {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (compareFn(arr[j], pivot) < 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`}
      />
    </Box>
  );
}

export default QuickSortInPlaceExample;
