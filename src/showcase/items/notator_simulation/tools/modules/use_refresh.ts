import { useState } from "react";

type UseSoftRefreshResponse = {
  softRefreshSwitch: boolean;
  toggleSoftRefresh: () => void;
};
export function useSoftRefresh(): UseSoftRefreshResponse {
  const [softRefreshSwitch, setSoftRefreshSwitch] = useState<boolean>(false);

  function toggleSoftRefresh() {
    setSoftRefreshSwitch(!softRefreshSwitch);
  }

  return { softRefreshSwitch, toggleSoftRefresh };
}
