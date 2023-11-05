import { Dayjs } from "dayjs";

export interface NotatorEvent {
  title: string;
  description: string;
  eventTimes: EventTimes;
  segments: NotatorEventSegment[];
  location: string;
}

export interface NotatorEventSegment {
  title: string;
}

export type EventTimes = { startTime: Dayjs; endTime: Dayjs };
