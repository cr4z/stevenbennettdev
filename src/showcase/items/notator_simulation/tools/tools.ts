import { useState } from "react";
import { useSoftRefresh } from "./hooks/use_refresh";
import { useDraft } from "./hooks/use_draft";
import { useSaveEvent } from "./hooks/use_save";
import { useEvent } from "./hooks/use_event";
import { NotatorEvent } from "../data/types/event";

import useSegmentNavbarTools, { SegmentNavbarTools } from "./hooks/use_navbar";
import {
  SelectedSegmentTools,
  useSelectedSegmentTools,
} from "./hooks/selected_segment_tools";

export function useNotatorToolsProviderProps(): NotatorToolsProviderProps {
  // ----- Notator-Wide Simple React State -----

  const [isSaveSpinnerActive, setIsSaveSpinnerActive] =
    useState<boolean>(false);

  // ----- Notator-Wide Complex Modules -----

  const { softRefreshSwitch, toggleSoftRefresh } = useSoftRefresh();

  const event = useEvent({
    dependencies: { softRefreshSwitch },
    setIsSaveSpinnerActive,
  });

  const selectedSegmentTools = useSelectedSegmentTools({
    dependencies: { event },
  });

  const { draftEvent, editDraft } = useDraft({ dependencies: { event } });

  const saveEvent = useSaveEvent({
    setIsSaveSpinnerActive,
    toggleSoftRefresh,
  });

  const segmentNavbarTools = useSegmentNavbarTools();

  return {
    draftEvent,
    editDraft,
    event,
    saveEvent,
    isSaveSpinnerActive,
    selectedSegmentTools,
    segmentNavbarTools,
  };
}

export interface NotatorToolsProviderProps {
  draftEvent: NotatorEvent | null;
  editDraft: EditEventFunctionType;
  event: NotatorEvent | null;
  isSaveSpinnerActive: boolean;
  saveEvent: SaveEventFunctionType;
  selectedSegmentTools: SelectedSegmentTools;
  segmentNavbarTools: SegmentNavbarTools;
}

export type EditEventFunctionType = (
  propertyPath: string,
  updatedValue: any,
  cb?: () => void
) => NotatorEvent;

export type SaveEventFunctionType = (freshEvent: NotatorEvent) => Promise<void>;
