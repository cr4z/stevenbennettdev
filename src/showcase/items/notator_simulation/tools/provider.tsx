import { useState } from "react";
import { SessionContext } from "./context";
import { useDraft } from "./hooks/use_draft";
import { useEvent } from "./hooks/use_event";
import { useSaveEvent } from "./hooks/use_save";
import { useSoftRefresh } from "./hooks/use_refresh";

export function NotatorToolsProvider(props: { children: React.ReactNode }) {
  // ----- Notator-Wide Simple React State -----

  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState<number>(0);
  const [isSaveSpinnerActive, setIsSaveSpinnerActive] =
    useState<boolean>(false);

  // ----- Notator-Wide Complex Modules -----

  const { softRefreshSwitch, toggleSoftRefresh } = useSoftRefresh();
  const { draftEvent, editDraft } = useDraft();
  const event = useEvent({
    dependencies: { softRefreshSwitch },
    setIsSaveSpinnerActive,
  });
  const saveEvent = useSaveEvent({
    setIsSaveSpinnerActive,
    toggleSoftRefresh,
  });

  return (
    <SessionContext.Provider
      value={{
        draftEvent,
        editDraft,
        event,
        saveEvent,
        selectedSegmentIndex,
        setSelectedSegmentIndex,
        isSaveSpinnerActive,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
}
