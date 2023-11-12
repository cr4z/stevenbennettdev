import { EventContext } from "./context";
import { useState, useEffect } from "react";
import { useSoftRefresh } from "./modules/use_refresh";
import { EditDraftFunctionType, useDraftEvent } from "./modules/use_draft";
import { SaveEventFunctionType, useSaveEvent } from "./modules/use_save";
import { useEvent } from "./modules/use_event";
import { NotatorEvent } from "../data/types/event";
import useSegmentSelectorTools, {
  SegmentSelectorTools,
} from "./modules/use_segment_selector";
import useViewportNavbarTools, {
  ViewportNavbarTools,
} from "./modules/use_navbar";
import {
  EditSegmentTools,
  useSegmentTools as useEditSegmentTools,
} from "./modules/use_segment_tools";

export function NotatorToolsProvider(props: { children: React.ReactNode }) {
  const notatorToolModules = useNotatorToolModules();

  return (
    <EventContext.Provider value={notatorToolModules}>
      {props.children}
    </EventContext.Provider>
  );
}

export interface NotatorToolModules {
  event: NotatorEvent | null;
  draftEvent: NotatorEvent | null;
  editDraft: EditDraftFunctionType;
  saveEvent: SaveEventFunctionType;
  segmentTools: EditSegmentTools;
  segmentSelectorTools: SegmentSelectorTools;
  viewportNavbarTools: ViewportNavbarTools;
  isSaveSpinnerActive: boolean;
}
function useNotatorToolModules(): NotatorToolModules {
  // Local Modules

  const [isSaveSpinnerActive, setIsSaveSpinnerActive] =
    useState<boolean>(false);

  // Imported Modules

  const { softRefreshSwitch, toggleSoftRefresh } = useSoftRefresh();

  const event = useEvent({
    dependencies: { softRefreshSwitch },
    setIsSaveSpinnerActive,
  });

  const { draftEvent, editDraft } = useDraftEvent({ dependencies: { event } });

  const segmentSelectorTools = useSegmentSelectorTools({
    dependencies: { draftEvent },
  });

  const segmentTools = useEditSegmentTools({
    dependencies: {
      editDraft,
      selectedSegmentIndex: segmentSelectorTools.selectedSegmentIndex,
      draftEvent,
    },
  });

  const saveEvent = useSaveEvent({
    setIsSaveSpinnerActive,
    toggleSoftRefresh,
  });

  const viewportNavbarTools = useViewportNavbarTools();

  // Lifecycle Effects

  useEffect(() => {
    viewportNavbarTools.setToFirstTab();
  }, [segmentSelectorTools.selectedSegmentID]);

  // Return Statement

  return {
    draftEvent,
    editDraft,
    event,
    saveEvent,
    isSaveSpinnerActive,
    segmentSelectorTools,
    viewportNavbarTools,
    segmentTools,
  };
}
