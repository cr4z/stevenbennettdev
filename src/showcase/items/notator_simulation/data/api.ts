import { TruckerReport } from "./types/report";
import { MOCK_NOTATOR_REPORT } from "./mocks/report";
import { MOCK_WAREHOUSE_PROFILE } from "./mocks/warehouse_profile";

const REPORT_STORAGE_KEY = "notatorReport";

const loadReportFromSession = (): TruckerReport => {
  const storedReport = sessionStorage.getItem(REPORT_STORAGE_KEY);
  return storedReport ? JSON.parse(storedReport) : MOCK_NOTATOR_REPORT;
};

export const API_REPORTS = {
  v1ReportsGet: async () => {
    const notatorReport = loadReportFromSession();
    return notatorReport;
  },
  v1ReportsPut: async (freshReport: TruckerReport) => {
    sessionStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(freshReport));
    return freshReport;
  },
};

export const API_WAREHOUSES = {
  v1WarehouseProfilesGet: async () => {
    return MOCK_WAREHOUSE_PROFILE;
  },
};
