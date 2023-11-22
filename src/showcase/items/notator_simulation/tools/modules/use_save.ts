import { API_REPORTS } from "../../data/api";
import { selectStateInUS, useSelector } from "../../data/redux";
import { NotatorTruckerReport } from "../../data/types/report";

export function useSaveReport(props: {
  setIsSaveSpinnerActive: (v: boolean) => void;
  toggleSoftRefresh: () => void;
}) {
  const { setIsSaveSpinnerActive, toggleSoftRefresh } = props;

  /**
   * This is only function that should ever be responsible for session saving.
   *
   * @param freshEvent Requires developer to pass in the most recently available version of session to avoid asynchronous lifecycle issues.
   * @returns The freshest version of Event in the instance of immediate subsequent actions.
   */
  async function saveEvent(freshEvent: NotatorTruckerReport) {
    setIsSaveSpinnerActive(true);

    const stateInUS = useSelector(selectStateInUS);

    try {
      await API_REPORTS.v1ReportsPut(stateInUS, freshEvent);
      toggleSoftRefresh();
      setIsSaveSpinnerActive(false);
    } catch (err) {
      throw err;
    }
  }

  return saveEvent;
}

export type SaveReportFunctionType = (freshEvent: NotatorTruckerReport) => Promise<void>;
