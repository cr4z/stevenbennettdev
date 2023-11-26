import { useNotatorTools } from "../../../tools/use_notator_tools";
import { CargoItem } from "../types/cargo_item_type";

export type ItemSizeMode = "small" | "medium" | "large";

export function useDefaultNames(props: { mode: ItemSizeMode }): string[] {
  const { warehouseProfile } = useNotatorTools();
  if (!warehouseProfile) return [];

  switch (props.mode) {
    case "small":
      return warehouseProfile.defaultItemsLedger.smallItems ?? [];
    case "medium":
      return warehouseProfile.defaultItemsLedger.mediumItems ?? [];
    case "large":
      return warehouseProfile.defaultItemsLedger.largeItems ?? [];
  }
}

export function useProvidedList(props: { mode: ItemSizeMode }): CargoItem[] {
  const {
    truckerTools: { draftTrucker },
  } = useNotatorTools();

  if (!draftTrucker) return [];

  switch (props.mode) {
    case "small":
      return draftTrucker.itemLedger.smallItems ?? [];
    case "medium":
      return draftTrucker.itemLedger.mediumItems ?? [];
    case "large":
      return draftTrucker.itemLedger.largeItems ?? [];
  }
}

export function useDraftCustomItemsLedger(props: {
  mode: ItemSizeMode;
}): string[] {
  const { draftReport } = useNotatorTools();

  switch (props.mode) {
    case "small":
      return draftReport?.customItemLedger.smallItems ?? [];
    case "medium":
      return draftReport?.customItemLedger.mediumItems ?? [];
    case "large":
      return draftReport?.customItemLedger.largeItems ?? [];
  }
}

export function useSavedCustomItemsLedger(props: { mode: ItemSizeMode }) {
  const { report } = useNotatorTools();

  switch (props.mode) {
    case "small":
      return report?.customItemLedger.smallItems ?? [];
    case "medium":
      return report?.customItemLedger.mediumItems ?? [];
    case "large":
      return report?.customItemLedger.largeItems ?? [];
  }
}

export function getCustomItemsPath(props: { mode: ItemSizeMode }): string {
  switch (props.mode) {
    case "small":
      return "customItemLedger.smallItems";
    case "medium":
      return "customItemLedger.mediumItems";
    case "large":
      return "customItemLedger.largeItems";
  }
}

export function getProvidedListPath(props: { mode: ItemSizeMode }) {
  switch (props.mode) {
    case "small":
      return "itemLedger.smallItems";
    case "medium":
      return "itemLedger.mediumItems";
    case "large":
      return "itemLedger.largeItems";
  }
}
