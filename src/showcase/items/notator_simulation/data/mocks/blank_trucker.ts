import dayjs from "dayjs";
import {
  NotatorTruckerJournal,
  TruckerItemLedger,
  TruckerSchedule,
} from "../types/report";

export function getBlankTrucker(props: {
  name: string;
}): NotatorTruckerJournal {
  return {
    id: crypto.randomUUID(),
    fullName: props.name,
    status: "Off Duty",
    schedule: getRandomSchedule(),
    itemLedger: getBlankItemLedger(),
  };
}

export function getRandomSchedule(): TruckerSchedule {
  const daysOffset = Math.random() * 8 - 4;

  return {
    departureDate: dayjs().subtract(daysOffset, "days"),
    returnDate: dayjs().subtract(daysOffset, "days").add(8, "days"),
  };
}

export function getBlankItemLedger(): TruckerItemLedger {
  return { smallItems: [], mediumItems: [], largeItems: [] };
}
