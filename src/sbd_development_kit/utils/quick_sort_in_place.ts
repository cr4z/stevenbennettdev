export function quickSortInPlace<T>(
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
}
