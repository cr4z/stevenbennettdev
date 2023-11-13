import { NotatorTruckerReport } from "./types/report";
import { MOCK_NOTATOR_EVENT } from "./mocks/report";

export const API_REPORTS = {
  v1ReportsGet: async () => {
    return MOCK_NOTATOR_EVENT;
  },
  v1EventsPut: async (stateInUS: string, freshEvent: NotatorTruckerReport) => {
    return {} as NotatorTruckerReport;
  },
};
