import dayjs from "dayjs";
import { NotatorTruckerReport } from "../types/report";
import { getBlankItemLedger, getRandomSchedule } from "./blank_trucker";

export const MOCK_NOTATOR_REPORT: NotatorTruckerReport = {
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
      fullName: "Edward Vedder",
      schedule: getRandomSchedule(),
      itemLedger: {
        smallItems: [{ name: "246", increments: 3 }],
        mediumItems: [],
        largeItems: [],
      },
    },
    {
      id: "a6e31c46",
      status: "Off Duty",
      fullName: "Devon Rice",
      schedule: getRandomSchedule(),
      itemLedger: getBlankItemLedger(),
    },
    {
      id: "9385d06f",
      status: "Heading Back",
      fullName: "Ray LaMontagne",
      schedule: getRandomSchedule(),
      itemLedger: getBlankItemLedger(),
    },
    {
      id: "da4679ee",
      status: "Off Duty",
      fullName: "Alice Cheynes",
      schedule: getRandomSchedule(),
      itemLedger: getBlankItemLedger(),
    },
  ],
};
