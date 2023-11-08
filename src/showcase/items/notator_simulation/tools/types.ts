import { NotatorEvent } from "../data/types/event";

export type EditEventFunctionType = (
  propertyPath: string,
  updatedValue: any,
  cb?: () => void
) => NotatorEvent;

export type SaveEventFunctionType = (freshEvent: NotatorEvent) => Promise<void>;

export type SetSelectedSegmentIndexFunctionType = React.Dispatch<
  React.SetStateAction<number>
>;
