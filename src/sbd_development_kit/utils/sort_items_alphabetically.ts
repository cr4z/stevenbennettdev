/**
 * Sorts an array of items alphabetically based on a specified key.
 * If `keyStr` is provided, the function sorts the items based on the value of the nested property specified by `keyStr`.
 * If `keyStr` is not provided or is empty, the function sorts based on the items themselves.
 * The sorting can be performed in either ascending or descending order, based on the `order` parameter.
 *
 * @template T The type of elements in the items array.
 *
 * @param {T[]} items - The array of items to be sorted. Can be an array of strings or objects.
 * @param {string} [keyStr] - (Optional) The key or path (dot notation for nested properties) used for sorting when items are objects.
 * @param {"ascending" | "descending"} [order="ascending"] - (Optional) The order in which to sort the items. Default is "ascending".
 *
 * @returns {T[]} A new array containing the sorted items.
 *
 * @throws {Error} Throws an error if the values at the specified key are not strings or are undefined.
 *
 * @example
 * // Sort an array of strings in ascending order:
 * sortItemsAlphabetically(["banana", "apple", "cherry"]);
 *
 * @example
 * // Sort an array of objects based on a nested property in descending order:
 * sortItemsAlphabetically([{name: {first: "John"}}, {name: {first: "Jane"}}], "name.first", "descending");
 */
export function sortItemsAlphabetically<T>(
  items: T[],
  keyStr?: string,
  order: "ascending" | "descending" = "ascending"
): T[] {
  // Preprocess items for efficiency
  const sortableItems: SortableItem<T>[] = items.map((item) => {
    const sortValue = keyStr ? getNestedValue(item, keyStr) : item;
    if (typeof sortValue !== "string") {
      throw new Error("Invalid comparison values");
    }
    return { item, sortValue };
  });

  // Sort based on preprocessed values
  sortableItems.sort((a, b) => {
    const comparison = a.sortValue.localeCompare(b.sortValue);
    return order === "ascending" ? comparison : -comparison;
  });

  // Return sorted items in original structure
  return sortableItems.map((si) => si.item);
}

function getNestedValue(obj: any, key: string): any {
  return key.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
}

type SortableItem<T> = {
  item: T;
  sortValue: string;
};
