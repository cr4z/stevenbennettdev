import { Dayjs } from "dayjs";

export interface NotatorEvent {
  title: string;
  eventTimes: {
    startTime: Dayjs;
    endTime: Dayjs;
  };
}
