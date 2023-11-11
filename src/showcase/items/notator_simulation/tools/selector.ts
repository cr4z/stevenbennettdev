import { useContext, useMemo } from "react";
import { EventContext } from "./context";
import { NotatorToolsProviderProps } from "./tools";

export function useNotatorToolsSelector<T>(
  selector: (context: NotatorToolsProviderProps) => T
) {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error(
      "useNotatorToolsSelector must be used within a NotatorToolsProvider"
    );
  }

  // Memoize the selected values
  return useMemo(() => selector(context), [context, selector]);
}

export const selectSelectedSegmentID = (context: NotatorToolsProviderProps) =>
  context.selectedSegmentTools.selectedSegmentID;

export const selectDraftEvent = (context: NotatorToolsProviderProps) =>
  context.draftEvent;
