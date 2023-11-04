import { NotatorEvent } from "../types/event";

export interface NotatorToolsProviderProps {
  draftEvent: NotatorEvent;
  editDraft: EditEventFunctionType;
  event: NotatorEvent | null;
  selectedSegmentIndex: number;
  setSelectedSegmentIndex: SetSelectedSegmentIndexFunctionType;
  isSaveSpinnerActive: boolean;
  saveEvent: SaveEventFunctionType;
}

export type EditEventFunctionType = (
  propertyPath: string,
  updatedValue: any,
  cb?: () => void
) => NotatorEvent;

export type SaveEventFunctionType = (freshEvent: NotatorEvent) => Promise<void>;

export type SetSelectedSegmentIndexFunctionType = React.Dispatch<
  React.SetStateAction<number>
>;
