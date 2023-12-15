import { Dayjs } from "dayjs";

export interface TruckerReport {
  title: string;
  description: string;
  reportingDuration: EventTimes;
  truckerJournals: TruckerJournal[];
  location: string;
  customItemLedger: {
    smallItems: string[];
    mediumItems: string[];
    largeItems: string[];
  };
}

export interface TruckerJournal {
  id: string;
  fullName: string;
  status: TruckerStatus;
  schedule: TruckerSchedule;
  itemLedger: TruckerItemLedger;
  notes: string;
}

export interface TruckerItemLedger {
  smallItems: SmallItem[];
  mediumItems: MediumItem[];
  largeItems: LargeItem[];
}

export type EventTimes = { startTime: Dayjs; endTime: Dayjs };

export type TruckerStatus =
  | "Off Duty"
  | "En Route"
  | "Running Late"
  | "Heading Back"
  | "Awaiting Instruction"
  | "Vehicle in Maintenence";

export type TruckerSchedule = {
  departureDate: Dayjs;
  returnDate: Dayjs;
};

export type SmallItem = { name: string; increments: number };
export type MediumItem = { name: string; increments: number };
export type LargeItem = { name: string; increments: number };
