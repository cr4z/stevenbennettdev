import { useRef, useState, Dispatch, SetStateAction } from "react";

interface UseMenuResult {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

function useMenu(): UseMenuResult {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  return { ref, show, setShow };
}

export default useMenu;
