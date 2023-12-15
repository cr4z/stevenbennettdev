import { useRef, useEffect } from "react";

function useEffectSkipMount(effect: () => void, dependencies: any[]): void {
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    effect();
  }, dependencies);
}



export default useEffectSkipMount;
