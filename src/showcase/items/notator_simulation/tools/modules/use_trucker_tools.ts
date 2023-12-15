import {
  TruckerReport,
  TruckerJournal,
} from "../../data/types/report";
import { EditDraftFunctionProps, EditDraftFunctionType } from "./use_draft";

export interface TruckerTools {
  editTrucker: EditDraftFunctionType;
  draftTrucker: TruckerJournal | null;
  savedTrucker: TruckerJournal | null;
}

export function useTruckerTools(props: {
  dependencies: {
    editDraft: EditDraftFunctionType;
    selectedTruckerIndex: number;
    draftReport: TruckerReport | null;
    report: TruckerReport | null;
  };
}): TruckerTools {
  const { editDraft, selectedTruckerIndex, draftReport, report } =
    props.dependencies;

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

  const savedTrucker = report?.truckerJournals[selectedTruckerIndex] ?? null;

  return { editTrucker, draftTrucker, savedTrucker };
}
