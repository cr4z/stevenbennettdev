import { useEffect, useState } from "react";
import { TruckerReport } from "../../data/types/report";

type UseDraftResponse = {
  draftReport: TruckerReport | null;
  editDraft: EditDraftFunctionType;
};

export function useDraftReport(props: {
  dependencies: { report: TruckerReport | null };
}): UseDraftResponse {
  const { report } = props.dependencies;

  const [draftReport, setDraftReport] = useState<TruckerReport | null>(
    null
  );

  useEffect(() => {
    if (!report) return;

    setDraftReport(report);
  }, [report]);

  const setDraftReportChangeCallback = useCallbackOnUpdate(draftReport);

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
  function editDraft(props: EditDraftFunctionProps): TruckerReport {
    if (props.cb) {
      setDraftReportChangeCallback(props.cb);
    }

    const pathArray = props.path.split(".");
    const deepCopy = JSON.parse(
      JSON.stringify(draftReport)
    ) as TruckerReport;
    let currentObject: any = deepCopy;

    for (let i = 0; i < pathArray.length - 1; i++) {
      currentObject = currentObject[pathArray[i]];
    }
    currentObject[pathArray[pathArray.length - 1]] = props.value;

    setDraftReport(deepCopy);

    return deepCopy;
  }

  return { draftReport: draftReport, editDraft };
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

export type EditDraftFunctionProps = {
  path: string;
  value: any;
  cb?: () => void;
};
export type EditDraftFunctionType = (
  props: EditDraftFunctionProps
) => TruckerReport;
