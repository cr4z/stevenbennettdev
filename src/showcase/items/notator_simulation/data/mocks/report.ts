import dayjs from "dayjs";
import { TruckerReport } from "../types/report";
import { getBlankItemLedger, getRandomSchedule } from "./blank_trucker";

export const MOCK_NOTATOR_REPORT: TruckerReport = {
  title: "Example Report 1",
  description: "",
  reportingDuration: {
    startTime: dayjs().startOf("hour"),
    endTime: dayjs().startOf("hour").add(1, "hour"),
  },
  location: "Austin, TX",
  customItemLedger: { smallItems: [], mediumItems: [], largeItems: [] },
  truckerJournals: [
    {
      id: "547abffb",
      status: "En Route",
      fullName: "Kurt Cobain",
      schedule: getRandomSchedule(),
      itemLedger: getBlankItemLedger(),
      notes: "",
    },
    {
      id: "a6e31c46",
      status: "Off Duty",
      fullName: "Carlos Santana",
      schedule: getRandomSchedule(),
      itemLedger: getBlankItemLedger(),
      notes: "",
    },
    {
      id: "9385d06f",
      status: "Heading Back",
      fullName: "Amy Winehouse",
      schedule: getRandomSchedule(),
      itemLedger: getBlankItemLedger(),
      notes: "",
    },
    {
      id: "da4679ee",
      status: "Off Duty",
      fullName: "Keith Richards",
      schedule: getRandomSchedule(),
      itemLedger: getBlankItemLedger(),
      notes: "",
    },
  ],
};
