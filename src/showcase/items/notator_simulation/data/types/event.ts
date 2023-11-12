import { Dayjs } from "dayjs";

export interface NotatorEvent {
  title: string;
  description: string;
  eventTimes: EventTimes;
  segments: NotatorEventSegment[];
  location: string;
}

export interface NotatorEventSegment {
  id: string;
  title: string;
  priority: TruckerStatus;
}

export type EventTimes = { startTime: Dayjs; endTime: Dayjs };

export type TruckerStatus =
  | "Off Duty"
  | "En Route"
  | "Running Late"
  | "Heading Back"
  | "Awaiting Instruction"
  | "Vehicle in Maintenence";
