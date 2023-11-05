import { Dayjs } from "dayjs";

export interface NotatorEvent {
  title: string;
  description: string;
  eventTimes: {
    startTime: Dayjs;
    endTime: Dayjs;
  };
}
