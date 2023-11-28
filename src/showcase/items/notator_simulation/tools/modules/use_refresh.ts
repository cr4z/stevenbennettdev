import { useState } from "react";

type UseSoftRefreshResponse = {
  refetchSwitch: boolean;
  triggerRefetchSwitch: () => void;
};
export function useSoftRefresh(): UseSoftRefreshResponse {
  const [refetchSwitch, setSoftRefreshSwitch] = useState<boolean>(false);

  function triggerRefetchSwitch() {
    setSoftRefreshSwitch(!refetchSwitch);
  }

  return { refetchSwitch, triggerRefetchSwitch };
}
