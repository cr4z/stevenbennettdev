import { useEffect, useState } from "react";
import { API_EVENTS } from "../../data/api";
import { NotatorEvent } from "../../data/types/event";

export function useEvent(props: {
  dependencies: { softRefreshSwitch: boolean };
  setIsSaveSpinnerActive: (v: boolean) => void;
}): NotatorEvent | null {
  const [event, setEvent] = useState<NotatorEvent | null>(null);

  useEffect(() => {
    async function fetchAndSetEvent() {
      const Event = await API_EVENTS.v1EventGet();
      setEvent(Event);
    }

    async function initializeNotator() {
      await fetchAndSetEvent();
      props.setIsSaveSpinnerActive(false); // in case this is fired due to softRefreshSwitch
    }

    initializeNotator();
  }, [props.dependencies.softRefreshSwitch]);

  return event;
}
