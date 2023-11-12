import NoneSelectedContent from "./content/none_selected";
import RightWidgetMainContent from "./content/main";
import { useNotatorTools } from "../../tools/use_notator_tools";

export function RightWidget() {
  const {
    segmentSelectorTools: { selectedSegmentID },
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
