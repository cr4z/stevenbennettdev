import { useState, useEffect } from "react";
import { NotatorEvent } from "../../data/types/event";

export interface SelectedSegmentTools {
  selectedSegmentID: string | null;
  setSelectedSegmentID: React.Dispatch<React.SetStateAction<string | null>>;
  resetSelectedSegmentID: (freshEvent: NotatorEvent) => void;
  setSelectedSegmentToLast: (freshEvent: NotatorEvent) => void;
}

export function useSelectedSegmentTools(props: {
  dependencies: { event: NotatorEvent | null };
}) {
  const {
    dependencies: { event },
  } = props;

  const [selectedSegmentID, setSelectedSegmentID] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (event) {
      resetSelectedSegmentID(event);
    }
  }, [event]);

  function resetSelectedSegmentID(freshEvent: NotatorEvent) {
    setSelectedSegmentID(freshEvent.segments[0]?.id);
  }

  function setSelectedSegmentToLast(freshEvent: NotatorEvent) {
    const lastIndex = freshEvent.segments.length - 1;

    console.log({ lastIndex });

    setSelectedSegmentID(freshEvent.segments[lastIndex]?.id);
  }

  return {
    selectedSegmentID,
    setSelectedSegmentID,
    resetSelectedSegmentID,
    setSelectedSegmentToLast,
  };
}
