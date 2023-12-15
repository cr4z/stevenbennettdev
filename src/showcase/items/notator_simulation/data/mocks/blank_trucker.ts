import dayjs from "dayjs";
import {
  TruckerJournal,
  TruckerItemLedger,
  TruckerSchedule,
} from "../types/report";

export function getBlankTrucker(props: {
  name: string;
}): TruckerJournal {
  return {
    id: crypto.randomUUID(),
    fullName: props.name,
    status: "Off Duty",
    schedule: getRandomSchedule(),
    itemLedger: getBlankItemLedger(),
    notes: "",
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
