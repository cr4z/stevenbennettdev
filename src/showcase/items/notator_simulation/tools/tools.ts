import { useState } from "react";
import { useSoftRefresh } from "./hooks/use_refresh";
import { useDraft } from "./hooks/use_draft";
import { useSaveEvent } from "./hooks/use_save";
import { useEvent } from "./hooks/use_event";
import { NotatorEvent } from "../data/types/event";
import {
  EditEventFunctionType,
  SaveEventFunctionType,
  SetSelectedSegmentIndexFunctionType,
} from "./types";

export function useNotatorToolsProviderProps(): NotatorToolsProviderProps {
  // ----- Notator-Wide Simple React State -----

  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<number>(0);
  const [isSaveSpinnerActive, setIsSaveSpinnerActive] =
    useState<boolean>(false);

  // ----- Notator-Wide Complex Modules -----

  const { softRefreshSwitch, toggleSoftRefresh } = useSoftRefresh();

  const event = useEvent({
    dependencies: { softRefreshSwitch },
    setIsSaveSpinnerActive,
  });
  const { draftEvent, editDraft } = useDraft({ dependencies: { event } });

  const saveEvent = useSaveEvent({
    setIsSaveSpinnerActive,
    toggleSoftRefresh,
  });

  return {
    draftEvent,
    editDraft,
    event,
    saveEvent,
    selectedSegmentIndex,
    setSelectedSegmentIndex,
    isSaveSpinnerActive,
  };
}

export interface NotatorToolsProviderProps {
  draftEvent: NotatorEvent | null;
  editDraft: EditEventFunctionType;
  event: NotatorEvent | null;
  selectedSegmentIndex: number;
  setSelectedSegmentIndex: SetSelectedSegmentIndexFunctionType;
  isSaveSpinnerActive: boolean;
  saveEvent: SaveEventFunctionType;
}
