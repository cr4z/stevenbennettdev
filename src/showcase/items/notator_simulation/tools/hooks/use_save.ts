import { API_EVENTS } from "../../data/api";
import { selectStateInUS, useSelector } from "../../data/redux";
import { NotatorEvent } from "../../types/event";

export function useSaveEvent(props: {
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
  async function saveEvent(freshEvent: NotatorEvent) {
    setIsSaveSpinnerActive(true);

    const stateInUS = useSelector(selectStateInUS);

    try {
      await API_EVENTS.v1EventsPut(stateInUS, freshEvent);
      toggleSoftRefresh();
      setIsSaveSpinnerActive(false);
    } catch (err) {
      throw err;
    }
  }

  return saveEvent;
}
