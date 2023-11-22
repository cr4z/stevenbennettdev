import { Dayjs } from "dayjs";

export interface NotatorTruckerReport {
  title: string;
  description: string;
  reportingDuration: EventTimes;
  truckerJournals: NotatorTruckerJournal[];
  location: string;
  customItemLedger: {
    smallItems: string[];
    mediumItems: string[];
    largeItems: string[];
  };
}

export interface NotatorTruckerJournal {
  id: string;
  fullName: string;
  status: TruckerStatus;
  schedule: TruckerSchedule;
  itemLedger: TruckerItemLedger;
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
