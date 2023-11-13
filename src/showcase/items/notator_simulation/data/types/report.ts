import { Dayjs } from "dayjs";

export interface NotatorTruckerReport {
  title: string;
  description: string;
  eventTimes: EventTimes;
  truckerJournals: NotatorTruckerJournal[];
  location: string;
}

export interface NotatorTruckerJournal {
  id: string;
  title: string;
  status: TruckerStatus;
}

export type EventTimes = { startTime: Dayjs; endTime: Dayjs };

export type TruckerStatus =
  | "Off Duty"
  | "En Route"
  | "Running Late"
  | "Heading Back"
  | "Awaiting Instruction"
  | "Vehicle in Maintenence";
