import NoneSelectedContent from "./content/none_selected";
import RightWidgetMainContent from "./content/main";
import { useNotatorTools } from "../../tools/use_notator_tools";
import { useEffect } from "react";

export function RightWidget() {
  const {
    truckerSelectorTools: { selectedTruckerID: selectedSegmentID },
  } = useNotatorTools();

  return (
    <>
      {!selectedSegmentID ? (
        <NoneSelectedContent />
      ) : (
        <RightWidgetMainContent />
      )}
    </>
  );
}
