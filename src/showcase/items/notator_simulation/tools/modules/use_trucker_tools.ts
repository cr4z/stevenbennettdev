import {
  NotatorTruckerReport,
  NotatorTruckerJournal,
} from "../../data/types/report";
import { EditDraftFunctionProps, EditDraftFunctionType } from "./use_draft";

export interface EditTruckerTools {
  editTrucker: EditDraftFunctionType;
  draftTrucker: NotatorTruckerJournal | null;
}

export function useEditTruckerTools(props: {
  dependencies: {
    editDraft: EditDraftFunctionType;
    selectedTruckerIndex: number;
    draftReport: NotatorTruckerReport | null;
  };
}): EditTruckerTools {
  const { editDraft, selectedTruckerIndex, draftReport } = props.dependencies;

  function editTrucker(props: EditDraftFunctionProps) {
    const { path, value, cb } = props;

    const res = editDraft({
      path: `truckerJournals.${selectedTruckerIndex}.${path}`,
      value,
      cb,
    });

    return res;
  }

  const draftTrucker =
    draftReport?.truckerJournals[selectedTruckerIndex] ?? null;

  return { editTrucker, draftTrucker };
}
