import {
  selectSelectedSegmentID,
  useNotatorToolsSelector,
} from "../../tools/selector";
import NoneSelectedContent from "./content/none_selected";
import RightWidgetMainContent from "./content/right_widget_main_content";

export function RightWidget() {
  const selectedSegmentID = useNotatorToolsSelector(selectSelectedSegmentID);

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
