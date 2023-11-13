import dayjs from "dayjs";
import { NotatorTruckerReport } from "../types/report";

export const MOCK_NOTATOR_EVENT: NotatorTruckerReport = {
  title: "Example Event 1",
  description: "",
  eventTimes: {
    startTime: dayjs().startOf("hour"),
    endTime: dayjs().startOf("hour").add(1, "hour"),
  },
  location: "Austin, TX",
  truckerJournals: [
    { id: "547abffb", status: "Off Duty", title: "Edward Vedder" },
    { id: "a6e31c46", status: "En Route", title: "Devon Rice" },
    { id: "9385d06f", status: "En Route", title: "Ray LaMontagne" },
    { id: "da4679ee", status: "Heading Back", title: "Alice Cheynes" },
  ],
};
