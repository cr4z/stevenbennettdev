import { useEffect, useState } from "react";
import { API_REPORTS } from "../../data/api";
import { NotatorTruckerReport } from "../../data/types/report";

export function useFetchReport(props: {
  dependencies: { refetchSwitch: boolean };
  onSetIsSaveSpinnerActive: (v: boolean) => void;
}): NotatorTruckerReport | null {
  const [report, setReport] = useState<NotatorTruckerReport | null>(null);

  useEffect(() => {
    async function fetchAndSetReport() {
      const report = await API_REPORTS.v1ReportsGet();
      setReport(report);
    }

    async function initializeNotator() {
      await fetchAndSetReport();
      props.onSetIsSaveSpinnerActive(false); // in case this is fired due to softRefreshSwitch
    }

    initializeNotator();
  }, [props.dependencies.refetchSwitch]);

  return report;
}
