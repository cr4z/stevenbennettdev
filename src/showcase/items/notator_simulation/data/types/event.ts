import { Dayjs } from "dayjs";

export interface NotatorEvent {
  eventTimes: {
    startTime: Dayjs;
    endTime: Dayjs;
  };
}
