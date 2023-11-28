import { useState, useEffect } from "react";
import { NotatorTruckerReport } from "../../data/types/report";

export interface TruckerSelectorTools {
  selectedTruckerID: string | null;
  setSelectedTruckerID: React.Dispatch<React.SetStateAction<string | null>>;
  resetSelectedTruckerToFirst: (freshEvent: NotatorTruckerReport) => void;
  setSelectedTruckerToLast: (freshEvent: NotatorTruckerReport) => void;
  selectedTruckerIndex: number;
}

/**
 * Module responsible for managing the selected segment user interface in the left widget.
 */
export default function useSegmentSelectorTools(props: {
  dependencies: {
    draftReport: NotatorTruckerReport | null;
    report: NotatorTruckerReport | null;
  };
}): TruckerSelectorTools {
  const {
    dependencies: { draftReport, report },
  } = props;

  const [selectedTruckerID, setSelectedTruckerID] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (report) {
      resetSelectedTruckerToFirst(report);
    }
  }, [report]);

  function resetSelectedTruckerToFirst(freshEvent: NotatorTruckerReport) {
    setSelectedTruckerID(freshEvent.truckerJournals[0]?.id);
  }

  function setSelectedTruckerToLast(freshEvent: NotatorTruckerReport) {
    const lastIndex = freshEvent.truckerJournals.length - 1;

    setSelectedTruckerID(freshEvent.truckerJournals[lastIndex]?.id);
  }

  const selectedTruckerIndex =
    draftReport?.truckerJournals.findIndex(
      (segment) => segment.id === selectedTruckerID
    ) ?? 0;

  return {
    selectedTruckerID,
    setSelectedTruckerID,
    resetSelectedTruckerToFirst,
    setSelectedTruckerToLast,
    selectedTruckerIndex,
  };
}
