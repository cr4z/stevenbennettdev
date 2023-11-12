import { NotatorEvent, NotatorEventSegment } from "../../data/types/event";
import { EditDraftFunctionProps, EditDraftFunctionType } from "./use_draft";

export interface EditSegmentTools {
  editSegment: EditDraftFunctionType;
  draftSegment: NotatorEventSegment | null;
}

export function useSegmentTools(props: {
  dependencies: {
    editDraft: EditDraftFunctionType;
    selectedSegmentIndex: number;
    draftEvent: NotatorEvent | null;
  };
}): EditSegmentTools {
  const { editDraft, selectedSegmentIndex, draftEvent } = props.dependencies;

  function editSegment(props: EditDraftFunctionProps) {
    const { path, value, cb } = props;

    editDraft({
      path: `segments.${selectedSegmentIndex}.${path}`,
      value,
      cb,
    });

    return {} as NotatorEvent;
  }

  const draftSegment = draftEvent?.segments[selectedSegmentIndex] ?? null;

  return { editSegment, draftSegment };
}
