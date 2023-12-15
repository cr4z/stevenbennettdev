import NoneSelectedContent from "./content/none_selected";
import RightWidgetMainContent from "./content/main";
import { useFormTools } from "../../tools/use_form_tools";

export function RightWidget() {
  const {
    truckerSelectorTools: { selectedTruckerID: selectedSegmentID },
  } = useFormTools();

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
