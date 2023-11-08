import dayjs from "dayjs";
import { NotatorEvent } from "../types/event";

export const MOCK_NOTATOR_EVENT: NotatorEvent = {
  title: "Example Event 1",
  description: "",
  eventTimes: {
    startTime: dayjs().startOf("hour"),
    endTime: dayjs().startOf("hour").add(1, "hour"),
  },
  location: "Austin, TX",
  segments: [
    { id: "547abffb", title: "Pre-Event Preparations" },
    { id: "a6e31c46", title: "Ceremony/Opening Segment" },
    { id: "9385d06f", title: "Activities/Games" },
    { id: "da4679ee", title: "Dining/Food & Drinks" },
  ],
};
