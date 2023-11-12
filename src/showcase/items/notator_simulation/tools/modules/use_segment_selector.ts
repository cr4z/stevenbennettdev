import { useState, useEffect } from "react";
import { NotatorEvent } from "../../data/types/event";

export interface SegmentSelectorTools {
  selectedSegmentID: string | null;
  setSelectedSegmentID: React.Dispatch<React.SetStateAction<string | null>>;
  resetSelectedSegmentID: (freshEvent: NotatorEvent) => void;
  setSelectedSegmentToLast: (freshEvent: NotatorEvent) => void;
  selectedSegmentIndex: number;
}

/**
 * Module responsible for managing the selected segment user interface in the left widget.
 */
export default function useSegmentSelectorTools(props: {
  dependencies: { draftEvent: NotatorEvent | null };
}): SegmentSelectorTools {
  const {
    dependencies: { draftEvent },
  } = props;

  const [selectedSegmentID, setSelectedSegmentID] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (draftEvent) {
      resetSelectedSegmentID(draftEvent);
    }
  }, [draftEvent]);

  function resetSelectedSegmentID(freshEvent: NotatorEvent) {
    setSelectedSegmentID(freshEvent.segments[0]?.id);
  }

  function setSelectedSegmentToLast(freshEvent: NotatorEvent) {
    const lastIndex = freshEvent.segments.length - 1;

    setSelectedSegmentID(freshEvent.segments[lastIndex]?.id);
  }

  console.log("asdf");
  const selectedSegmentIndex =
    draftEvent?.segments.findIndex(
      (segment) => segment.id === selectedSegmentID
    ) ?? 0;

  return {
    selectedSegmentID,
    setSelectedSegmentID,
    resetSelectedSegmentID,
    setSelectedSegmentToLast,
    selectedSegmentIndex,
  };
}
