import { useNotatorTools } from "../../tools/hooks/use_notator_tools";
import NoneSelectedContent from "./content/none_selected";
import RightWidgetMainContent from "./content/right_widget_main_content";

export function RightWidget() {
  const { selectedSegmentTools: selectedSegmentID } = useNotatorTools();

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
