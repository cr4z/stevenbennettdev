import { useEffect, useState } from "react";
import { NotatorEvent } from "../../types/event";

type UseDraftResponse = {
  draftEvent: NotatorEvent | null;
  editDraft: (
    propertyPath: string,
    updatedValue: any,
    cb?: () => void
  ) => NotatorEvent;
};

export function useDraft(props: {
  dependencies: { event: NotatorEvent | null };
}): UseDraftResponse {
  const { event } = props.dependencies;

  const [draftEvent, setDraftEvent] = useState<NotatorEvent | null>(null);

  useEffect(() => {
    if (!event) return;

    setDraftEvent(event);
  }, [event]);

  const setDraftEventChangeCallback = useCallbackOnUpdate(draftEvent);

  /**
   * Edits a draft session's deep properties while avoiding React lifecycle issues.
   *
   * This function is designed to modify nested properties within the session state object.
   * It creates a deep copy of the session to safely apply updates, thereby eliminating
   * the potential for lifecycle-related bugs that could arise from conventional state mutation.
   *
   * @param propertyPath Specifies the nested property to update. Uses dot notation to traverse the session object.
   * @param updatedValue The new value to set for the specified property.
   * @param cb Optional callback function. USE THIS IF YOU NEED TO SAVE THE SESSION AFTER EDITING (to avoid save issues)!
   *
   * @returns The updated session object, providing immediate access to the most
   * recent state andthus bypassing the asynchronous nature of state updates.
   */
  function editDraft(propertyPath: string, updatedValue: any, cb?: () => void) {
    if (cb) {
      setDraftEventChangeCallback(cb);
    }

    const pathArray = propertyPath.split(".");
    const deepCopy = JSON.parse(JSON.stringify(draftEvent)) as NotatorEvent;
    let currentObject: any = deepCopy;

    for (let i = 0; i < pathArray.length - 1; i++) {
      currentObject = currentObject[pathArray[i]];
    }
    currentObject[pathArray[pathArray.length - 1]] = updatedValue;

    setDraftEvent(deepCopy);

    return deepCopy;
  }

  return { draftEvent, editDraft };
}

// -------- PRIVATE HOOKS --------

function useCallbackOnUpdate(dependency: any) {
  const [cb, setCallback] = useState<() => void | undefined>();

  useEffect(() => {
    if (typeof cb === "function") {
      cb();
      setCallback(undefined);
    }
  }, [dependency]);

  return setCallback; // This just sets the state, should not invoke the callback
}
