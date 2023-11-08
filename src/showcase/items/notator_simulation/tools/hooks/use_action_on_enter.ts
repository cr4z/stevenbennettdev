import { useEffect } from "react";

export default function useActionOnEnterPressed(
  action: () => void,
  dependencies: any[]
) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        action();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [...dependencies]);
}
