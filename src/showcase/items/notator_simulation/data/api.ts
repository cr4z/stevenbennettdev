import { NotatorTruckerReport } from "./types/report";
import { MOCK_NOTATOR_REPORT } from "./mocks/report";
import { MOCK_WAREHOUSE_PROFILE } from "./mocks/warehouse_profile";

export const API_REPORTS = {
  v1ReportsGet: async () => {
    return MOCK_NOTATOR_REPORT;
  },
  v1ReportsPut: async (
    stateInUS: string,
    freshReport: NotatorTruckerReport
  ) => {
    return {} as NotatorTruckerReport;
  },
};

export const API_WAREHOUSES = {
  v1WarehouseProfilesGet: async () => {
    return MOCK_WAREHOUSE_PROFILE;
  },
};
