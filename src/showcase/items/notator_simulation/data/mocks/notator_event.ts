import dayjs from "dayjs";
import { NotatorEvent } from "../types/event";

export const MOCK_NOTATOR_EVENT: NotatorEvent = {
  title: "Example Event 1",
  eventTimes: {
    startTime: dayjs().startOf("hour"),
    endTime: dayjs().startOf("hour").add(1, "hour"),
  },
};
