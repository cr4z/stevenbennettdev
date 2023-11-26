import {
  ItemSizeMode,
  useDraftCustomItemsLedger,
  useSavedCustomItemsLedger,
} from "./generics";

export function useCustomsWithDeletions(props: {
  mode: ItemSizeMode;
}): string[] {
  const { mode } = props;

  const draftCustomItemsLedger = useDraftCustomItemsLedger({ mode });
  const savedCustomItemsLedger = useSavedCustomItemsLedger({ mode });

  const savedCustoms: string[] = savedCustomItemsLedger;
  const draftCustoms: string[] = draftCustomItemsLedger;

  const itemsToRender = savedCustoms.filter((item) =>
    draftCustoms.includes(item)
  );

  return itemsToRender;
}
