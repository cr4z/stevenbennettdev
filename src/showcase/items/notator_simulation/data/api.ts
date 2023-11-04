import { NotatorEvent } from "./types/event";
import { MOCK_NOTATOR_EVENT } from "./mocks/notator_event";

export const API_EVENTS = {
  v1EventGet: async () => {
    return MOCK_NOTATOR_EVENT;
  },
  v1EventsPut: async (stateInUS: string, freshEvent: NotatorEvent) => {
    return {} as NotatorEvent;
  },
};
