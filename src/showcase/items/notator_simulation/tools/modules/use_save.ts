import { API_REPORTS } from "../../data/api";
import { TruckerReport } from "../../data/types/report";

export function useSaveReport(props: {
  onSetIsSaveSpinnerActive: (v: boolean) => void;
  onTriggerRefetchSwitch: () => void;
}) {
  const { onSetIsSaveSpinnerActive, onTriggerRefetchSwitch } = props;

  /**
   * This is only function that should ever be responsible for session saving.
   *
   * @param freshEvent Requires developer to pass in the most recently available version of session to avoid asynchronous lifecycle issues.
   * @returns The freshest version of Event in the instance of immediate subsequent actions.
   */
  async function saveEvent(freshEvent: TruckerReport) {
    onSetIsSaveSpinnerActive(true);

    try {
      await API_REPORTS.v1ReportsPut(freshEvent);
      onTriggerRefetchSwitch();
      onSetIsSaveSpinnerActive(false);
    } catch (err) {
      throw err;
    }
  }

  return saveEvent;
}

export type SaveReportFunctionType = (
  freshEvent: TruckerReport
) => Promise<void>;
